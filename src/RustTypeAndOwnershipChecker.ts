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
  TypeAnnotationContext,
  ValidTypeContext,
  VariableAssignmentContext,
  VariableDeclarationContext,
  WhileLoopContext,
} from "./parser/src/RustParser";
import {
  OwnershipEnvironment,
  ParameterTypeOwnership,
  TypeOwnership,
  Type,
  deepCloneOwnershipEnvironment,
  mergeOwnershipEnvironments,
} from "./RustTypeAndOwnershipCheckerUtils";

class RustTypeAndOwnershipChecker
  extends AbstractParseTreeVisitor<TypeOwnership>
  implements RustVisitor<TypeOwnership> {
  public ownership_environment: OwnershipEnvironment =
    new OwnershipEnvironment();
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
    let retType = "";
    for (let i = 1; i < ctx.getChildCount(); i++) {
      retType += ctx.getChild(i).getText();
    }
    return { type: retType } as TypeOwnership;
  }

  public visitTypeAnnotation(ctx: TypeAnnotationContext): TypeOwnership {
    return this.visit(ctx.getChild(1));
  }

  public visitValidType(ctx: ValidTypeContext): TypeOwnership {
    if (ctx.getChildCount() === 1) {
      const type: Type = ctx.getChild(0).getText() as Type;
      return { type: type } as TypeOwnership;
    } else {
      let paramTypes: TypeOwnership[] = [];
      if (ctx.validParamType()) {
        paramTypes = ctx
          .validParamType()
          .TYPE()
          .map((n) => {
            const type: Type = n.getText() as Type;
            return { type: type } as TypeOwnership;
          });
      }
      return {
        type: "function" as Type,
        paramsTypeOwnership: paramTypes,
        returnTypeOwnership: this.visitValidType(ctx.validType()),
      };
    }
  }

  public visitConstantDeclaration(ctx: ConstantDeclarationContext): TypeOwnership {
    const name = ctx.IDENT().getText();
    const type = this.visit(ctx.primitiveTypeAnnotation());
    const exprType = this.visit(ctx.expression());

    if (!this.typesEqual(type.type, exprType.type)) {
      throw new Error(
        `Type mismatch in declaring ${name}: expected ${type.type} but got ${exprType.type}`
      );
    }

    if (ctx.getChild(1).getText() === "mut") {
      type.mutableFlag = true;
      type.borrowedFlag = false;
    }

    if (exprType.hasOwnProperty("borrowedFrom") && exprType.borrowedFrom) {
      type.borrowedFrom = exprType.borrowedFrom
    }

    if (exprType.hasOwnProperty("referenceFlag") && exprType.referenceFlag) {
      type.referenceFlag = true;
    }

    type.ownershipFlag = true;
    this.ownership_environment.declare(name, type);
    return type;
  }

  public visitVariableDeclaration(ctx: VariableDeclarationContext): TypeOwnership {
    const name = ctx.IDENT().getText();
    const type = this.visit(ctx.primitiveTypeAnnotation());
    const exprType = this.visit(ctx.expression());

    if (!this.typesEqual(type.type, exprType.type)) {
      throw new Error(
        `Type mismatch in declaring ${name}: expected ${type.type} but got ${exprType.type}`
      );
    }

    if (ctx.getChild(1).getText() === "mut") {
      type.mutableFlag = true;
      type.borrowedFlag = false;
    }

    if (exprType.hasOwnProperty("borrowedFrom") && exprType.borrowedFrom) {
      type.borrowedFrom = exprType.borrowedFrom
    }

    if (exprType.hasOwnProperty("referenceFlag") && exprType.referenceFlag) {
      type.referenceFlag = true;
    }

    type.ownershipFlag = true;
    this.ownership_environment.declare(name, type);
    return type;
  }

  public visitFunctionDeclaration(ctx: FunctionDeclarationContext): TypeOwnership {
    const name = ctx.IDENT().getText();
    const returnTypeOwnership = this.visit(ctx.returnType());

    const params = ctx.parameters()
      ? (this.checkParametersTypes(
        ctx.parameters()
      ) as Array<ParameterTypeOwnership>)
      : [];
    const paramsTypes: TypeOwnership[] = params.map((p) => p.typeOwnership);
    const funcType: TypeOwnership = {
      type: "function" as Type,
      ownershipFlag: true,
      paramsTypeOwnership: paramsTypes,
      returnTypeOwnership: returnTypeOwnership,
    };
    this.ownership_environment.declare(name, funcType);
    for (let i = 0; i < 2; i++) {
      // Enter scope
      const paramsNames: string[] = params.map((p) => p.name);
      const parametersTypes = paramsTypes.map((p) => ({
        type: p.type,
        ownershipFlag: p.ownershipFlag,
        referenceFlag: p.referenceFlag,
        paramsTypeOwnership: p.paramsTypeOwnership,
        returnTypeOwnership: p.returnTypeOwnership,
      }));
      const extended_env = new OwnershipEnvironment();
      extended_env.parent = this.ownership_environment;
      this.ownership_environment = extended_env;
      if (ctx.parameters()) {
        for (let i = 0; i < parametersTypes.length; i++) {
          this.ownership_environment.declare(
            paramsNames[i],
            parametersTypes[i]
          );
        }
      }
      const bodyType = this.visit(ctx.blockStatement());
      if (!this.typesEqual(returnTypeOwnership.type, bodyType?.type)) {
        throw new Error(
          `Unequal body type vs return type at ${name}: expect ${returnTypeOwnership.type}, got ${bodyType?.type}`
        );
      }
      //Exit scope
      const old_env = this.ownership_environment.parent;
      this.ownership_environment = old_env;
    }
    return returnTypeOwnership;
  }

  public visitVariableAssignment(ctx: VariableAssignmentContext): TypeOwnership {
    let starCount = -1;
    let name: string = "";
    let lvalue = ctx.lvalue();
    while(lvalue) {
      starCount++;
      name = lvalue.getText();
      lvalue = lvalue.lvalue();
    }
    console.log(`starCount: ${starCount}, name: ${name}`);
    const type: TypeOwnership = this.ownership_environment.lookup(name);
    if (!type) {
      throw new Error(`Variable ${name} is not declared`);
    }
    const exprType: TypeOwnership = this.visit(ctx.expression());

    let currType = type.type as string;
    if (starCount > 0) {
      let ampCount = currType.toString().split("&").length - 1;
      if (starCount > ampCount) {
        throw new Error(`Cannot dereference ${name} ${starCount} time(s)`);
      }
      currType = currType.slice(starCount);
    }

    if (!this.typesEqual(currType as Type, exprType.type)) {
      throw new Error(
        `${name}: Cannot assign type of ${exprType.type} to ${currType}`
      );
    }

    if (type.borrowedFlag) {
      throw new Error(`Variable ${name} is already mutably borrowed`);
    }

    type.ownershipFlag = true;
    return exprType;
  }

  private checkParametersTypes(
    ctx: ParametersContext
  ): Array<ParameterTypeOwnership> {
    const params: ParameterTypeOwnership[] = [];
    for (let i = 0; i < ctx.IDENT().length; i++) {
      const typeOwnershipParam = this.visit(ctx.typeAnnotation(i));
      typeOwnershipParam.ownershipFlag = true;
      params.push({
        name: ctx.IDENT(i).getText(),
        typeOwnership: typeOwnershipParam,
      } as ParameterTypeOwnership);
    }
    return params;
  }

  public visitBlockStatement(ctx: BlockStatementContext): TypeOwnership {
    // Extend scope
    const extended_env = new OwnershipEnvironment();
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

    // Return variables borrowed in this block before exiting the scope
    for (const [name, type] of this.ownership_environment.symbols) {
      if (type.borrowedFrom) {
        this.ownership_environment.lookup(type.borrowedFrom).borrowedFlag = false;
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
    if (ctx.getChildCount() == 1) {
      if (ctx.NUMBER()) {
        const type: Type = "num" as Type;
        return { type: type } as TypeOwnership;
      } else if (ctx.BOOL()) {
        const type: Type = "bool" as Type;
        return { type: type } as TypeOwnership;
      } else if (ctx.STRING_LITERAL()) {
        const type: Type = "string" as Type;
        return { type: type } as TypeOwnership;
      } else if (ctx.IDENT()) {
        const name: string = ctx.IDENT().getText();
        const type: TypeOwnership = this.ownership_environment.lookup(name);
        if (!type) {
          throw new Error(`Undefined indentifier ${name}`);
        }
        if (type.hasOwnProperty("borrowedFlag") && type.borrowedFlag) {
          throw new Error(`Identifier ${name} is already mutably borrowed`);
        }
        if (!type.ownershipFlag && !type.referenceFlag) {
          throw new Error(`Onwership of identifier ${name} has been moved`);
        }
        if (type.type === "string") {
          type.ownershipFlag = false;
        }
        return type;
      }
    }

    if (ctx.getChildCount() === 2 && ctx.getChild(0).getText() == "&") {
      const type: TypeOwnership = this.ownership_environment.lookup(
        ctx.getChild(1).getText()
      );
      if (!type) {
        throw new Error(`Undefined identifier ${ctx.getChild(1).getText()}`);
      }
      if (!this.typesEqual(type.type, "string")) {
        throw new Error(`Expected string type but get ${type} type`);
      }
      if (!type.ownershipFlag && !type.referenceFlag) {
        throw new Error(
          `Onwership of identifier ${ctx.getChild(1).getText()} has been moved`
        );
      }
      return {
        type: type.type,
        ownershipFlag: type.ownershipFlag,
        referenceFlag: true,
      };
    }

    let starCount = 0;
    while (ctx.getChildCount() > starCount + 1 && ctx.getChild(starCount).getText() === "*") {
      starCount++;
    }
    if (starCount > 0) {
      const name: string = ctx.IDENT().getText();
      const type: TypeOwnership = this.ownership_environment.lookup(name);
      if (!type) {
        throw new Error(`Undefined identifier ${name}`);
      }
      let ampCount = type.type.toString().split("&").length - 1;
      if (starCount > ampCount) {
        throw new Error(`Cannot dereference ${name} ${starCount} time(s)`);
      }
      let derefType = type.type as string;
      return {
        ...type,
        type: derefType.slice(starCount) as Type,
      };
    }

    if (ctx.getChildCount() === 2 && (ctx.getChild(0).getText() === "-" || ctx.getChild(0).getText() === "!")) {
      const type: TypeOwnership = this.visit(ctx.getChild(1));
      if (ctx.getChild(0).getText() === "!" && !this.typesEqual(type.type, "bool")) {
        throw new Error(`Expected bool type but get ${type} type`);
      } else if (ctx.getChild(0).getText() === "-" && !this.typesEqual(type.type, "num")) {
        throw new Error(`Expected num type but get ${type} type`);
      }
      return {
        type: type.type,
        ownershipFlag: type.ownershipFlag,
        referenceFlag: type.referenceFlag,
      };
    }

    if (ctx.getChildCount() === 3 && ctx.getChild(0).getText() === "&" && ctx.getChild(1).getText() === "mut") {
      const name = ctx.getChild(2).getText();
      const type: TypeOwnership = this.ownership_environment.lookup(name);
      if (!type) {
        throw new Error(`Undefined identifier ${ctx.getChild(2).getText()}`);
      }
      if (!type.mutableFlag) {
        throw new Error(
          `Identifier ${ctx.getChild(2).getText()} is not mutable`
        );
      }
      if (type.borrowedFlag) {
        throw new Error(
          `Identifier ${ctx.getChild(2).getText()} is already mutably borrowed`
        );
      }
      type.borrowedFlag = true;
      return {
        ...type,
        type: "&" + type.type as Type,
        borrowedFrom: name,
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
          throw new Error(
            `Arithmetic operator '${operator}' requires operands of type num, but got ${leftType} and ${rightType}`
          );
        }
        return { type: "num" };
      }
      if (this.binop_comp_xs.includes(operator)) {
        if (leftType !== "num" || rightType !== "num") {
          throw new Error(
            `Comparison operator '${operator}' requires operands of type num`
          );
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

    throw new Error("Unknown expression type");
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
      throw new Error(
        `Function '${fn_name}' expects ${params_types.length} arguments but got ${args_types.length}`
      );
    }
    for (let i = 0; i < params_types.length; i++) {
      if (!this.typesEqual(params_types[i].type, args_types[i].type)) {
        throw new Error(
          `Type mismatch in argument ${i + 1} for ${fn_name}. Expected ${params_types[i].type
          } but got ${args_types[i].type}`
        );
      }
      if (params_types[i].type === "string" && args_types[i].hasOwnProperty("ownershipFlag") && args_types[i].ownershipFlag) {
        args_types[i].ownershipFlag = false;
        params_types[i].ownershipFlag = true;
      }
    }

    // Returning borrowed variables
    for (let i = 0; i < args_types.length; i++) {
      if (args_types[i].hasOwnProperty("borrowedFlag") && args_types[i].borrowedFlag) {
        this.ownership_environment.lookup(args_types[i].borrowedFrom).borrowedFlag = false;
      }
    }

    return fn_type.returnTypeOwnership;
  }

  public checkCallArguments(ctx: ArgumentsContext): TypeOwnership[] {
    if (!ctx) {
      return [];
    }
    return ctx.expression().map((exp) => this.visit(exp));
  }

  public visitFunctionName(ctx: FunctionNameContext): TypeOwnership {
    return this.ownership_environment.lookup(ctx.IDENT().getText());
  }

  public visitWhileLoop(ctx: WhileLoopContext): TypeOwnership {
    const cond_type: TypeOwnership = this.visit(ctx.expression());
    if (!this.typesEqual(cond_type.type, "bool")) {
      throw new Error("Conditional statement should be boolean");
    }
    this.visit(ctx.blockStatement());
    return this.visit(ctx.blockStatement());
  }

  public visitIfStatement(ctx: IfStatementContext): TypeOwnership {
    const cond_type: TypeOwnership = this.visit(ctx.expression());

    if (!this.typesEqual(cond_type.type, "bool")) {
      throw new Error("Conditional statement should be boolean");
    }
    const old_env = this.ownership_environment;
    const consq_env: OwnershipEnvironment = deepCloneOwnershipEnvironment(
      this.ownership_environment
    );

    this.ownership_environment = consq_env;
    const consq_type: TypeOwnership = this.visit(ctx.conseqStatement());
    // throw new Error(consq_type as string);
    if (ctx.altStatement()) {
      this.ownership_environment = old_env;
      const alt_type: TypeOwnership = this.visit(ctx.altStatement());
      this.ownership_environment = mergeOwnershipEnvironments(
        consq_env,
        this.ownership_environment
      );
      if (consq_type === null || alt_type === null) {
        return null;
      }
      if (this.typesEqual(consq_type.type, alt_type.type)) {
        return consq_type;
      }
      throw new Error(
        "Consequential and alternative are returning different data types"
      );
    }
    this.ownership_environment = mergeOwnershipEnvironments(
      consq_env,
      this.ownership_environment
    );
    return consq_type;
  }

  public visitIfExpression(ctx: IfExpressionContext): TypeOwnership {
    const cond_type: TypeOwnership = this.visit(ctx.expression(0));
    if (!this.typesEqual(cond_type.type, "bool")) {
      throw new Error("Conditional statement should be boolean");
    }

    if (!ctx.expression(1)) {
      throw new Error("Consequential expression should not be empty");
    }

    if (!ctx.altExpression()) {
      throw new Error("alternative statement should not be empty");
    }

    const old_env = this.ownership_environment;
    const consq_env: OwnershipEnvironment = deepCloneOwnershipEnvironment(
      this.ownership_environment
    );

    this.ownership_environment = consq_env;
    const consq_type: TypeOwnership = this.visit(ctx.expression(1));

    this.ownership_environment = old_env;
    const alt_type: TypeOwnership = this.visit(ctx.altExpression());
    this.ownership_environment = mergeOwnershipEnvironments(
      consq_env,
      this.ownership_environment
    );
    if (!this.typesEqual(consq_type.type, alt_type.type)) {
      throw new Error(
        "Consequential and alternative are returning different data types"
      );
    }
    return consq_type;
  }

  public visitAltExpression(ctx: AltExpressionContext): TypeOwnership {
    if (ctx.ifExpression()) {
      return this.visit(ctx.ifExpression());
    } else if (ctx.getChildCount() === 3) {
      return this.visit(ctx.getChild(1));
    } else {
      throw new Error("Cannot have empty alternative statement!");
    }
  }

  public visitConseqStatement(ctx: ConseqStatementContext): TypeOwnership {
    if (ctx.blockStatement()) return this.visit(ctx.blockStatement());
    return null;
  }

  public visitAltStatement(ctx: AltStatementContext): TypeOwnership {
    if (ctx.blockStatement()) {
      return this.visit(ctx.blockStatement());
    }

    if (ctx.ifStatement()) {
      return this.visit(ctx.ifStatement());
    }

    return null;
  }
}

export default RustTypeAndOwnershipChecker;
