// Generated from /home/guest1/test_antlr_conductor/src/Rust.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class RustParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LET=1, CONST=2, FN=3, IF=4, IFEXR=5, ELSE=6, RETURN=7, WHILE=8, LOOP=9, 
		BOOL=10, TYPE=11, MUT=12, NULL=13, ASSIGN=14, SEMI=15, COLON=16, COMMA=17, 
		LPAREN=18, RPAREN=19, LBRACE=20, RBRACE=21, PLUS=22, MINUS=23, STAR=24, 
		SLASH=25, EQ=26, NEQ=27, LT=28, GT=29, LEQ=30, GEQ=31, NOT=32, ARROW=33, 
		AMP=34, IDENT=35, NUMBER=36, STRING_LITERAL=37, WHITESPACE=38, LINE_COMMENT=39, 
		BLOCK_COMMENT=40;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_functionDeclaration = 2, RULE_variableAssignment = 3, 
		RULE_parameters = 4, RULE_returnType = 5, RULE_constantDeclaration = 6, 
		RULE_variableDeclaration = 7, RULE_blockStatement = 8, RULE_expressionStatement = 9, 
		RULE_expression = 10, RULE_returnStatement = 11, RULE_functionCall = 12, 
		RULE_functionName = 13, RULE_arguments = 14, RULE_whileLoop = 15, RULE_ifStatement = 16, 
		RULE_ifExpression = 17, RULE_altExpression = 18, RULE_conseqStatement = 19, 
		RULE_altStatement = 20, RULE_primitiveTypeAnnotation = 21, RULE_typeAnnotation = 22, 
		RULE_validType = 23, RULE_validParamType = 24;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "functionDeclaration", "variableAssignment", 
			"parameters", "returnType", "constantDeclaration", "variableDeclaration", 
			"blockStatement", "expressionStatement", "expression", "returnStatement", 
			"functionCall", "functionName", "arguments", "whileLoop", "ifStatement", 
			"ifExpression", "altExpression", "conseqStatement", "altStatement", "primitiveTypeAnnotation", 
			"typeAnnotation", "validType", "validParamType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'let'", "'const'", "'fn'", "'if'", "'ifexpr'", "'else'", "'return'", 
			"'while'", "'loop'", null, null, "'mut'", "'null'", "'='", "';'", "':'", 
			"','", "'('", "')'", "'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'=='", 
			"'!='", "'<'", "'>'", "'<='", "'>='", "'!'", "'->'", "'&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LET", "CONST", "FN", "IF", "IFEXR", "ELSE", "RETURN", "WHILE", 
			"LOOP", "BOOL", "TYPE", "MUT", "NULL", "ASSIGN", "SEMI", "COLON", "COMMA", 
			"LPAREN", "RPAREN", "LBRACE", "RBRACE", "PLUS", "MINUS", "STAR", "SLASH", 
			"EQ", "NEQ", "LT", "GT", "LEQ", "GEQ", "NOT", "ARROW", "AMP", "IDENT", 
			"NUMBER", "STRING_LITERAL", "WHITESPACE", "LINE_COMMENT", "BLOCK_COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Rust.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RustParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(RustParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 262002705822L) != 0)) {
				{
				{
				setState(50);
				statement();
				}
				}
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(56);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public ConstantDeclarationContext constantDeclaration() {
			return getRuleContext(ConstantDeclarationContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public VariableAssignmentContext variableAssignment() {
			return getRuleContext(VariableAssignmentContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public BlockStatementContext blockStatement() {
			return getRuleContext(BlockStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public WhileLoopContext whileLoop() {
			return getRuleContext(WhileLoopContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(67);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(58);
				constantDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(59);
				variableDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(60);
				functionDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(61);
				variableAssignment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(62);
				expressionStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(63);
				blockStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(64);
				ifStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(65);
				whileLoop();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(66);
				returnStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode FN() { return getToken(RustParser.FN, 0); }
		public TerminalNode IDENT() { return getToken(RustParser.IDENT, 0); }
		public TerminalNode LPAREN() { return getToken(RustParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(RustParser.RPAREN, 0); }
		public ReturnTypeContext returnType() {
			return getRuleContext(ReturnTypeContext.class,0);
		}
		public BlockStatementContext blockStatement() {
			return getRuleContext(BlockStatementContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(RustParser.SEMI, 0); }
		public ParametersContext parameters() {
			return getRuleContext(ParametersContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(FN);
			setState(70);
			match(IDENT);
			setState(71);
			match(LPAREN);
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENT) {
				{
				setState(72);
				parameters();
				}
			}

			setState(75);
			match(RPAREN);
			setState(76);
			returnType();
			setState(77);
			blockStatement();
			setState(78);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableAssignmentContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(RustParser.IDENT, 0); }
		public TerminalNode ASSIGN() { return getToken(RustParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(RustParser.SEMI, 0); }
		public VariableAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableAssignment; }
	}

	public final VariableAssignmentContext variableAssignment() throws RecognitionException {
		VariableAssignmentContext _localctx = new VariableAssignmentContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_variableAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(IDENT);
			setState(81);
			match(ASSIGN);
			setState(82);
			expression(0);
			setState(83);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametersContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(RustParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(RustParser.IDENT, i);
		}
		public List<TypeAnnotationContext> typeAnnotation() {
			return getRuleContexts(TypeAnnotationContext.class);
		}
		public TypeAnnotationContext typeAnnotation(int i) {
			return getRuleContext(TypeAnnotationContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(RustParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(RustParser.COMMA, i);
		}
		public ParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameters; }
	}

	public final ParametersContext parameters() throws RecognitionException {
		ParametersContext _localctx = new ParametersContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_parameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(IDENT);
			setState(86);
			typeAnnotation();
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(87);
				match(COMMA);
				setState(88);
				match(IDENT);
				setState(89);
				typeAnnotation();
				}
				}
				setState(94);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnTypeContext extends ParserRuleContext {
		public TerminalNode ARROW() { return getToken(RustParser.ARROW, 0); }
		public TerminalNode TYPE() { return getToken(RustParser.TYPE, 0); }
		public ReturnTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnType; }
	}

	public final ReturnTypeContext returnType() throws RecognitionException {
		ReturnTypeContext _localctx = new ReturnTypeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_returnType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(ARROW);
			setState(96);
			match(TYPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstantDeclarationContext extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(RustParser.CONST, 0); }
		public TerminalNode IDENT() { return getToken(RustParser.IDENT, 0); }
		public PrimitiveTypeAnnotationContext primitiveTypeAnnotation() {
			return getRuleContext(PrimitiveTypeAnnotationContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(RustParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(RustParser.SEMI, 0); }
		public ConstantDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDeclaration; }
	}

	public final ConstantDeclarationContext constantDeclaration() throws RecognitionException {
		ConstantDeclarationContext _localctx = new ConstantDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_constantDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			match(CONST);
			setState(99);
			match(IDENT);
			setState(100);
			primitiveTypeAnnotation();
			setState(101);
			match(ASSIGN);
			setState(102);
			expression(0);
			setState(103);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends ParserRuleContext {
		public TerminalNode LET() { return getToken(RustParser.LET, 0); }
		public TerminalNode IDENT() { return getToken(RustParser.IDENT, 0); }
		public PrimitiveTypeAnnotationContext primitiveTypeAnnotation() {
			return getRuleContext(PrimitiveTypeAnnotationContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(RustParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(RustParser.SEMI, 0); }
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(LET);
			setState(106);
			match(IDENT);
			setState(107);
			primitiveTypeAnnotation();
			setState(108);
			match(ASSIGN);
			setState(109);
			expression(0);
			setState(110);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockStatementContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(RustParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(RustParser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockStatement; }
	}

	public final BlockStatementContext blockStatement() throws RecognitionException {
		BlockStatementContext _localctx = new BlockStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_blockStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(LBRACE);
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 262002705822L) != 0)) {
				{
				{
				setState(113);
				statement();
				}
				}
				setState(118);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(119);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(RustParser.SEMI, 0); }
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			expression(0);
			setState(122);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(RustParser.NUMBER, 0); }
		public TerminalNode BOOL() { return getToken(RustParser.BOOL, 0); }
		public TerminalNode IDENT() { return getToken(RustParser.IDENT, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(RustParser.STRING_LITERAL, 0); }
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MINUS() { return getToken(RustParser.MINUS, 0); }
		public TerminalNode NOT() { return getToken(RustParser.NOT, 0); }
		public TerminalNode AMP() { return getToken(RustParser.AMP, 0); }
		public TerminalNode LPAREN() { return getToken(RustParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(RustParser.RPAREN, 0); }
		public IfExpressionContext ifExpression() {
			return getRuleContext(IfExpressionContext.class,0);
		}
		public TerminalNode STAR() { return getToken(RustParser.STAR, 0); }
		public TerminalNode SLASH() { return getToken(RustParser.SLASH, 0); }
		public TerminalNode PLUS() { return getToken(RustParser.PLUS, 0); }
		public TerminalNode EQ() { return getToken(RustParser.EQ, 0); }
		public TerminalNode GEQ() { return getToken(RustParser.GEQ, 0); }
		public TerminalNode GT() { return getToken(RustParser.GT, 0); }
		public TerminalNode LT() { return getToken(RustParser.LT, 0); }
		public TerminalNode LEQ() { return getToken(RustParser.LEQ, 0); }
		public TerminalNode NEQ() { return getToken(RustParser.NEQ, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(125);
				match(NUMBER);
				}
				break;
			case 2:
				{
				setState(126);
				match(BOOL);
				}
				break;
			case 3:
				{
				setState(127);
				match(IDENT);
				}
				break;
			case 4:
				{
				setState(128);
				match(STRING_LITERAL);
				}
				break;
			case 5:
				{
				setState(129);
				functionCall();
				}
				break;
			case 6:
				{
				setState(130);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 21483225088L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(131);
				expression(6);
				}
				break;
			case 7:
				{
				setState(132);
				match(LPAREN);
				setState(133);
				expression(0);
				setState(134);
				match(RPAREN);
				}
				break;
			case 8:
				{
				setState(136);
				ifExpression();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(150);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(148);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(139);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(140);
						_la = _input.LA(1);
						if ( !(_la==STAR || _la==SLASH) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(141);
						expression(6);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(142);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(143);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(144);
						expression(5);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(145);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(146);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4227858432L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(147);
						expression(4);
						}
						break;
					}
					} 
				}
				setState(152);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(RustParser.RETURN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(RustParser.SEMI, 0); }
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			match(RETURN);
			setState(154);
			expression(0);
			setState(155);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(RustParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(RustParser.RPAREN, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			functionName();
			setState(158);
			match(LPAREN);
			setState(160);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 262001656848L) != 0)) {
				{
				setState(159);
				arguments();
				}
			}

			setState(162);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionNameContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(RustParser.IDENT, 0); }
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_functionName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentsContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(RustParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(RustParser.COMMA, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			expression(0);
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(167);
				match(COMMA);
				setState(168);
				expression(0);
				}
				}
				setState(173);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileLoopContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(RustParser.WHILE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockStatementContext blockStatement() {
			return getRuleContext(BlockStatementContext.class,0);
		}
		public WhileLoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileLoop; }
	}

	public final WhileLoopContext whileLoop() throws RecognitionException {
		WhileLoopContext _localctx = new WhileLoopContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_whileLoop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			match(WHILE);
			setState(175);
			expression(0);
			setState(176);
			blockStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(RustParser.IF, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ConseqStatementContext conseqStatement() {
			return getRuleContext(ConseqStatementContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(RustParser.ELSE, 0); }
		public AltStatementContext altStatement() {
			return getRuleContext(AltStatementContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(IF);
			setState(179);
			expression(0);
			setState(180);
			conseqStatement();
			setState(183);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(181);
				match(ELSE);
				setState(182);
				altStatement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfExpressionContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(RustParser.IF, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LBRACE() { return getToken(RustParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(RustParser.RBRACE, 0); }
		public TerminalNode ELSE() { return getToken(RustParser.ELSE, 0); }
		public AltExpressionContext altExpression() {
			return getRuleContext(AltExpressionContext.class,0);
		}
		public IfExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifExpression; }
	}

	public final IfExpressionContext ifExpression() throws RecognitionException {
		IfExpressionContext _localctx = new IfExpressionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_ifExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			match(IF);
			setState(186);
			expression(0);
			setState(187);
			match(LBRACE);
			setState(188);
			expression(0);
			setState(189);
			match(RBRACE);
			setState(190);
			match(ELSE);
			setState(191);
			altExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AltExpressionContext extends ParserRuleContext {
		public IfExpressionContext ifExpression() {
			return getRuleContext(IfExpressionContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(RustParser.LBRACE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(RustParser.RBRACE, 0); }
		public AltExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_altExpression; }
	}

	public final AltExpressionContext altExpression() throws RecognitionException {
		AltExpressionContext _localctx = new AltExpressionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_altExpression);
		try {
			setState(198);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(193);
				ifExpression();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(194);
				match(LBRACE);
				setState(195);
				expression(0);
				setState(196);
				match(RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConseqStatementContext extends ParserRuleContext {
		public BlockStatementContext blockStatement() {
			return getRuleContext(BlockStatementContext.class,0);
		}
		public ConseqStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conseqStatement; }
	}

	public final ConseqStatementContext conseqStatement() throws RecognitionException {
		ConseqStatementContext _localctx = new ConseqStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_conseqStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			blockStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AltStatementContext extends ParserRuleContext {
		public BlockStatementContext blockStatement() {
			return getRuleContext(BlockStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public AltStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_altStatement; }
	}

	public final AltStatementContext altStatement() throws RecognitionException {
		AltStatementContext _localctx = new AltStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_altStatement);
		try {
			setState(204);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(202);
				blockStatement();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 2);
				{
				setState(203);
				ifStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimitiveTypeAnnotationContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(RustParser.COLON, 0); }
		public TerminalNode TYPE() { return getToken(RustParser.TYPE, 0); }
		public PrimitiveTypeAnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveTypeAnnotation; }
	}

	public final PrimitiveTypeAnnotationContext primitiveTypeAnnotation() throws RecognitionException {
		PrimitiveTypeAnnotationContext _localctx = new PrimitiveTypeAnnotationContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_primitiveTypeAnnotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(COLON);
			setState(207);
			match(TYPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeAnnotationContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(RustParser.COLON, 0); }
		public ValidTypeContext validType() {
			return getRuleContext(ValidTypeContext.class,0);
		}
		public TypeAnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAnnotation; }
	}

	public final TypeAnnotationContext typeAnnotation() throws RecognitionException {
		TypeAnnotationContext _localctx = new TypeAnnotationContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_typeAnnotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(COLON);
			setState(210);
			validType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValidTypeContext extends ParserRuleContext {
		public TerminalNode TYPE() { return getToken(RustParser.TYPE, 0); }
		public TerminalNode LPAREN() { return getToken(RustParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(RustParser.RPAREN, 0); }
		public TerminalNode ARROW() { return getToken(RustParser.ARROW, 0); }
		public ValidTypeContext validType() {
			return getRuleContext(ValidTypeContext.class,0);
		}
		public ValidParamTypeContext validParamType() {
			return getRuleContext(ValidParamTypeContext.class,0);
		}
		public ValidTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_validType; }
	}

	public final ValidTypeContext validType() throws RecognitionException {
		ValidTypeContext _localctx = new ValidTypeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_validType);
		int _la;
		try {
			setState(220);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(212);
				match(TYPE);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(213);
				match(LPAREN);
				setState(215);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TYPE) {
					{
					setState(214);
					validParamType();
					}
				}

				setState(217);
				match(RPAREN);
				setState(218);
				match(ARROW);
				setState(219);
				validType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValidParamTypeContext extends ParserRuleContext {
		public List<TerminalNode> TYPE() { return getTokens(RustParser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(RustParser.TYPE, i);
		}
		public List<TerminalNode> MUT() { return getTokens(RustParser.MUT); }
		public TerminalNode MUT(int i) {
			return getToken(RustParser.MUT, i);
		}
		public ValidParamTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_validParamType; }
	}

	public final ValidParamTypeContext validParamType() throws RecognitionException {
		ValidParamTypeContext _localctx = new ValidParamTypeContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_validParamType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			match(TYPE);
			setState(227);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MUT) {
				{
				{
				setState(223);
				match(MUT);
				setState(224);
				match(TYPE);
				}
				}
				setState(229);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 10:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001(\u00e7\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0001\u0000\u0005\u00004\b\u0000\n\u0000\f\u00007\t\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001D\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002J\b\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004[\b\u0004\n\u0004\f\u0004"+
		"^\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0005\bs\b\b\n\b\f\bv\t\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u008a\b\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\n\u0095"+
		"\b\n\n\n\f\n\u0098\t\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0003\f\u00a1\b\f\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000e\u0005\u000e\u00aa\b\u000e\n\u000e"+
		"\f\u000e\u00ad\t\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010"+
		"\u00b8\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0003\u0012\u00c7\b\u0012\u0001\u0013\u0001\u0013"+
		"\u0001\u0014\u0001\u0014\u0003\u0014\u00cd\b\u0014\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0003\u0017\u00d8\b\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0003\u0017\u00dd\b\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0005\u0018"+
		"\u00e2\b\u0018\n\u0018\f\u0018\u00e5\t\u0018\u0001\u0018\u0000\u0001\u0014"+
		"\u0019\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.0\u0000\u0004\u0003\u0000\u0017\u0017  \"\""+
		"\u0001\u0000\u0018\u0019\u0001\u0000\u0016\u0017\u0001\u0000\u001a\u001f"+
		"\u00eb\u00005\u0001\u0000\u0000\u0000\u0002C\u0001\u0000\u0000\u0000\u0004"+
		"E\u0001\u0000\u0000\u0000\u0006P\u0001\u0000\u0000\u0000\bU\u0001\u0000"+
		"\u0000\u0000\n_\u0001\u0000\u0000\u0000\fb\u0001\u0000\u0000\u0000\u000e"+
		"i\u0001\u0000\u0000\u0000\u0010p\u0001\u0000\u0000\u0000\u0012y\u0001"+
		"\u0000\u0000\u0000\u0014\u0089\u0001\u0000\u0000\u0000\u0016\u0099\u0001"+
		"\u0000\u0000\u0000\u0018\u009d\u0001\u0000\u0000\u0000\u001a\u00a4\u0001"+
		"\u0000\u0000\u0000\u001c\u00a6\u0001\u0000\u0000\u0000\u001e\u00ae\u0001"+
		"\u0000\u0000\u0000 \u00b2\u0001\u0000\u0000\u0000\"\u00b9\u0001\u0000"+
		"\u0000\u0000$\u00c6\u0001\u0000\u0000\u0000&\u00c8\u0001\u0000\u0000\u0000"+
		"(\u00cc\u0001\u0000\u0000\u0000*\u00ce\u0001\u0000\u0000\u0000,\u00d1"+
		"\u0001\u0000\u0000\u0000.\u00dc\u0001\u0000\u0000\u00000\u00de\u0001\u0000"+
		"\u0000\u000024\u0003\u0002\u0001\u000032\u0001\u0000\u0000\u000047\u0001"+
		"\u0000\u0000\u000053\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u0000"+
		"68\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u000089\u0005\u0000\u0000"+
		"\u00019\u0001\u0001\u0000\u0000\u0000:D\u0003\f\u0006\u0000;D\u0003\u000e"+
		"\u0007\u0000<D\u0003\u0004\u0002\u0000=D\u0003\u0006\u0003\u0000>D\u0003"+
		"\u0012\t\u0000?D\u0003\u0010\b\u0000@D\u0003 \u0010\u0000AD\u0003\u001e"+
		"\u000f\u0000BD\u0003\u0016\u000b\u0000C:\u0001\u0000\u0000\u0000C;\u0001"+
		"\u0000\u0000\u0000C<\u0001\u0000\u0000\u0000C=\u0001\u0000\u0000\u0000"+
		"C>\u0001\u0000\u0000\u0000C?\u0001\u0000\u0000\u0000C@\u0001\u0000\u0000"+
		"\u0000CA\u0001\u0000\u0000\u0000CB\u0001\u0000\u0000\u0000D\u0003\u0001"+
		"\u0000\u0000\u0000EF\u0005\u0003\u0000\u0000FG\u0005#\u0000\u0000GI\u0005"+
		"\u0012\u0000\u0000HJ\u0003\b\u0004\u0000IH\u0001\u0000\u0000\u0000IJ\u0001"+
		"\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000KL\u0005\u0013\u0000\u0000"+
		"LM\u0003\n\u0005\u0000MN\u0003\u0010\b\u0000NO\u0005\u000f\u0000\u0000"+
		"O\u0005\u0001\u0000\u0000\u0000PQ\u0005#\u0000\u0000QR\u0005\u000e\u0000"+
		"\u0000RS\u0003\u0014\n\u0000ST\u0005\u000f\u0000\u0000T\u0007\u0001\u0000"+
		"\u0000\u0000UV\u0005#\u0000\u0000V\\\u0003,\u0016\u0000WX\u0005\u0011"+
		"\u0000\u0000XY\u0005#\u0000\u0000Y[\u0003,\u0016\u0000ZW\u0001\u0000\u0000"+
		"\u0000[^\u0001\u0000\u0000\u0000\\Z\u0001\u0000\u0000\u0000\\]\u0001\u0000"+
		"\u0000\u0000]\t\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000_`\u0005"+
		"!\u0000\u0000`a\u0005\u000b\u0000\u0000a\u000b\u0001\u0000\u0000\u0000"+
		"bc\u0005\u0002\u0000\u0000cd\u0005#\u0000\u0000de\u0003*\u0015\u0000e"+
		"f\u0005\u000e\u0000\u0000fg\u0003\u0014\n\u0000gh\u0005\u000f\u0000\u0000"+
		"h\r\u0001\u0000\u0000\u0000ij\u0005\u0001\u0000\u0000jk\u0005#\u0000\u0000"+
		"kl\u0003*\u0015\u0000lm\u0005\u000e\u0000\u0000mn\u0003\u0014\n\u0000"+
		"no\u0005\u000f\u0000\u0000o\u000f\u0001\u0000\u0000\u0000pt\u0005\u0014"+
		"\u0000\u0000qs\u0003\u0002\u0001\u0000rq\u0001\u0000\u0000\u0000sv\u0001"+
		"\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000"+
		"uw\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000wx\u0005\u0015\u0000"+
		"\u0000x\u0011\u0001\u0000\u0000\u0000yz\u0003\u0014\n\u0000z{\u0005\u000f"+
		"\u0000\u0000{\u0013\u0001\u0000\u0000\u0000|}\u0006\n\uffff\uffff\u0000"+
		"}\u008a\u0005$\u0000\u0000~\u008a\u0005\n\u0000\u0000\u007f\u008a\u0005"+
		"#\u0000\u0000\u0080\u008a\u0005%\u0000\u0000\u0081\u008a\u0003\u0018\f"+
		"\u0000\u0082\u0083\u0007\u0000\u0000\u0000\u0083\u008a\u0003\u0014\n\u0006"+
		"\u0084\u0085\u0005\u0012\u0000\u0000\u0085\u0086\u0003\u0014\n\u0000\u0086"+
		"\u0087\u0005\u0013\u0000\u0000\u0087\u008a\u0001\u0000\u0000\u0000\u0088"+
		"\u008a\u0003\"\u0011\u0000\u0089|\u0001\u0000\u0000\u0000\u0089~\u0001"+
		"\u0000\u0000\u0000\u0089\u007f\u0001\u0000\u0000\u0000\u0089\u0080\u0001"+
		"\u0000\u0000\u0000\u0089\u0081\u0001\u0000\u0000\u0000\u0089\u0082\u0001"+
		"\u0000\u0000\u0000\u0089\u0084\u0001\u0000\u0000\u0000\u0089\u0088\u0001"+
		"\u0000\u0000\u0000\u008a\u0096\u0001\u0000\u0000\u0000\u008b\u008c\n\u0005"+
		"\u0000\u0000\u008c\u008d\u0007\u0001\u0000\u0000\u008d\u0095\u0003\u0014"+
		"\n\u0006\u008e\u008f\n\u0004\u0000\u0000\u008f\u0090\u0007\u0002\u0000"+
		"\u0000\u0090\u0095\u0003\u0014\n\u0005\u0091\u0092\n\u0003\u0000\u0000"+
		"\u0092\u0093\u0007\u0003\u0000\u0000\u0093\u0095\u0003\u0014\n\u0004\u0094"+
		"\u008b\u0001\u0000\u0000\u0000\u0094\u008e\u0001\u0000\u0000\u0000\u0094"+
		"\u0091\u0001\u0000\u0000\u0000\u0095\u0098\u0001\u0000\u0000\u0000\u0096"+
		"\u0094\u0001\u0000\u0000\u0000\u0096\u0097\u0001\u0000\u0000\u0000\u0097"+
		"\u0015\u0001\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0099"+
		"\u009a\u0005\u0007\u0000\u0000\u009a\u009b\u0003\u0014\n\u0000\u009b\u009c"+
		"\u0005\u000f\u0000\u0000\u009c\u0017\u0001\u0000\u0000\u0000\u009d\u009e"+
		"\u0003\u001a\r\u0000\u009e\u00a0\u0005\u0012\u0000\u0000\u009f\u00a1\u0003"+
		"\u001c\u000e\u0000\u00a0\u009f\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u00a3\u0005"+
		"\u0013\u0000\u0000\u00a3\u0019\u0001\u0000\u0000\u0000\u00a4\u00a5\u0005"+
		"#\u0000\u0000\u00a5\u001b\u0001\u0000\u0000\u0000\u00a6\u00ab\u0003\u0014"+
		"\n\u0000\u00a7\u00a8\u0005\u0011\u0000\u0000\u00a8\u00aa\u0003\u0014\n"+
		"\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000\u00aa\u00ad\u0001\u0000\u0000"+
		"\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ab\u00ac\u0001\u0000\u0000"+
		"\u0000\u00ac\u001d\u0001\u0000\u0000\u0000\u00ad\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ae\u00af\u0005\b\u0000\u0000\u00af\u00b0\u0003\u0014\n\u0000"+
		"\u00b0\u00b1\u0003\u0010\b\u0000\u00b1\u001f\u0001\u0000\u0000\u0000\u00b2"+
		"\u00b3\u0005\u0004\u0000\u0000\u00b3\u00b4\u0003\u0014\n\u0000\u00b4\u00b7"+
		"\u0003&\u0013\u0000\u00b5\u00b6\u0005\u0006\u0000\u0000\u00b6\u00b8\u0003"+
		"(\u0014\u0000\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b7\u00b8\u0001\u0000"+
		"\u0000\u0000\u00b8!\u0001\u0000\u0000\u0000\u00b9\u00ba\u0005\u0004\u0000"+
		"\u0000\u00ba\u00bb\u0003\u0014\n\u0000\u00bb\u00bc\u0005\u0014\u0000\u0000"+
		"\u00bc\u00bd\u0003\u0014\n\u0000\u00bd\u00be\u0005\u0015\u0000\u0000\u00be"+
		"\u00bf\u0005\u0006\u0000\u0000\u00bf\u00c0\u0003$\u0012\u0000\u00c0#\u0001"+
		"\u0000\u0000\u0000\u00c1\u00c7\u0003\"\u0011\u0000\u00c2\u00c3\u0005\u0014"+
		"\u0000\u0000\u00c3\u00c4\u0003\u0014\n\u0000\u00c4\u00c5\u0005\u0015\u0000"+
		"\u0000\u00c5\u00c7\u0001\u0000\u0000\u0000\u00c6\u00c1\u0001\u0000\u0000"+
		"\u0000\u00c6\u00c2\u0001\u0000\u0000\u0000\u00c7%\u0001\u0000\u0000\u0000"+
		"\u00c8\u00c9\u0003\u0010\b\u0000\u00c9\'\u0001\u0000\u0000\u0000\u00ca"+
		"\u00cd\u0003\u0010\b\u0000\u00cb\u00cd\u0003 \u0010\u0000\u00cc\u00ca"+
		"\u0001\u0000\u0000\u0000\u00cc\u00cb\u0001\u0000\u0000\u0000\u00cd)\u0001"+
		"\u0000\u0000\u0000\u00ce\u00cf\u0005\u0010\u0000\u0000\u00cf\u00d0\u0005"+
		"\u000b\u0000\u0000\u00d0+\u0001\u0000\u0000\u0000\u00d1\u00d2\u0005\u0010"+
		"\u0000\u0000\u00d2\u00d3\u0003.\u0017\u0000\u00d3-\u0001\u0000\u0000\u0000"+
		"\u00d4\u00dd\u0005\u000b\u0000\u0000\u00d5\u00d7\u0005\u0012\u0000\u0000"+
		"\u00d6\u00d8\u00030\u0018\u0000\u00d7\u00d6\u0001\u0000\u0000\u0000\u00d7"+
		"\u00d8\u0001\u0000\u0000\u0000\u00d8\u00d9\u0001\u0000\u0000\u0000\u00d9"+
		"\u00da\u0005\u0013\u0000\u0000\u00da\u00db\u0005!\u0000\u0000\u00db\u00dd"+
		"\u0003.\u0017\u0000\u00dc\u00d4\u0001\u0000\u0000\u0000\u00dc\u00d5\u0001"+
		"\u0000\u0000\u0000\u00dd/\u0001\u0000\u0000\u0000\u00de\u00e3\u0005\u000b"+
		"\u0000\u0000\u00df\u00e0\u0005\f\u0000\u0000\u00e0\u00e2\u0005\u000b\u0000"+
		"\u0000\u00e1\u00df\u0001\u0000\u0000\u0000\u00e2\u00e5\u0001\u0000\u0000"+
		"\u0000\u00e3\u00e1\u0001\u0000\u0000\u0000\u00e3\u00e4\u0001\u0000\u0000"+
		"\u0000\u00e41\u0001\u0000\u0000\u0000\u00e5\u00e3\u0001\u0000\u0000\u0000"+
		"\u00105CI\\t\u0089\u0094\u0096\u00a0\u00ab\u00b7\u00c6\u00cc\u00d7\u00dc"+
		"\u00e3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}