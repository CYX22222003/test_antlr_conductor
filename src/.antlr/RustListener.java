// Generated from /home/guest1/test_antlr_conductor/src/Rust.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RustParser}.
 */
public interface RustListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RustParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(RustParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(RustParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(RustParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(RustParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(RustParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(RustParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#variableAssignment}.
	 * @param ctx the parse tree
	 */
	void enterVariableAssignment(RustParser.VariableAssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#variableAssignment}.
	 * @param ctx the parse tree
	 */
	void exitVariableAssignment(RustParser.VariableAssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#parameters}.
	 * @param ctx the parse tree
	 */
	void enterParameters(RustParser.ParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#parameters}.
	 * @param ctx the parse tree
	 */
	void exitParameters(RustParser.ParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#returnType}.
	 * @param ctx the parse tree
	 */
	void enterReturnType(RustParser.ReturnTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#returnType}.
	 * @param ctx the parse tree
	 */
	void exitReturnType(RustParser.ReturnTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#constantDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterConstantDeclaration(RustParser.ConstantDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#constantDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitConstantDeclaration(RustParser.ConstantDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(RustParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(RustParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void enterBlockStatement(RustParser.BlockStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void exitBlockStatement(RustParser.BlockStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(RustParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(RustParser.ExpressionStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(RustParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(RustParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(RustParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(RustParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(RustParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(RustParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#functionName}.
	 * @param ctx the parse tree
	 */
	void enterFunctionName(RustParser.FunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#functionName}.
	 * @param ctx the parse tree
	 */
	void exitFunctionName(RustParser.FunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#arguments}.
	 * @param ctx the parse tree
	 */
	void enterArguments(RustParser.ArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#arguments}.
	 * @param ctx the parse tree
	 */
	void exitArguments(RustParser.ArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#whileLoop}.
	 * @param ctx the parse tree
	 */
	void enterWhileLoop(RustParser.WhileLoopContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#whileLoop}.
	 * @param ctx the parse tree
	 */
	void exitWhileLoop(RustParser.WhileLoopContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(RustParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(RustParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#conseqStatement}.
	 * @param ctx the parse tree
	 */
	void enterConseqStatement(RustParser.ConseqStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#conseqStatement}.
	 * @param ctx the parse tree
	 */
	void exitConseqStatement(RustParser.ConseqStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#altStatement}.
	 * @param ctx the parse tree
	 */
	void enterAltStatement(RustParser.AltStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#altStatement}.
	 * @param ctx the parse tree
	 */
	void exitAltStatement(RustParser.AltStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#primitiveTypeAnnotation}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveTypeAnnotation(RustParser.PrimitiveTypeAnnotationContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#primitiveTypeAnnotation}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveTypeAnnotation(RustParser.PrimitiveTypeAnnotationContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#typeAnnotation}.
	 * @param ctx the parse tree
	 */
	void enterTypeAnnotation(RustParser.TypeAnnotationContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#typeAnnotation}.
	 * @param ctx the parse tree
	 */
	void exitTypeAnnotation(RustParser.TypeAnnotationContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#validType}.
	 * @param ctx the parse tree
	 */
	void enterValidType(RustParser.ValidTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#validType}.
	 * @param ctx the parse tree
	 */
	void exitValidType(RustParser.ValidTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#validParamType}.
	 * @param ctx the parse tree
	 */
	void enterValidParamType(RustParser.ValidParamTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#validParamType}.
	 * @param ctx the parse tree
	 */
	void exitValidParamType(RustParser.ValidParamTypeContext ctx);
}