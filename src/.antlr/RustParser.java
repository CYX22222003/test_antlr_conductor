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
		LET=1, CONST=2, FN=3, IF=4, ELSE=5, RETURN=6, WHILE=7, LOOP=8, BOOL=9, 
		TYPE=10, MUT=11, NULL=12, ASSIGN=13, SEMI=14, COLON=15, COMMA=16, LPAREN=17, 
		RPAREN=18, LBRACE=19, RBRACE=20, PLUS=21, MINUS=22, STAR=23, SLASH=24, 
		EQ=25, NEQ=26, LT=27, GT=28, LEQ=29, GEQ=30, NOT=31, ARROW=32, IDENT=33, 
		NUMBER=34, STRING_LITERAL=35, WHITESPACE=36, LINE_COMMENT=37, BLOCK_COMMENT=38;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_functionDeclaration = 2, RULE_variableAssignment = 3, 
		RULE_parameters = 4, RULE_returnType = 5, RULE_constantDeclaration = 6, 
		RULE_variableDeclaration = 7, RULE_blockStatement = 8, RULE_functionBlockStatement = 9, 
		RULE_expressionStatement = 10, RULE_expression = 11, RULE_returnStatement = 12, 
		RULE_functionCall = 13, RULE_functionName = 14, RULE_arguments = 15, RULE_whileLoop = 16, 
		RULE_ifStatement = 17, RULE_conseqStatement = 18, RULE_altStatement = 19, 
		RULE_primitiveTypeAnnotation = 20, RULE_typeAnnotation = 21, RULE_validType = 22, 
		RULE_validParamType = 23;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "functionDeclaration", "variableAssignment", 
			"parameters", "returnType", "constantDeclaration", "variableDeclaration", 
			"blockStatement", "functionBlockStatement", "expressionStatement", "expression", 
			"returnStatement", "functionCall", "functionName", "arguments", "whileLoop", 
			"ifStatement", "conseqStatement", "altStatement", "primitiveTypeAnnotation", 
			"typeAnnotation", "validType", "validParamType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'let'", "'const'", "'fn'", "'if'", "'else'", "'return'", "'while'", 
			"'loop'", null, null, "'mut'", "'null'", "'='", "';'", "':'", "','", 
			"'('", "')'", "'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'=='", "'!='", 
			"'<'", "'>'", "'<='", "'>='", "'!'", "'->'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LET", "CONST", "FN", "IF", "ELSE", "RETURN", "WHILE", "LOOP", 
			"BOOL", "TYPE", "MUT", "NULL", "ASSIGN", "SEMI", "COLON", "COMMA", "LPAREN", 
			"RPAREN", "LBRACE", "RBRACE", "PLUS", "MINUS", "STAR", "SLASH", "EQ", 
			"NEQ", "LT", "GT", "LEQ", "GEQ", "NOT", "ARROW", "IDENT", "NUMBER", "STRING_LITERAL", 
			"WHITESPACE", "LINE_COMMENT", "BLOCK_COMMENT"
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
			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 62281876190L) != 0)) {
				{
				{
				setState(48);
				statement();
				}
				}
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(54);
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
			setState(65);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(56);
				constantDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(57);
				variableDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(58);
				functionDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(59);
				variableAssignment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(60);
				expressionStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(61);
				blockStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(62);
				ifStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(63);
				whileLoop();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(64);
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
		public FunctionBlockStatementContext functionBlockStatement() {
			return getRuleContext(FunctionBlockStatementContext.class,0);
		}
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
			setState(67);
			match(FN);
			setState(68);
			match(IDENT);
			setState(69);
			match(LPAREN);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENT) {
				{
				setState(70);
				parameters();
				}
			}

			setState(73);
			match(RPAREN);
			setState(74);
			returnType();
			setState(75);
			functionBlockStatement();
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
			setState(77);
			match(IDENT);
			setState(78);
			match(ASSIGN);
			setState(79);
			expression(0);
			setState(80);
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
			setState(82);
			match(IDENT);
			setState(83);
			typeAnnotation();
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(84);
				match(COMMA);
				setState(85);
				match(IDENT);
				setState(86);
				typeAnnotation();
				}
				}
				setState(91);
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
			setState(92);
			match(ARROW);
			setState(93);
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
			setState(95);
			match(CONST);
			setState(96);
			match(IDENT);
			setState(97);
			primitiveTypeAnnotation();
			setState(98);
			match(ASSIGN);
			setState(99);
			expression(0);
			setState(100);
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
			setState(102);
			match(LET);
			setState(103);
			match(IDENT);
			setState(104);
			primitiveTypeAnnotation();
			setState(105);
			match(ASSIGN);
			setState(106);
			expression(0);
			setState(107);
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
			setState(109);
			match(LBRACE);
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 62281876190L) != 0)) {
				{
				{
				setState(110);
				statement();
				}
				}
				setState(115);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(116);
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
	public static class FunctionBlockStatementContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(RustParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(RustParser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public FunctionBlockStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBlockStatement; }
	}

	public final FunctionBlockStatementContext functionBlockStatement() throws RecognitionException {
		FunctionBlockStatementContext _localctx = new FunctionBlockStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_functionBlockStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(LBRACE);
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 62281876190L) != 0)) {
				{
				{
				setState(119);
				statement();
				}
				}
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(125);
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
		enterRule(_localctx, 20, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			expression(0);
			setState(128);
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
		public TerminalNode LPAREN() { return getToken(RustParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(RustParser.RPAREN, 0); }
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
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(131);
				match(NUMBER);
				}
				break;
			case 2:
				{
				setState(132);
				match(BOOL);
				}
				break;
			case 3:
				{
				setState(133);
				match(IDENT);
				}
				break;
			case 4:
				{
				setState(134);
				match(STRING_LITERAL);
				}
				break;
			case 5:
				{
				setState(135);
				functionCall();
				}
				break;
			case 6:
				{
				setState(136);
				_la = _input.LA(1);
				if ( !(_la==MINUS || _la==NOT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(137);
				expression(2);
				}
				break;
			case 7:
				{
				setState(138);
				match(LPAREN);
				setState(139);
				expression(0);
				setState(140);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(155);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(153);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(144);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(145);
						_la = _input.LA(1);
						if ( !(_la==STAR || _la==SLASH) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(146);
						expression(6);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(147);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(148);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(149);
						expression(5);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(150);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(151);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2113929216L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(152);
						expression(4);
						}
						break;
					}
					} 
				}
				setState(157);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
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
		enterRule(_localctx, 24, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			match(RETURN);
			setState(159);
			expression(0);
			setState(160);
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
		enterRule(_localctx, 26, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			functionName();
			setState(163);
			match(LPAREN);
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 62281351680L) != 0)) {
				{
				setState(164);
				arguments();
				}
			}

			setState(167);
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
		enterRule(_localctx, 28, RULE_functionName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
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
		enterRule(_localctx, 30, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			expression(0);
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(172);
				match(COMMA);
				setState(173);
				expression(0);
				}
				}
				setState(178);
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
		enterRule(_localctx, 32, RULE_whileLoop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(WHILE);
			setState(180);
			expression(0);
			setState(181);
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
		enterRule(_localctx, 34, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(IF);
			setState(184);
			expression(0);
			setState(185);
			conseqStatement();
			setState(188);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(186);
				match(ELSE);
				setState(187);
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
		enterRule(_localctx, 36, RULE_conseqStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
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
		public AltStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_altStatement; }
	}

	public final AltStatementContext altStatement() throws RecognitionException {
		AltStatementContext _localctx = new AltStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_altStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
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
		enterRule(_localctx, 40, RULE_primitiveTypeAnnotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(COLON);
			setState(195);
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
		enterRule(_localctx, 42, RULE_typeAnnotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(COLON);
			setState(198);
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
		enterRule(_localctx, 44, RULE_validType);
		int _la;
		try {
			setState(208);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(200);
				match(TYPE);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(201);
				match(LPAREN);
				setState(203);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TYPE) {
					{
					setState(202);
					validParamType();
					}
				}

				setState(205);
				match(RPAREN);
				setState(206);
				match(ARROW);
				setState(207);
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
		enterRule(_localctx, 46, RULE_validParamType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			match(TYPE);
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MUT) {
				{
				{
				setState(211);
				match(MUT);
				setState(212);
				match(TYPE);
				}
				}
				setState(217);
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
		case 11:
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
		"\u0004\u0001&\u00db\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0001\u0000\u0005\u0000"+
		"2\b\u0000\n\u0000\f\u00005\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0003\u0001B\b\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002H\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0005\u0004X\b\u0004\n\u0004\f\u0004[\t\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0005\bp\b\b\n\b"+
		"\f\bs\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0005\ty\b\t\n\t\f\t|\t\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u008f\b\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0005\u000b\u009a\b\u000b\n\u000b\f\u000b\u009d"+
		"\t\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0003"+
		"\r\u00a6\b\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0005\u000f\u00af\b\u000f\n\u000f\f\u000f\u00b2\t\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u00bd\b\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0003\u0016\u00cc\b\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0003\u0016"+
		"\u00d1\b\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0005\u0017\u00d6\b"+
		"\u0017\n\u0017\f\u0017\u00d9\t\u0017\u0001\u0017\u0000\u0001\u0016\u0018"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u001e \"$&(*,.\u0000\u0004\u0002\u0000\u0016\u0016\u001f\u001f"+
		"\u0001\u0000\u0017\u0018\u0001\u0000\u0015\u0016\u0001\u0000\u0019\u001e"+
		"\u00de\u00003\u0001\u0000\u0000\u0000\u0002A\u0001\u0000\u0000\u0000\u0004"+
		"C\u0001\u0000\u0000\u0000\u0006M\u0001\u0000\u0000\u0000\bR\u0001\u0000"+
		"\u0000\u0000\n\\\u0001\u0000\u0000\u0000\f_\u0001\u0000\u0000\u0000\u000e"+
		"f\u0001\u0000\u0000\u0000\u0010m\u0001\u0000\u0000\u0000\u0012v\u0001"+
		"\u0000\u0000\u0000\u0014\u007f\u0001\u0000\u0000\u0000\u0016\u008e\u0001"+
		"\u0000\u0000\u0000\u0018\u009e\u0001\u0000\u0000\u0000\u001a\u00a2\u0001"+
		"\u0000\u0000\u0000\u001c\u00a9\u0001\u0000\u0000\u0000\u001e\u00ab\u0001"+
		"\u0000\u0000\u0000 \u00b3\u0001\u0000\u0000\u0000\"\u00b7\u0001\u0000"+
		"\u0000\u0000$\u00be\u0001\u0000\u0000\u0000&\u00c0\u0001\u0000\u0000\u0000"+
		"(\u00c2\u0001\u0000\u0000\u0000*\u00c5\u0001\u0000\u0000\u0000,\u00d0"+
		"\u0001\u0000\u0000\u0000.\u00d2\u0001\u0000\u0000\u000002\u0003\u0002"+
		"\u0001\u000010\u0001\u0000\u0000\u000025\u0001\u0000\u0000\u000031\u0001"+
		"\u0000\u0000\u000034\u0001\u0000\u0000\u000046\u0001\u0000\u0000\u0000"+
		"53\u0001\u0000\u0000\u000067\u0005\u0000\u0000\u00017\u0001\u0001\u0000"+
		"\u0000\u00008B\u0003\f\u0006\u00009B\u0003\u000e\u0007\u0000:B\u0003\u0004"+
		"\u0002\u0000;B\u0003\u0006\u0003\u0000<B\u0003\u0014\n\u0000=B\u0003\u0010"+
		"\b\u0000>B\u0003\"\u0011\u0000?B\u0003 \u0010\u0000@B\u0003\u0018\f\u0000"+
		"A8\u0001\u0000\u0000\u0000A9\u0001\u0000\u0000\u0000A:\u0001\u0000\u0000"+
		"\u0000A;\u0001\u0000\u0000\u0000A<\u0001\u0000\u0000\u0000A=\u0001\u0000"+
		"\u0000\u0000A>\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000\u0000A@\u0001"+
		"\u0000\u0000\u0000B\u0003\u0001\u0000\u0000\u0000CD\u0005\u0003\u0000"+
		"\u0000DE\u0005!\u0000\u0000EG\u0005\u0011\u0000\u0000FH\u0003\b\u0004"+
		"\u0000GF\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000HI\u0001\u0000"+
		"\u0000\u0000IJ\u0005\u0012\u0000\u0000JK\u0003\n\u0005\u0000KL\u0003\u0012"+
		"\t\u0000L\u0005\u0001\u0000\u0000\u0000MN\u0005!\u0000\u0000NO\u0005\r"+
		"\u0000\u0000OP\u0003\u0016\u000b\u0000PQ\u0005\u000e\u0000\u0000Q\u0007"+
		"\u0001\u0000\u0000\u0000RS\u0005!\u0000\u0000SY\u0003*\u0015\u0000TU\u0005"+
		"\u0010\u0000\u0000UV\u0005!\u0000\u0000VX\u0003*\u0015\u0000WT\u0001\u0000"+
		"\u0000\u0000X[\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000YZ\u0001"+
		"\u0000\u0000\u0000Z\t\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000"+
		"\\]\u0005 \u0000\u0000]^\u0005\n\u0000\u0000^\u000b\u0001\u0000\u0000"+
		"\u0000_`\u0005\u0002\u0000\u0000`a\u0005!\u0000\u0000ab\u0003(\u0014\u0000"+
		"bc\u0005\r\u0000\u0000cd\u0003\u0016\u000b\u0000de\u0005\u000e\u0000\u0000"+
		"e\r\u0001\u0000\u0000\u0000fg\u0005\u0001\u0000\u0000gh\u0005!\u0000\u0000"+
		"hi\u0003(\u0014\u0000ij\u0005\r\u0000\u0000jk\u0003\u0016\u000b\u0000"+
		"kl\u0005\u000e\u0000\u0000l\u000f\u0001\u0000\u0000\u0000mq\u0005\u0013"+
		"\u0000\u0000np\u0003\u0002\u0001\u0000on\u0001\u0000\u0000\u0000ps\u0001"+
		"\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000"+
		"rt\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000tu\u0005\u0014\u0000"+
		"\u0000u\u0011\u0001\u0000\u0000\u0000vz\u0005\u0013\u0000\u0000wy\u0003"+
		"\u0002\u0001\u0000xw\u0001\u0000\u0000\u0000y|\u0001\u0000\u0000\u0000"+
		"zx\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{}\u0001\u0000\u0000"+
		"\u0000|z\u0001\u0000\u0000\u0000}~\u0005\u0014\u0000\u0000~\u0013\u0001"+
		"\u0000\u0000\u0000\u007f\u0080\u0003\u0016\u000b\u0000\u0080\u0081\u0005"+
		"\u000e\u0000\u0000\u0081\u0015\u0001\u0000\u0000\u0000\u0082\u0083\u0006"+
		"\u000b\uffff\uffff\u0000\u0083\u008f\u0005\"\u0000\u0000\u0084\u008f\u0005"+
		"\t\u0000\u0000\u0085\u008f\u0005!\u0000\u0000\u0086\u008f\u0005#\u0000"+
		"\u0000\u0087\u008f\u0003\u001a\r\u0000\u0088\u0089\u0007\u0000\u0000\u0000"+
		"\u0089\u008f\u0003\u0016\u000b\u0002\u008a\u008b\u0005\u0011\u0000\u0000"+
		"\u008b\u008c\u0003\u0016\u000b\u0000\u008c\u008d\u0005\u0012\u0000\u0000"+
		"\u008d\u008f\u0001\u0000\u0000\u0000\u008e\u0082\u0001\u0000\u0000\u0000"+
		"\u008e\u0084\u0001\u0000\u0000\u0000\u008e\u0085\u0001\u0000\u0000\u0000"+
		"\u008e\u0086\u0001\u0000\u0000\u0000\u008e\u0087\u0001\u0000\u0000\u0000"+
		"\u008e\u0088\u0001\u0000\u0000\u0000\u008e\u008a\u0001\u0000\u0000\u0000"+
		"\u008f\u009b\u0001\u0000\u0000\u0000\u0090\u0091\n\u0005\u0000\u0000\u0091"+
		"\u0092\u0007\u0001\u0000\u0000\u0092\u009a\u0003\u0016\u000b\u0006\u0093"+
		"\u0094\n\u0004\u0000\u0000\u0094\u0095\u0007\u0002\u0000\u0000\u0095\u009a"+
		"\u0003\u0016\u000b\u0005\u0096\u0097\n\u0003\u0000\u0000\u0097\u0098\u0007"+
		"\u0003\u0000\u0000\u0098\u009a\u0003\u0016\u000b\u0004\u0099\u0090\u0001"+
		"\u0000\u0000\u0000\u0099\u0093\u0001\u0000\u0000\u0000\u0099\u0096\u0001"+
		"\u0000\u0000\u0000\u009a\u009d\u0001\u0000\u0000\u0000\u009b\u0099\u0001"+
		"\u0000\u0000\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u0017\u0001"+
		"\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009e\u009f\u0005"+
		"\u0006\u0000\u0000\u009f\u00a0\u0003\u0016\u000b\u0000\u00a0\u00a1\u0005"+
		"\u000e\u0000\u0000\u00a1\u0019\u0001\u0000\u0000\u0000\u00a2\u00a3\u0003"+
		"\u001c\u000e\u0000\u00a3\u00a5\u0005\u0011\u0000\u0000\u00a4\u00a6\u0003"+
		"\u001e\u000f\u0000\u00a5\u00a4\u0001\u0000\u0000\u0000\u00a5\u00a6\u0001"+
		"\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7\u00a8\u0005"+
		"\u0012\u0000\u0000\u00a8\u001b\u0001\u0000\u0000\u0000\u00a9\u00aa\u0005"+
		"!\u0000\u0000\u00aa\u001d\u0001\u0000\u0000\u0000\u00ab\u00b0\u0003\u0016"+
		"\u000b\u0000\u00ac\u00ad\u0005\u0010\u0000\u0000\u00ad\u00af\u0003\u0016"+
		"\u000b\u0000\u00ae\u00ac\u0001\u0000\u0000\u0000\u00af\u00b2\u0001\u0000"+
		"\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000\u00b0\u00b1\u0001\u0000"+
		"\u0000\u0000\u00b1\u001f\u0001\u0000\u0000\u0000\u00b2\u00b0\u0001\u0000"+
		"\u0000\u0000\u00b3\u00b4\u0005\u0007\u0000\u0000\u00b4\u00b5\u0003\u0016"+
		"\u000b\u0000\u00b5\u00b6\u0003\u0010\b\u0000\u00b6!\u0001\u0000\u0000"+
		"\u0000\u00b7\u00b8\u0005\u0004\u0000\u0000\u00b8\u00b9\u0003\u0016\u000b"+
		"\u0000\u00b9\u00bc\u0003$\u0012\u0000\u00ba\u00bb\u0005\u0005\u0000\u0000"+
		"\u00bb\u00bd\u0003&\u0013\u0000\u00bc\u00ba\u0001\u0000\u0000\u0000\u00bc"+
		"\u00bd\u0001\u0000\u0000\u0000\u00bd#\u0001\u0000\u0000\u0000\u00be\u00bf"+
		"\u0003\u0010\b\u0000\u00bf%\u0001\u0000\u0000\u0000\u00c0\u00c1\u0003"+
		"\u0010\b\u0000\u00c1\'\u0001\u0000\u0000\u0000\u00c2\u00c3\u0005\u000f"+
		"\u0000\u0000\u00c3\u00c4\u0005\n\u0000\u0000\u00c4)\u0001\u0000\u0000"+
		"\u0000\u00c5\u00c6\u0005\u000f\u0000\u0000\u00c6\u00c7\u0003,\u0016\u0000"+
		"\u00c7+\u0001\u0000\u0000\u0000\u00c8\u00d1\u0005\n\u0000\u0000\u00c9"+
		"\u00cb\u0005\u0011\u0000\u0000\u00ca\u00cc\u0003.\u0017\u0000\u00cb\u00ca"+
		"\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000\u0000\u0000\u00cc\u00cd"+
		"\u0001\u0000\u0000\u0000\u00cd\u00ce\u0005\u0012\u0000\u0000\u00ce\u00cf"+
		"\u0005 \u0000\u0000\u00cf\u00d1\u0003,\u0016\u0000\u00d0\u00c8\u0001\u0000"+
		"\u0000\u0000\u00d0\u00c9\u0001\u0000\u0000\u0000\u00d1-\u0001\u0000\u0000"+
		"\u0000\u00d2\u00d7\u0005\n\u0000\u0000\u00d3\u00d4\u0005\u000b\u0000\u0000"+
		"\u00d4\u00d6\u0005\n\u0000\u0000\u00d5\u00d3\u0001\u0000\u0000\u0000\u00d6"+
		"\u00d9\u0001\u0000\u0000\u0000\u00d7\u00d5\u0001\u0000\u0000\u0000\u00d7"+
		"\u00d8\u0001\u0000\u0000\u0000\u00d8/\u0001\u0000\u0000\u0000\u00d9\u00d7"+
		"\u0001\u0000\u0000\u0000\u000f3AGYqz\u008e\u0099\u009b\u00a5\u00b0\u00bc"+
		"\u00cb\u00d0\u00d7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}