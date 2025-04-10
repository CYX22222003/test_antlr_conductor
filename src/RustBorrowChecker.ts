import { AbstractParseTreeVisitor } from "antlr4ng";
import { RustVisitor } from "./parser/src/RustVisitor";
import { AltStatementContext, ArgumentsContext, BlockStatementContext, ConseqStatementContext, ConstantDeclarationContext, ExpressionContext, ExpressionStatementContext, FunctionCallContext, FunctionDeclarationContext, FunctionNameContext, IfStatementContext, ParametersContext, PrimitiveTypeAnnotationContext, ProgramContext, ReturnStatementContext, ReturnTypeContext, RustParser, StatementContext, TypeAnnotationContext, ValidParamTypeContext, ValidTypeContext, VariableAssignmentContext, VariableDeclarationContext, WhileLoopContext } from "./parser/src/RustParser";
import { OwnershipEnvironment, ParameterTypeOwnership, TypeOwnership } from "./RustBorrowCheckerUtils";
import { Type } from "./RustLangTypeCheckerUtils";

/**
 * Simplify heap and only keep track of moving ownership of string node.
 * Other nodes can be ignored.
 */
class RustBorrowChecker extends AbstractParseTreeVisitor<TypeOwnership> implements RustVisitor<TypeOwnership> {
    public ownership_environment: OwnershipEnvironment = new OwnershipEnvironment();
    private binop_arithmic_xs: string[] = ["+", "-", "*", "/"];
        private binop_comp_xs: string[] = ["==", "!=", "<", ">", "<=", ">="];
    
        private typesEqual(ta: TypeOwnership, tb: TypeOwnership): boolean {
            const a: Type = ta.type;
            const b: Type = tb.type;
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
                        if (!this.typesEqual(ta.paramsTypeOwnership[i], tb.paramsTypeOwnership[i])) {
                            return false;
                        }
                    }
                    return this.typesEqual(ta.returnTypeOwnership, tb.returnTypeOwnership);
                }
            } 
            return false;
        }
    
        public visitProgram(ctx: ProgramContext) : TypeOwnership {
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
            return {type: type} as TypeOwnership;
        }
    
        public visitPrimitiveTypeAnnotation(ctx: PrimitiveTypeAnnotationContext): TypeOwnership {
            const type: Type = ctx.getChild(1).getText() as Type;
            return {type: type} as TypeOwnership;
        }
    
        public visitTypeAnnotation(ctx: TypeAnnotationContext): TypeOwnership {
            return this.visit(ctx.getChild(1))
        }
    
        public visitValidType(ctx: ValidTypeContext): TypeOwnership {
            if (ctx.getChildCount() === 1) {
                const type: Type = ctx.getChild(0).getText() as Type;
                return {type: type} as TypeOwnership;
            } else {
                let paramTypes: TypeOwnership[] = [];
                if (ctx.validParamType()) {
                    paramTypes = ctx.validParamType().TYPE().map(n => {
                        const type: Type = n.getText() as Type
                        return {type: type} as TypeOwnership;
                    });
                }
                return { type: "function" as Type, 
                    paramsTypeOwnership: paramTypes, 
                    returnTypeOwnership: this.visitValidType(ctx.validType()) 
                }
            }
        }
    
        public visitConstantDeclaration(ctx: ConstantDeclarationContext): TypeOwnership {
            const name = ctx.IDENT().getText()
            const type = this.visit(ctx.primitiveTypeAnnotation());
            const exprType = this.visit(ctx.expression());
            if (!this.typesEqual(type, exprType)) {
                throw new Error(`Type mismatch in declaring ${name}`);
            }
            if (exprType.type === "string" 
                && exprType.hasOwnProperty("ownershipFlag") 
                && exprType.ownershipFlag) {
                exprType.ownershipFlag = false;
            }
            type.ownershipFlag = true;
            this.ownership_environment.declare(name, type);
            return type;
        }
    
        public visitVariableDeclaration(ctx: VariableDeclarationContext): TypeOwnership {
            const name = ctx.IDENT().getText()
            const type = this.visit(ctx.primitiveTypeAnnotation());
            const exprType = this.visit(ctx.expression());
            if (!this.typesEqual(type, exprType)) {
                throw new Error(`Type mismatch in declaring ${name}`);
            }

            if (exprType.type === "string" 
                && exprType.hasOwnProperty("ownershipFlag") 
                && exprType.ownershipFlag) {
                exprType.ownershipFlag = false;
            }
            type.ownershipFlag = true;
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
            const old_env = this.ownership_environment;
            this.ownership_environment = extended_env;
    
            if (ctx.parameters()) {
                for (let i = 0; i < paramsTypes.length; i++) {
                    this.ownership_environment.declare(paramsNames[i], paramsTypes[i]);
                }
            }
            const bodyType = this.visit(ctx.functionBlockStatement());
            //Exit scope
            this.ownership_environment = old_env;
    
            if (!this.typesEqual(bodyType, returnTypeOwnership)) {
                throw new Error(
                    `unequal body type and return type at ${name}: 
                    expect ${returnTypeOwnership} but actually return ${bodyType}
                    `
                );
            }
    
            return returnTypeOwnership;
        }
    
        public visitVariableAssignment(ctx: VariableAssignmentContext): TypeOwnership {
            const target_type: TypeOwnership = this.ownership_environment.lookup(ctx.IDENT().getText());
            const expr_type: TypeOwnership = this.visit(ctx.expression());
            return expr_type;
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
                    } else if (temp !== null && blockType !== temp) {
                        throw new Error("Inconsistent return types.")
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
                return {type: type} as TypeOwnership;
            } else if (ctx.BOOL()) {
                const type: Type = "bool" as Type;
                return {type: type} as TypeOwnership
            } else if (ctx.STRING_LITERAL()) {
                const type: Type = "string" as Type;
                return {type: type} as TypeOwnership;
            }else if (ctx.IDENT()) {
                const name: string = ctx.IDENT().getText();
                const type: TypeOwnership = this.ownership_environment.lookup(name);
                if (!type) {
                    throw new Error(`Undefined indentifier ${name}`);
                }

                if (type.type === "string" && !type.ownershipFlag) {
                    throw new Error(`Onwership of identifier ${name} has been moved`)
                }
                return type;
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
                    return {type: "num"};
                }
                if (this.binop_comp_xs.includes(operator)) {
                    if (leftType !== "num" || rightType !== "num") {
                        throw new Error(`Comparison operator '${operator}' requires operands of type num`);
                    }
                    return {type: "bool"};
                }
            }
    
            if (ctx.functionCall()) {
                return this.visit(ctx.functionCall());
            }
            throw new Error("Unknown expression type")
        }
    
        public visitReturnStatement(ctx: ReturnStatementContext): TypeOwnership {
            return this.visit(ctx.expression());
        }
    
        public visitFunctionCall(ctx: FunctionCallContext): TypeOwnership {
            const fn_name: string = ctx.functionName().IDENT().getText();
            const fn_type: TypeOwnership = this.ownership_environment.lookup(fn_name);
    
            // if (typeof fn_type.type !== "object" || fn_type.type.type !== "function") {
            //     throw new Error(`${ctx.functionName().IDENT().getText()} is not callable`);
            // }
    
            const params_types = fn_type.paramsTypeOwnership;
            const args_types = this.checkCallArguments(ctx.arguments());
            if (args_types.length !== params_types.length) {
                throw new Error(`Function '${fn_name}' expects ${params_types.length} arguments but got ${args_types.length}`);
            }
    
            for (let i = 0; i < params_types.length; i++) {
                if (!this.typesEqual(args_types[i], params_types[i])) {
                    throw new Error(`Type mismatch in argument ${i + 1} for ${fn_name}. Expected ${params_types[i]} but get ${args_types[i]}`);
                }
                
                 if (params_types[i].type === "string" 
                && args_types[i].hasOwnProperty("ownershipFlag") 
                && args_types[i].ownershipFlag) {
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
            if (cond_type.type !== "bool") {
                throw new Error("Conditional statement should be boolean")
            }
            return this.visit(ctx.blockStatement());
        }
    
        public visitIfStatement(ctx: IfStatementContext): TypeOwnership {
            const cond_type: TypeOwnership = this.visit(ctx.expression());
            
            if (cond_type.type !== "bool") {
                throw new Error("Conditional statement should be boolean")
            }
            
            const consq_type: TypeOwnership = this.visit(ctx.conseqStatement())
            // throw new Error(consq_type as string);
            if (ctx.altStatement()) {
                if (this.typesEqual(consq_type, this.visit(ctx.altStatement()))) {
                    return consq_type;
                }
                throw new Error("Consequential and alternative are returning different data types");
            }
            return consq_type;
        }
    
        public visitConseqStatement(ctx: ConseqStatementContext): TypeOwnership {
            return this.visit(ctx.blockStatement());
        }
    
        public visitAltStatement(ctx: AltStatementContext): TypeOwnership {
            return this.visit(ctx.blockStatement())
        }
}

export default RustBorrowChecker;
