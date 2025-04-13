import { AbstractParseTreeVisitor } from "antlr4ng";
import { RustVisitor } from "./parser/src/RustVisitor";
import {
  AltExpressionContext,
  AltStatementContext,
  ArgumentsContext,
  BlockStatementContext,
  ConseqStatementContext,
  ConstantDeclarationContext,
  ExpressionContext,
  ExpressionStatementContext,
  FunctionCallContext,
  FunctionDeclarationContext,
  FunctionNameContext,
  IfExpressionContext,
  IfStatementContext,
  ParametersContext,
  PrimitiveTypeAnnotationContext,
  ProgramContext,
  ReturnStatementContext,
  ReturnTypeContext,
  StatementContext,
  TypeAnnotationContext,
  ValidTypeContext,
  VariableAssignmentContext,
  VariableDeclarationContext,
  WhileLoopContext,
} from "./parser/src/RustParser";
import { OwnershipEnvironment, ParameterTypeOwnership, TypeOwnership, Type } from "./RustTypeAndOwnershipCheckerUtils";
import { createGzip } from "zlib";

class RustTypeAndOwnershipChecker extends AbstractParseTreeVisitor<TypeOwnership> implements RustVisitor<TypeOwnership> {
  public ownership_environment: OwnershipEnvironment = new OwnershipEnvironment();
  private binop_arithmic_xs: string[] = ["+", "-", "*", "/"];
  private binop_comp_xs: string[] = ["==", "!=", "<", ">", "<=", ">="];

  private typesEqual(a: Type, b: Type): boolean {
    if (a === null || b === null) {
      return a === b;
    }

    if (typeof a === "string" && typeof b === "string") {
      return a === b;
    } else if (typeof a === "object" && typeof b === "object") {
      if (a.type === "function" && b.type === "function") {
        if (a.params.length !== b.params.length) {
          return false;
        }
        for (let i = 0; i < a.params.length; i++) {
          if (!this.typesEqual(a.params[i], b.params[i])) {
            return false;
          }
        }
        return this.typesEqual(a.returnType, b.returnType);
      }
    }
    return false;
  }

  public visitProgram(ctx: ProgramContext): TypeOwnership {
    let stmts = ctx.statement();
    let type: TypeOwnership = null;
    if (stmts !== null) {
      if (Array.isArray(stmts)) {
        for (let i = 0; i <= stmts.length - 1; i++) {
          const stmt = stmts[i];
          type = this.visit(stmt);
        }
      } else {
        type = this.visit(stmts);
      }
    }
    return type;
  }

  public visitReturnType(ctx: ReturnTypeContext): TypeOwnership {
    const type: Type = ctx.getChild(1).getText() as Type;
    return { type: type } as TypeOwnership;
  }

  public visitPrimitiveTypeAnnotation(ctx: PrimitiveTypeAnnotationContext): TypeOwnership {
    if (ctx.getChild(1) === null) {
      throw new Error("Type annotation is missing");
    }
    const type: Type = ctx.getChild(1).getText() as Type;
    return { type: type } as TypeOwnership;
  }

  public visitTypeAnnotation(ctx: TypeAnnotationContext): TypeOwnership {
    return this.visit(ctx.getChild(1))
  }

  public visitValidType(ctx: ValidTypeContext): TypeOwnership {
    if (ctx.getChildCount() === 1) {
      const type: Type = ctx.getChild(0).getText() as Type;
      return { type: type } as TypeOwnership;
    } else {
      let paramTypes: TypeOwnership[] = [];
      if (ctx.validParamType()) {
        paramTypes = ctx.validParamType().TYPE().map(n => {
          const type: Type = n.getText() as Type
          return { type: type } as TypeOwnership;
        });
      }
      return {
        type: "function" as Type,
        paramsTypeOwnership: paramTypes,
        returnTypeOwnership: this.visitValidType(ctx.validType())
      }
    }
  }

  public visitConstantDeclaration(ctx: ConstantDeclarationContext): TypeOwnership {
    const name = ctx.IDENT().getText()
    const type = this.visit(ctx.primitiveTypeAnnotation());
    const exprType = this.visit(ctx.expression());

    if (!this.typesEqual(type.type, exprType.type)) {
      throw new Error(`Type mismatch in declaring ${name}: expected ${type.type} but got ${exprType.type}`);
    }

    if ((ctx.expression()?.getChildCount() == 1 && ctx.expression()?.IDENT() !== null)
      && exprType.type === "string" 
      && !this.ownership_environment
        .isInClosestEnvironment(ctx.expression()?.IDENT()?.getText())) {
      throw new Error(`It is possible that the ownership of ${ctx.expression().IDENT().getText()} has been moved.`);
    }

    if (exprType.type === "string" && exprType.hasOwnProperty("referenceFlag") && exprType.referenceFlag) {
      type.referenceFlag = true;
    } else if (exprType.type === "string" && exprType.hasOwnProperty("ownershipFlag") && exprType.ownershipFlag) {
      exprType.ownershipFlag = false;
      type.ownershipFlag = true;
    } else if (exprType.type === "string" && !exprType.hasOwnProperty("ownershipFlag") && !exprType.ownershipFlag) {
      type.ownershipFlag = true;
    }

    this.ownership_environment.declare(name, type);
    return type;
  }

  public visitVariableDeclaration(ctx: VariableDeclarationContext): TypeOwnership {
    const name = ctx.IDENT().getText()
    const type = this.visit(ctx.primitiveTypeAnnotation());
    const exprType = this.visit(ctx.expression());

    if (!this.typesEqual(type.type, exprType.type)) {
      throw new Error(`Type mismatch in declaring ${name}: expected ${type.type} but got ${exprType.type}`);
    }

    if ((ctx.expression()?.getChildCount() == 1 && ctx.expression()?.IDENT() !== null)
      && exprType.type === "string" 
      && !this.ownership_environment
        .isInClosestEnvironment(ctx.expression()?.IDENT()?.getText())) {
      throw new Error(`It is possible that the ownership of ${ctx.expression().IDENT().getText()} has been moved.`);
    }

    if (exprType.type === "string" && exprType.hasOwnProperty("referenceFlag") && exprType.referenceFlag) {
      type.referenceFlag = true;
    } else if (exprType.type === "string" && exprType.hasOwnProperty("ownershipFlag") && exprType.ownershipFlag) {
      exprType.ownershipFlag = false;
      type.ownershipFlag = true;
    } else if (exprType.type === "string" && !exprType.hasOwnProperty("ownershipFlag") && !exprType.ownershipFlag) {
      type.ownershipFlag = true;
    }

    this.ownership_environment.declare(name, type);
    return type;
  }

  public visitFunctionDeclaration(ctx: FunctionDeclarationContext): TypeOwnership {
    const name = ctx.IDENT().getText();
    const returnTypeOwnership = this.visit(ctx.returnType());

    const params = ctx.parameters()
      ? this.checkParametersTypes(ctx.parameters()) as Array<ParameterTypeOwnership>
      : [];
    const paramsTypes: TypeOwnership[] = params.map(p => p.typeOwnership);
    const paramsNames: string[] = params.map(p => p.name);
    const funcType: TypeOwnership = {
      type: "function" as Type,
      ownershipFlag: true,
      paramsTypeOwnership: paramsTypes,
      returnTypeOwnership: returnTypeOwnership
    };
    this.ownership_environment.declare(name, funcType);
    // Enter scope
    const extended_env = new OwnershipEnvironment()
    extended_env.parent = this.ownership_environment;
    this.ownership_environment = extended_env;

    if (ctx.parameters()) {
      for (let i = 0; i < paramsTypes.length; i++) {
        this.ownership_environment.declare(paramsNames[i], paramsTypes[i]);
      }
    }
    const bodyType = this.visit(ctx.blockStatement());
    if (!this.typesEqual(returnTypeOwnership.type, bodyType?.type)) {
      throw new Error(`Unequal body type vs return type at ${name}: expect ${returnTypeOwnership.type}, got ${bodyType?.type}`);
    }
    //Exit scope
    const old_env = this.ownership_environment.parent;
    this.ownership_environment = old_env;
    return returnTypeOwnership;
  }

  public visitVariableAssignment(ctx: VariableAssignmentContext): TypeOwnership {
    const type: TypeOwnership = this.ownership_environment.lookup(ctx.IDENT().getText());
    if (!type) {
      throw new Error(`Variable ${ctx.IDENT().getText()} is not declared`);
    }
    const name: string = ctx.IDENT().getText();
    const exprType: TypeOwnership = this.visit(ctx.expression());

    if (!this.typesEqual(type.type, exprType.type)) {
      throw new Error(`${name}: Cannot assign type of ${exprType.type} to ${type.type}`);
    }

    
    if ((ctx.expression()?.getChildCount() == 1 && ctx.expression()?.IDENT() !== null)
      && exprType.type === "string" 
      && !this.ownership_environment
        .isInClosestEnvironment(ctx.expression()?.IDENT()?.getText())) {
      throw new Error(`It is possible that the ownership of ${ctx.expression().IDENT().getText()} has been moved.`);
    }
    // console.log("Is in the closest environment " 
    //  + this.ownership_environment.isInClosestEnvironment(ctx.expression().IDENT().getText()))
    //console.log(`No ownership discovered for assigning ${ctx.expression().IDENT().getText()}`)
    if (exprType.type === "string" && exprType.hasOwnProperty("ownershipFlag") && exprType.ownershipFlag) {
      exprType.ownershipFlag = false;
    }
    type.ownershipFlag = true;
    return exprType;
  }

  private checkParametersTypes(ctx: ParametersContext): Array<ParameterTypeOwnership> {
    const params: ParameterTypeOwnership[] = [];
    for (let i = 0; i < ctx.IDENT().length; i++) {
      const typeOwnershipParam = this.visit(ctx.typeAnnotation(i));
      typeOwnershipParam.ownershipFlag = true;
      params.push({
        name: ctx.IDENT(i).getText(),
        typeOwnership: typeOwnershipParam
      } as ParameterTypeOwnership);
    }
    return params;
  }

  public visitBlockStatement(ctx: BlockStatementContext): TypeOwnership {
    // Extend scope
    const extended_env = new OwnershipEnvironment()
    extended_env.parent = this.ownership_environment;
    this.ownership_environment = extended_env;

    let blockType: TypeOwnership = null;
    for (let i = 0; i < ctx.statement().length; i++) {
      const stmt = ctx.statement(i);
      if (stmt.returnStatement() || stmt.ifStatement() || stmt.blockStatement() || stmt.whileLoop()) {
        const temp: TypeOwnership = this.visit(stmt);
        if (temp !== null && blockType === null) {
          blockType = temp;
        }
      } else {
        this.visit(stmt);
      }
    }
    //Exit scope
    const old_env = this.ownership_environment.parent;
    this.ownership_environment = old_env;
    return blockType;
  }

  public visitExpressionStatement(ctx: ExpressionStatementContext): TypeOwnership {
    return this.visit(ctx.expression());
  }

  public visitExpression(ctx: ExpressionContext): TypeOwnership {
    if (ctx.NUMBER()) {
      const type: Type = "num" as Type;
      return { type: type } as TypeOwnership;
    } else if (ctx.BOOL()) {
      const type: Type = "bool" as Type;
      return { type: type } as TypeOwnership
    } else if (ctx.STRING_LITERAL()) {
      const type: Type = "string" as Type;
      return { type: type } as TypeOwnership;
    } else if (ctx.IDENT()) {
      const name: string = ctx.IDENT().getText();
      const type: TypeOwnership = this.ownership_environment.lookup(name);
      if (!type) {
        throw new Error(`Undefined indentifier ${name}`);
      }

      if (type.type === "string" && !type.ownershipFlag && !type.referenceFlag) {
        throw new Error(`Onwership of identifier ${name} has been moved`)
      }
      return type;
    }

    if (ctx.getChildCount() === 2
      && (ctx.getChild(0).getText() === "&"
        || ctx.getChild(0).getText() === "-"
        || ctx.getChild(0).getText() === "!"
      )) {
      const type: TypeOwnership = this.visit(ctx.getChild(1));
      if (ctx.getChild(0).getText() === "&" && !this.typesEqual(type.type, "string")) {
        throw new Error(`Expected string type but get ${type} type`);
      } else if (ctx.getChild(0).getText() === "!" && !this.typesEqual(type.type, "bool")) {
        throw new Error(`Expected bool type but get ${type} type`);
      } else if (ctx.getChild(0).getText() === "-" && !this.typesEqual(type.type, "num")) {
        throw new Error(`Expected num type but get ${type} type`);
      }
      return {
        type: type.type,
        ownershipFlag: false,
        referenceFlag: true
      }
    }

    if (ctx.getChildCount() === 3 && ctx.getChild(0).getText() === "(") {
      return this.visit(ctx.getChild(1));
    }

    if (ctx.getChildCount() === 3) {
      const leftType = this.visit(ctx.getChild(0)).type;
      const rightType = this.visit(ctx.getChild(2)).type;
      const operator = ctx.getChild(1).getText();
      if (this.binop_arithmic_xs.includes(operator)) {
        if (leftType !== "num" || rightType !== "num") {
          throw new Error(`Arithmetic operator '${operator}' requires operands of type num`);
        }
        return { type: "num" };
      }
      if (this.binop_comp_xs.includes(operator)) {
        if (leftType !== "num" || rightType !== "num") {
          throw new Error(`Comparison operator '${operator}' requires operands of type num`);
        }
        return { type: "bool" };
      }
    }

    if (ctx.functionCall()) {
      return this.visit(ctx.functionCall());
    }

    if (ctx.ifExpression()) {
      return this.visit(ctx.ifExpression());
    }

    throw new Error("Unknown expression type")
  }

  public visitReturnStatement(ctx: ReturnStatementContext): TypeOwnership {
    return this.visit(ctx.expression());
  }

  public visitFunctionCall(ctx: FunctionCallContext): TypeOwnership {
    const fn_name: string = ctx.functionName().IDENT().getText();
    const fn_type: TypeOwnership = this.ownership_environment.lookup(fn_name);
    
    if (!fn_type) {
      throw new Error(`Function name ${fn_name} is not declared`);
    }

    const params_types = fn_type.paramsTypeOwnership;
    const args_types = this.checkCallArguments(ctx.arguments());
    if (args_types.length !== params_types.length) {
      throw new Error(`Function '${fn_name}' expects ${params_types.length} arguments but got ${args_types.length}`);
    }

    for (let i = 0; i < params_types.length; i++) {
      if (!this.typesEqual(params_types[i].type, args_types[i].type)) {
        throw new Error(`Type mismatch in argument ${i + 1} for ${fn_name}. Expected ${params_types[i].type} but got ${args_types[i].type}`);
      }
      if (params_types[i].type === "string" && args_types[i].hasOwnProperty("ownershipFlag") && args_types[i].ownershipFlag) {
        args_types[i].ownershipFlag = false;
        params_types[i].ownershipFlag = true;
      }
    }

    return fn_type.returnTypeOwnership;
  }

  public checkCallArguments(ctx: ArgumentsContext): TypeOwnership[] {
    if (!ctx) {
      return [];
    }
    return ctx.expression().map(exp => this.visit(exp));
  }

  public visitFunctionName(ctx: FunctionNameContext): TypeOwnership {
    return this.ownership_environment.lookup(ctx.IDENT().getText());
  }

  public visitWhileLoop(ctx: WhileLoopContext): TypeOwnership {
    const cond_type: TypeOwnership = this.visit(ctx.expression());
    if (!this.typesEqual(cond_type.type, "bool")) {
      throw new Error("Conditional statement should be boolean")
    }
    return this.visit(ctx.blockStatement());
  }

  public visitIfStatement(ctx: IfStatementContext): TypeOwnership {
    const cond_type: TypeOwnership = this.visit(ctx.expression());

    if (!this.typesEqual(cond_type.type, "bool")) {
      throw new Error("Conditional statement should be boolean")
    }

    const consq_type: TypeOwnership = this.visit(ctx.conseqStatement())
    // throw new Error(consq_type as string);
    if (ctx.altStatement()) {
      const alt_type: TypeOwnership = this.visit(ctx.altStatement());
      if (consq_type === null || alt_type === null) {
        return null;
      }
      if (this.typesEqual(consq_type.type, alt_type.type)) {
        return consq_type;
      }
      throw new Error("Consequential and alternative are returning different data types");
    }
    return consq_type;
  }

  public visitIfExpression(ctx: IfExpressionContext): TypeOwnership {
    const cond_type: TypeOwnership = this.visit(ctx.expression(0));
    if (!this.typesEqual(cond_type.type, "bool")) {
      throw new Error("Conditional statement should be boolean")
    }

    if (!ctx.expression(1)) {
      throw new Error("Consequential expression should not be empty");
    }

    if (!ctx.altExpression()) {
      throw new Error("alternative statement should not be empty");
    }

    const consq_type: TypeOwnership = this.visit(ctx.expression(1));
    const alt_type: TypeOwnership = this.visit(ctx.altExpression());
    if (!this.typesEqual(consq_type.type, alt_type.type)) {
      throw new Error("Consequential and alternative are returning different data types");
    }
    return consq_type;
  }

  public visitAltExpression(ctx: AltExpressionContext): TypeOwnership {
        if (ctx.ifExpression()) {
            return this.visit(ctx.ifExpression())
        } else if (ctx.getChildCount() === 3) {
            return this.visit(ctx.getChild(1));
        } else {
            throw new Error("Cannot have empty alternative statement!");
        }
    }

  public visitConseqStatement(ctx: ConseqStatementContext): TypeOwnership {
    if (ctx.blockStatement())
      return this.visit(ctx.blockStatement());
    return null;
  }

  public visitAltStatement(ctx: AltStatementContext): TypeOwnership {
    if (ctx.blockStatement()) {
      return this.visit(ctx.blockStatement())
    }

    if (ctx.ifStatement()) {
      return this.visit(ctx.ifStatement());
    }

    return null;
  }
}

export default RustTypeAndOwnershipChecker;
