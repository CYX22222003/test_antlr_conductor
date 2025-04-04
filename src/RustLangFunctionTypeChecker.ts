import { AbstractParseTreeVisitor, ParseTree } from "antlr4ng";
import { Type, ParameterType, Environment } from "./RustLangTypeCheckerUtils";
import { RustVisitor } from "./parser/src/RustVisitor";
import { AltStatementContext, BlockStatementContext, IfStatementContext, ReturnStatementContext, WhileLoopContext } from "./parser/src/RustParser";
import RustLangTypeChecker from "./RustLangTypeChecker";

export default class RustLangFunctionTypeChecker extends AbstractParseTreeVisitor<Type> implements RustVisitor<Type> {
    public type_environment: Environment;

    public visit(tree: ParseTree): Type {
        if (tree instanceof BlockStatementContext) {
            return this.visitBlockStatement(tree);
        }

        if (tree instanceof IfStatementContext) {
            return this.visitIfStatement(tree);
        }

        if (tree instanceof WhileLoopContext) {
            return this.visitWhileLoop(tree);
        }

        if (tree instanceof ReturnStatementContext) {
            return this.visitReturnStatement(tree);
        }

        const normalTypeChecker: RustLangTypeChecker = new RustLangTypeChecker();
        normalTypeChecker.type_environment = this.type_environment;
        normalTypeChecker.visit(tree);
        return "undefined-CYX";

    }

    public visitBlockStatement(ctx: BlockStatementContext): Type {
        const extended_env = new Environment();
        extended_env.parent = this.type_environment;
        this.type_environment = extended_env;

        let blockType: Type = "undefined-CYX";
        for (let i = 0; i < ctx.statement().length; i++) {
            let stmtType : Type;
            if (ctx.statement(i).returnStatement()) {
                stmtType = this.visit(ctx.statement(i).returnStatement());
            } else {
                stmtType = this.visit(ctx.statement(i));
            }
            if (stmtType !== "undefined-CYX") {
                blockType = stmtType;
            }
            
        }
        this.type_environment = this.type_environment.parent!;
        return blockType;
    }


    public visitIfStatement(ctx: IfStatementContext): Type {
        const normalTypeChecker: RustLangTypeChecker = new RustLangTypeChecker();
        normalTypeChecker.type_environment = this.type_environment;
        const type: Type = normalTypeChecker.visit(ctx.expression());
        if (type !== 'bool') {
            throw new Error("expected predicate type: bool, actual predicate type: " + type);
        }
        const t1: Type = this.visit(ctx.conseqStatement().blockStatement());
        const t2: Type = this.visit(ctx.altStatement().blockStatement());
        alert(t1);
        alert(t2);
        console.log("t2");
        if (t1 === t2) {
            console.log("Type Chekcer logger: if stmts in function body has type " + t1);
            return t1;
        }
        throw new Error("Types of branches not matching");
    }

    public visitWhileLoop(ctx: WhileLoopContext): Type {
        const normalTypeChecker: RustLangTypeChecker = new RustLangTypeChecker();
        normalTypeChecker.type_environment = this.type_environment;
        const type: Type = normalTypeChecker.visit(ctx.expression());
        if (type !== 'bool') {
            throw new Error("expected predicate type: bool, actual predicate type: " + type);
        }

        return this.visit(ctx.blockStatement());
    }

    public visitReturnStatement(ctx: ReturnStatementContext): Type {
        const normalTypeChecker: RustLangTypeChecker = new RustLangTypeChecker();
        normalTypeChecker.type_environment = this.type_environment;
        return normalTypeChecker.visit(ctx.expression());
    }
}