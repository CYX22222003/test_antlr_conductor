import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import {
  CharStream,
  CommonTokenStream,
  AbstractParseTreeVisitor,
  ParseTree,
} from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import {
  ExpressionContext,
  ExpressionStatementContext,
  ProgramContext,
  RustParser,
  StatementContext,
} from "./parser/src/RustParser";
import { RustVisitor } from "./parser/src/RustVisitor";
import RustLangCompiler from "./RustCompiler";
import RustIdealizedVM from "./RustIdealizedVM";
import RustTypeAndOwnershipChecker from "./RustTypeAndOwnershipChecker";

class RustEvaluatorVisitor
  extends AbstractParseTreeVisitor<number>
  implements RustVisitor<number>
{
  // Visit a parse tree produced by SimpleLangParser#prog
  visitProgram(ctx: ProgramContext): number {
    let out = 0;
    let stmts = ctx.statement();
    if (stmts !== null) {
      if (Array.isArray(stmts)) {
        for (let stmt of stmts) {
          out = this.visit(stmt);
        }
        return out;
      } else {
        return this.visit(stmts);
      }
    } else {
      return undefined;
    }
  }

  visitStatement(ctx: StatementContext) {
    return this.visit(ctx.expressionStatement());
  }

  visitExpressionStatement(ctx: ExpressionStatementContext) {
    return this.visit(ctx.expression());
  }

  // Visit a parse tree produced by SimpleLangParser#expression
  visitExpression(ctx: ExpressionContext): number {
    if (ctx.getChildCount() === 1) {
      // INT case
      return parseInt(ctx.getText());
    } else if (ctx.getChildCount() === 3) {
      if (
        ctx.getChild(0).getText() === "(" &&
        ctx.getChild(2).getText() === ")"
      ) {
        // Parenthesized expression
        return this.visit(ctx.getChild(1) as ExpressionContext);
      } else {
        // Binary operation
        const left = this.visit(ctx.getChild(0) as ExpressionContext);
        const op = ctx.getChild(1).getText();
        const right = this.visit(ctx.getChild(2) as ExpressionContext);

        switch (op) {
          case "+":
            return left + right;
          case "-":
            return left - right;
          case "*":
            return left * right;
          case "/":
            if (right === 0) {
              throw new Error("Division by zero");
            }
            return left / right;
          default:
            throw new Error(`Unknown operator: ${op}`);
        }
      }
    }

    throw new Error(`Invalid expression: ${ctx.getText()}`);
  }

  // Override the default result method from AbstractParseTreeVisitor
  protected defaultResult(): number {
    return 101;
  }

  // Override the aggregate result method
  protected aggregateResult(aggregate: number, nextResult: number): number {
    return nextResult;
  }
}

export class RustEvaluator extends BasicEvaluator {
  private executionCount: number;
  private visitor: RustEvaluatorVisitor;

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
    this.executionCount = 0;
    this.visitor = new RustEvaluatorVisitor();
  }

  async evaluateChunk(chunk: string): Promise<void> {
    this.executionCount++;
    try {
      // Create the lexer and parser
      const inputStream = CharStream.fromString(`{${chunk}}`);
      const lexer = new RustLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new RustParser(tokenStream);
      const compiler = new RustLangCompiler();
      const typeAndOnwershipChecker = new RustTypeAndOwnershipChecker();

      // Parse the input
      const tree = parser.program();

      // Visit the parse tree to conduct type and ownership checking
      typeAndOnwershipChecker.visit(tree);
      this.conductor.sendOutput("Type and ownership check successful!");
      compiler.visit(tree);

      const idealizedVM = new RustIdealizedVM(compiler.getInstructions());
      // Send the result to the REPL
      this.conductor.sendOutput(
        `Results of compiled instructions:\n${compiler.beautifiedPrint()}`
      );
      this.conductor.sendOutput(
        `Result of idealized VM: \n${idealizedVM.execute()}`
      );
    } catch (error) {
      // Handle errors and send them to the REPL
      if (error instanceof Error) {
        this.conductor.sendOutput(`Error: ${error.message}`);
      } else {
        this.conductor.sendOutput(`Error: ${String(error)}`);
      }
    }
  }
}
