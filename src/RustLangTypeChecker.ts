import { AbstractParseTreeVisitor } from "antlr4ng";
import { RustVisitor } from "./parser/src/RustVisitor";
import { AltStatementContext, ArgumentsContext, BlockStatementContext, ConseqStatementContext, ConstantDeclarationContext, ExpressionContext, ExpressionStatementContext, FunctionCallContext, FunctionDeclarationContext, FunctionNameContext, IfStatementContext, ParametersContext, PrimitiveTypeAnnotationContext, ProgramContext, ReturnStatementContext, ReturnTypeContext, RustParser, StatementContext, TypeAnnotationContext, ValidParamTypeContext, ValidTypeContext, VariableAssignmentContext, VariableDeclarationContext, WhileLoopContext } from "./parser/src/RustParser";
import { Type, ParameterType, Environment } from "./RustLangTypeCheckerUtils";

export default class RustLangTypeChecker extends AbstractParseTreeVisitor<Type> implements RustVisitor<Type> {
    public type_environment: Environment = new Environment();
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

    public visitProgram(ctx: ProgramContext) {
        let stmts = ctx.statement();
        let type: Type = null;
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

    public visitReturnType(ctx: ReturnTypeContext): Type {
        return ctx.getChild(1).getText() as Type;
    }

    public visitPrimitiveTypeAnnotation(ctx: PrimitiveTypeAnnotationContext): Type {
        return ctx.getChild(1).getText() as Type;
    }

    public visitTypeAnnotation(ctx: TypeAnnotationContext): Type {
        return this.visit(ctx.getChild(1))
    }

    public visitValidType(ctx: ValidTypeContext): Type {
        if (ctx.getChildCount() === 1) {
            return ctx.getChild(0).getText() as Type;
        } else {
            let paramTypes: Type[] = [];
            if (ctx.validParamType()) {
                paramTypes = ctx.validParamType().TYPE().map(n => (n.getText() as Type));
            }
            return { type: "function", params: paramTypes, returnType: this.visitValidType(ctx.validType()) }
        }
    }

    public visitConstantDeclaration(ctx: ConstantDeclarationContext): Type {
        const name = ctx.IDENT().getText()
        const type = this.visit(ctx.primitiveTypeAnnotation());
        const exprType = this.visit(ctx.expression());
        if (!this.typesEqual(type, exprType)) {
            throw new Error(`Type mismatch in declaring ${name}`);
        }
        this.type_environment.declare(name, type);
        return type;
    }

    public visitVariableDeclaration(ctx: VariableDeclarationContext): Type {
        const name = ctx.IDENT().getText()
        const type = this.visit(ctx.primitiveTypeAnnotation());
        const exprType = this.visit(ctx.expression());
        if (!this.typesEqual(type, exprType)) {
            throw new Error(`Type mismatch in declaring ${name}`);
        }
        this.type_environment.declare(name, type);
        return type;
    }

    public visitFunctionDeclaration(ctx: FunctionDeclarationContext): Type {
        const name = ctx.IDENT().getText();
        const returnType = this.visit(ctx.returnType());

        const params = ctx.parameters()
            ? this.checkParametersTypes(ctx.parameters()) as Array<ParameterType>
            : [];
        const paramsTypes: Type[] = params.map(p => p.type);
        const paramsNames: string[] = params.map(p => p.name);
        const funcType: Type = { type: "function", params: paramsTypes, returnType: returnType };
        this.type_environment.declare(name, funcType);
        // Enter scope
        const extended_env = new Environment()
        extended_env.parent = this.type_environment;
        this.type_environment = extended_env;

        if (ctx.parameters()) {
            for (let i = 0; i < paramsTypes.length; i++) {
                this.type_environment.declare(paramsNames[i], paramsTypes[i]);
            }
        }
        const bodyType = this.visit(ctx.blockStatement());
        //Exit scope
        const old_env = this.type_environment.parent;
        this.type_environment = old_env;

        if (!this.typesEqual(bodyType, returnType)) {
            throw new Error(`unequal body type and return type at ${name}: expect ${returnType} but actually return ${bodyType}`);
        }

        return returnType;
    }

    public visitVariableAssignment(ctx: VariableAssignmentContext): Type {
        const target_type: Type = this.type_environment.lookup(ctx.IDENT().getText());
        const expr_type: Type = this.visit(ctx.expression());
        if (!this.typesEqual(target_type, expr_type)) {
            throw new Error(`${ctx.IDENT().getText()}: Cannot assign a type of ${expr_type} to ${target_type}`);
        }
        return expr_type;
    }

    private checkParametersTypes(ctx: ParametersContext): Array<ParameterType> {
        const params: ParameterType[] = [];
        for (let i = 0; i < ctx.IDENT().length; i++) {
            params.push({
                name: ctx.IDENT(i).getText(),
                type: this.visit(ctx.typeAnnotation(i)) as Type
            } as ParameterType);
        }
        return params;
    }

    public visitBlockStatement(ctx: BlockStatementContext): Type {
        // Extend scope
        const extended_env = new Environment()
        extended_env.parent = this.type_environment;
        this.type_environment = extended_env;

        let blockType: Type = null;
        for (let i = 0; i < ctx.statement().length; i++) {
            const stmt = ctx.statement(i);
            if (stmt.returnStatement() || stmt.ifStatement() || stmt.blockStatement() || stmt.whileLoop()) {
                const temp: Type = this.visit(stmt);
                if (temp !== null && blockType === null) {
                    blockType = temp;
                } else if (temp !== null && blockType !== temp) {
                    throw new Error("Inconsistent return types.")
                }
            } else {
                this.visit(stmt);
            }
        }

        //Exit scope
        const old_env = this.type_environment.parent;
        this.type_environment = old_env;
        return blockType;
    }

    public visitExpressionStatement(ctx: ExpressionStatementContext): Type {
        return this.visit(ctx.expression());
    }

    public visitExpression(ctx: ExpressionContext): Type {
        if (ctx.NUMBER()) {
            return "num" as Type;
        } else if (ctx.BOOL()) {
            return "bool" as Type;
        } else if (ctx.STRING_LITERAL()) {
            return "string" as Type;
        }else if (ctx.IDENT()) {
            const name: string = ctx.IDENT().getText();
            const type: Type = this.type_environment.lookup(name);
            if (!type) {
                throw new Error(`Undefined indentifier ${name}`);
            }
            return type;
        }

        if (ctx.getChildCount() === 3 && ctx.getChild(0).getText() === "(") {
            return this.visit(ctx.getChild(1));
        }

        if (ctx.getChildCount() === 3) {
            const leftType = this.visit(ctx.getChild(0));
            const rightType = this.visit(ctx.getChild(2));
            const operator = ctx.getChild(1).getText();
            if (this.binop_arithmic_xs.includes(operator)) {
                if (leftType !== "num" || rightType !== "num") {
                    throw new Error(`Arithmetic operator '${operator}' requires operands of type num`);
                }
                return "num";
            }
            if (this.binop_comp_xs.includes(operator)) {
                if (leftType !== "num" || rightType !== "num") {
                    throw new Error(`Comparison operator '${operator}' requires operands of type num`);
                }
                return "bool";
            }
        }

        if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        }
        throw new Error("Unknown expression type")
    }

    public visitReturnStatement(ctx: ReturnStatementContext): Type {
        return this.visit(ctx.expression());
    }

    public visitFunctionCall(ctx: FunctionCallContext): Type {
        const fn_name: string = ctx.functionName().IDENT().getText();
        const fn_type: Type = this.type_environment.lookup(fn_name);

        if (typeof fn_type !== "object" || fn_type.type !== "function") {
            throw new Error(`${ctx.functionName().IDENT().getText()} is not callable`);
        }

        const params_types = fn_type.params;
        const args_types = this.checkCallArguments(ctx.arguments());
        if (args_types.length !== params_types.length) {
            throw new Error(`Function '${fn_name}' expects ${params_types.length} arguments but got ${args_types.length}`);
        }

        for (let i = 0; i < params_types.length; i++) {
            if (!this.typesEqual(args_types[i], params_types[i])) {
                throw new Error(`Type mismatch in argument ${i + 1} for ${fn_name}. Expected ${params_types[i]} but get ${args_types[i]}`);
            }
        }

        return fn_type.returnType;
    }

    public checkCallArguments(ctx: ArgumentsContext): Type[] {
        return ctx.expression().map(exp => this.visit(exp));
    }

    public visitFunctionName(ctx: FunctionNameContext): Type {
        return this.type_environment.lookup(ctx.IDENT().getText());
    }

    public visitWhileLoop(ctx: WhileLoopContext): Type {
        const cond_type: Type = this.visit(ctx.expression());
        if (!this.typesEqual(cond_type, "bool")) {
            throw new Error("Conditional statement should be boolean")
        }
        return this.visit(ctx.blockStatement());
    }

    public visitIfStatement(ctx: IfStatementContext): Type {
        const cond_type: Type = this.visit(ctx.expression());
        
        if (!this.typesEqual(cond_type, "bool")) {
            throw new Error("Conditional statement should be boolean")
        }
        
        const consq_type: Type = this.visit(ctx.conseqStatement())
        // throw new Error(consq_type as string);
        if (ctx.altStatement()) {
            if (this.typesEqual(consq_type, this.visit(ctx.altStatement()))) {
                return consq_type;
            }
            throw new Error("Consequential and alternative are returning different data types");
        }
        return consq_type;
    }

    public visitConseqStatement(ctx: ConseqStatementContext): Type {
        return this.visit(ctx.blockStatement());
    }

    public visitAltStatement(ctx: AltStatementContext): Type {
        return this.visit(ctx.blockStatement())
    }
}