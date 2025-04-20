// Generated from src/Rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { RustListener } from "./RustListener.js";
import { RustVisitor } from "./RustVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class RustParser extends antlr.Parser {
    public static readonly LET = 1;
    public static readonly CONST = 2;
    public static readonly FN = 3;
    public static readonly IF = 4;
    public static readonly IFEXR = 5;
    public static readonly ELSE = 6;
    public static readonly RETURN = 7;
    public static readonly WHILE = 8;
    public static readonly LOOP = 9;
    public static readonly BOOL = 10;
    public static readonly TYPE = 11;
    public static readonly MUT = 12;
    public static readonly NULL = 13;
    public static readonly ASSIGN = 14;
    public static readonly SEMI = 15;
    public static readonly COLON = 16;
    public static readonly COMMA = 17;
    public static readonly LPAREN = 18;
    public static readonly RPAREN = 19;
    public static readonly LBRACE = 20;
    public static readonly RBRACE = 21;
    public static readonly PLUS = 22;
    public static readonly MINUS = 23;
    public static readonly STAR = 24;
    public static readonly SLASH = 25;
    public static readonly EQ = 26;
    public static readonly NEQ = 27;
    public static readonly LT = 28;
    public static readonly GT = 29;
    public static readonly LEQ = 30;
    public static readonly GEQ = 31;
    public static readonly NOT = 32;
    public static readonly ARROW = 33;
    public static readonly AMP = 34;
    public static readonly IDENT = 35;
    public static readonly NUMBER = 36;
    public static readonly STRING_LITERAL = 37;
    public static readonly WHITESPACE = 38;
    public static readonly LINE_COMMENT = 39;
    public static readonly BLOCK_COMMENT = 40;
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_functionDeclaration = 2;
    public static readonly RULE_pointerVariableAssignment = 3;
    public static readonly RULE_variableAssignment = 4;
    public static readonly RULE_parameters = 5;
    public static readonly RULE_returnType = 6;
    public static readonly RULE_constantDeclaration = 7;
    public static readonly RULE_variableDeclaration = 8;
    public static readonly RULE_blockStatement = 9;
    public static readonly RULE_expressionStatement = 10;
    public static readonly RULE_expression = 11;
    public static readonly RULE_returnStatement = 12;
    public static readonly RULE_functionCall = 13;
    public static readonly RULE_functionName = 14;
    public static readonly RULE_arguments = 15;
    public static readonly RULE_whileLoop = 16;
    public static readonly RULE_ifStatement = 17;
    public static readonly RULE_ifExpression = 18;
    public static readonly RULE_altExpression = 19;
    public static readonly RULE_conseqStatement = 20;
    public static readonly RULE_altStatement = 21;
    public static readonly RULE_primitiveTypeAnnotation = 22;
    public static readonly RULE_typeAnnotation = 23;
    public static readonly RULE_validType = 24;
    public static readonly RULE_validParamType = 25;

    public static readonly literalNames = [
        null, "'let'", "'const'", "'fn'", "'if'", "'ifexpr'", "'else'", 
        "'return'", "'while'", "'loop'", null, null, "'mut'", "'null'", 
        "'='", "';'", "':'", "','", "'('", "')'", "'{'", "'}'", "'+'", "'-'", 
        "'*'", "'/'", "'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'!'", 
        "'->'", "'&'"
    ];

    public static readonly symbolicNames = [
        null, "LET", "CONST", "FN", "IF", "IFEXR", "ELSE", "RETURN", "WHILE", 
        "LOOP", "BOOL", "TYPE", "MUT", "NULL", "ASSIGN", "SEMI", "COLON", 
        "COMMA", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "PLUS", "MINUS", 
        "STAR", "SLASH", "EQ", "NEQ", "LT", "GT", "LEQ", "GEQ", "NOT", "ARROW", 
        "AMP", "IDENT", "NUMBER", "STRING_LITERAL", "WHITESPACE", "LINE_COMMENT", 
        "BLOCK_COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "statement", "functionDeclaration", "pointerVariableAssignment", 
        "variableAssignment", "parameters", "returnType", "constantDeclaration", 
        "variableDeclaration", "blockStatement", "expressionStatement", 
        "expression", "returnStatement", "functionCall", "functionName", 
        "arguments", "whileLoop", "ifStatement", "ifExpression", "altExpression", 
        "conseqStatement", "altStatement", "primitiveTypeAnnotation", "typeAnnotation", 
        "validType", "validParamType",
    ];

    public get grammarFileName(): string { return "Rust.g4"; }
    public get literalNames(): (string | null)[] { return RustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustParser.symbolicNames; }
    public get ruleNames(): string[] { return RustParser.ruleNames; }
    public get serializedATN(): number[] { return RustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustParser._ATN, RustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, RustParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 55;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 26477982) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 61) !== 0)) {
                {
                {
                this.state = 52;
                this.statement();
                }
                }
                this.state = 57;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 58;
            this.match(RustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, RustParser.RULE_statement);
        try {
            this.state = 70;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 60;
                this.constantDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 61;
                this.variableDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 62;
                this.functionDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 63;
                this.pointerVariableAssignment();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 64;
                this.variableAssignment();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 65;
                this.expressionStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 66;
                this.blockStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 67;
                this.ifStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 68;
                this.whileLoop();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 69;
                this.returnStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDeclaration(): FunctionDeclarationContext {
        let localContext = new FunctionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 4, RustParser.RULE_functionDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
            this.match(RustParser.FN);
            this.state = 73;
            this.match(RustParser.IDENT);
            this.state = 74;
            this.match(RustParser.LPAREN);
            this.state = 76;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 75;
                this.parameters();
                }
            }

            this.state = 78;
            this.match(RustParser.RPAREN);
            this.state = 79;
            this.returnType();
            this.state = 80;
            this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pointerVariableAssignment(): PointerVariableAssignmentContext {
        let localContext = new PointerVariableAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 6, RustParser.RULE_pointerVariableAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 82;
            this.match(RustParser.STAR);
            this.state = 83;
            this.match(RustParser.IDENT);
            this.state = 84;
            this.match(RustParser.ASSIGN);
            this.state = 85;
            this.expression(0);
            this.state = 86;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableAssignment(): VariableAssignmentContext {
        let localContext = new VariableAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 8, RustParser.RULE_variableAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 88;
            this.match(RustParser.IDENT);
            this.state = 89;
            this.match(RustParser.ASSIGN);
            this.state = 90;
            this.expression(0);
            this.state = 91;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameters(): ParametersContext {
        let localContext = new ParametersContext(this.context, this.state);
        this.enterRule(localContext, 10, RustParser.RULE_parameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 93;
            this.match(RustParser.IDENT);
            this.state = 94;
            this.typeAnnotation();
            this.state = 100;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 95;
                this.match(RustParser.COMMA);
                this.state = 96;
                this.match(RustParser.IDENT);
                this.state = 97;
                this.typeAnnotation();
                }
                }
                this.state = 102;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnType(): ReturnTypeContext {
        let localContext = new ReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 12, RustParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 103;
            this.match(RustParser.ARROW);
            this.state = 104;
            this.match(RustParser.TYPE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantDeclaration(): ConstantDeclarationContext {
        let localContext = new ConstantDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 14, RustParser.RULE_constantDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 106;
            this.match(RustParser.CONST);
            this.state = 107;
            this.match(RustParser.IDENT);
            this.state = 108;
            this.primitiveTypeAnnotation();
            this.state = 109;
            this.match(RustParser.ASSIGN);
            this.state = 110;
            this.expression(0);
            this.state = 111;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 16, RustParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 113;
            this.match(RustParser.LET);
            {
            this.state = 114;
            this.match(RustParser.MUT);
            }
            this.state = 115;
            this.match(RustParser.IDENT);
            this.state = 116;
            this.primitiveTypeAnnotation();
            this.state = 117;
            this.match(RustParser.ASSIGN);
            this.state = 118;
            this.expression(0);
            this.state = 119;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockStatement(): BlockStatementContext {
        let localContext = new BlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 18, RustParser.RULE_blockStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 121;
            this.match(RustParser.LBRACE);
            this.state = 125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 26477982) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 61) !== 0)) {
                {
                {
                this.state = 122;
                this.statement();
                }
                }
                this.state = 127;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 128;
            this.match(RustParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 20, RustParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 130;
            this.expression(0);
            this.state = 131;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 22;
        this.enterRecursionRule(localContext, 22, RustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 154;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                {
                this.state = 134;
                this.match(RustParser.NUMBER);
                }
                break;
            case 2:
                {
                this.state = 135;
                this.match(RustParser.BOOL);
                }
                break;
            case 3:
                {
                this.state = 136;
                this.match(RustParser.IDENT);
                }
                break;
            case 4:
                {
                this.state = 137;
                this.match(RustParser.STRING_LITERAL);
                }
                break;
            case 5:
                {
                this.state = 138;
                this.functionCall();
                }
                break;
            case 6:
                {
                this.state = 139;
                this.match(RustParser.STAR);
                this.state = 140;
                this.expression(7);
                }
                break;
            case 7:
                {
                this.state = 146;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 141;
                    this.match(RustParser.MINUS);
                    }
                    break;
                case 2:
                    {
                    this.state = 142;
                    this.match(RustParser.NOT);
                    }
                    break;
                case 3:
                    {
                    this.state = 143;
                    this.match(RustParser.AMP);
                    }
                    break;
                case 4:
                    {
                    this.state = 144;
                    this.match(RustParser.AMP);
                    this.state = 145;
                    this.match(RustParser.MUT);
                    }
                    break;
                }
                this.state = 148;
                this.expression(6);
                }
                break;
            case 8:
                {
                this.state = 149;
                this.match(RustParser.LPAREN);
                this.state = 150;
                this.expression(0);
                this.state = 151;
                this.match(RustParser.RPAREN);
                }
                break;
            case 9:
                {
                this.state = 153;
                this.ifExpression();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 167;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 165;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 156;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 157;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 24 || _la === 25)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 158;
                        this.expression(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 159;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 160;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 22 || _la === 23)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 161;
                        this.expression(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 162;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 163;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4227858432) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 164;
                        this.expression(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 169;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 24, RustParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.match(RustParser.RETURN);
            this.state = 171;
            this.expression(0);
            this.state = 172;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 26, RustParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.functionName();
            this.state = 175;
            this.match(RustParser.LPAREN);
            this.state = 177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25429008) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 61) !== 0)) {
                {
                this.state = 176;
                this.arguments();
                }
            }

            this.state = 179;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionName(): FunctionNameContext {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 28, RustParser.RULE_functionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 181;
            this.match(RustParser.IDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arguments(): ArgumentsContext {
        let localContext = new ArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 30, RustParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            this.expression(0);
            this.state = 188;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 184;
                this.match(RustParser.COMMA);
                this.state = 185;
                this.expression(0);
                }
                }
                this.state = 190;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileLoop(): WhileLoopContext {
        let localContext = new WhileLoopContext(this.context, this.state);
        this.enterRule(localContext, 32, RustParser.RULE_whileLoop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 191;
            this.match(RustParser.WHILE);
            this.state = 192;
            this.expression(0);
            this.state = 193;
            this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 34, RustParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 195;
            this.match(RustParser.IF);
            this.state = 196;
            this.expression(0);
            this.state = 197;
            this.conseqStatement();
            this.state = 200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 198;
                this.match(RustParser.ELSE);
                this.state = 199;
                this.altStatement();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifExpression(): IfExpressionContext {
        let localContext = new IfExpressionContext(this.context, this.state);
        this.enterRule(localContext, 36, RustParser.RULE_ifExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 202;
            this.match(RustParser.IF);
            this.state = 203;
            this.expression(0);
            this.state = 204;
            this.match(RustParser.LBRACE);
            this.state = 205;
            this.expression(0);
            this.state = 206;
            this.match(RustParser.RBRACE);
            this.state = 207;
            this.match(RustParser.ELSE);
            this.state = 208;
            this.altExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altExpression(): AltExpressionContext {
        let localContext = new AltExpressionContext(this.context, this.state);
        this.enterRule(localContext, 38, RustParser.RULE_altExpression);
        try {
            this.state = 215;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.IF:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 210;
                this.ifExpression();
                }
                break;
            case RustParser.LBRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 211;
                this.match(RustParser.LBRACE);
                this.state = 212;
                this.expression(0);
                this.state = 213;
                this.match(RustParser.RBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conseqStatement(): ConseqStatementContext {
        let localContext = new ConseqStatementContext(this.context, this.state);
        this.enterRule(localContext, 40, RustParser.RULE_conseqStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 217;
            this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altStatement(): AltStatementContext {
        let localContext = new AltStatementContext(this.context, this.state);
        this.enterRule(localContext, 42, RustParser.RULE_altStatement);
        try {
            this.state = 221;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 219;
                this.blockStatement();
                }
                break;
            case RustParser.IF:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 220;
                this.ifStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primitiveTypeAnnotation(): PrimitiveTypeAnnotationContext {
        let localContext = new PrimitiveTypeAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 44, RustParser.RULE_primitiveTypeAnnotation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 223;
            this.match(RustParser.COLON);
            this.state = 224;
            this.match(RustParser.TYPE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeAnnotation(): TypeAnnotationContext {
        let localContext = new TypeAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 46, RustParser.RULE_typeAnnotation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.match(RustParser.COLON);
            this.state = 227;
            this.validType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public validType(): ValidTypeContext {
        let localContext = new ValidTypeContext(this.context, this.state);
        this.enterRule(localContext, 48, RustParser.RULE_validType);
        let _la: number;
        try {
            this.state = 237;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 229;
                this.match(RustParser.TYPE);
                }
                break;
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 230;
                this.match(RustParser.LPAREN);
                this.state = 232;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 231;
                    this.validParamType();
                    }
                }

                this.state = 234;
                this.match(RustParser.RPAREN);
                this.state = 235;
                this.match(RustParser.ARROW);
                this.state = 236;
                this.validType();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public validParamType(): ValidParamTypeContext {
        let localContext = new ValidParamTypeContext(this.context, this.state);
        this.enterRule(localContext, 50, RustParser.RULE_validParamType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 239;
            this.match(RustParser.TYPE);
            this.state = 244;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 240;
                this.match(RustParser.COMMA);
                this.state = 241;
                this.match(RustParser.TYPE);
                }
                }
                this.state = 246;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 11:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 5);
        case 1:
            return this.precpred(this.context, 4);
        case 2:
            return this.precpred(this.context, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,40,248,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,5,0,54,
        8,0,10,0,12,0,57,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,3,1,71,8,1,1,2,1,2,1,2,1,2,3,2,77,8,2,1,2,1,2,1,2,1,2,1,3,1,
        3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,5,5,99,
        8,5,10,5,12,5,102,9,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,5,9,124,8,9,10,9,12,9,127,
        9,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
        11,1,11,1,11,1,11,1,11,1,11,3,11,147,8,11,1,11,1,11,1,11,1,11,1,
        11,1,11,3,11,155,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
        11,5,11,166,8,11,10,11,12,11,169,9,11,1,12,1,12,1,12,1,12,1,13,1,
        13,1,13,3,13,178,8,13,1,13,1,13,1,14,1,14,1,15,1,15,1,15,5,15,187,
        8,15,10,15,12,15,190,9,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
        1,17,3,17,201,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,
        1,19,1,19,1,19,1,19,3,19,216,8,19,1,20,1,20,1,21,1,21,3,21,222,8,
        21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,3,24,233,8,24,1,
        24,1,24,1,24,3,24,238,8,24,1,25,1,25,1,25,5,25,243,8,25,10,25,12,
        25,246,9,25,1,25,0,1,22,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
        28,30,32,34,36,38,40,42,44,46,48,50,0,3,1,0,24,25,1,0,22,23,1,0,
        26,31,256,0,55,1,0,0,0,2,70,1,0,0,0,4,72,1,0,0,0,6,82,1,0,0,0,8,
        88,1,0,0,0,10,93,1,0,0,0,12,103,1,0,0,0,14,106,1,0,0,0,16,113,1,
        0,0,0,18,121,1,0,0,0,20,130,1,0,0,0,22,154,1,0,0,0,24,170,1,0,0,
        0,26,174,1,0,0,0,28,181,1,0,0,0,30,183,1,0,0,0,32,191,1,0,0,0,34,
        195,1,0,0,0,36,202,1,0,0,0,38,215,1,0,0,0,40,217,1,0,0,0,42,221,
        1,0,0,0,44,223,1,0,0,0,46,226,1,0,0,0,48,237,1,0,0,0,50,239,1,0,
        0,0,52,54,3,2,1,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,
        1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,5,0,0,1,59,1,1,0,0,0,60,
        71,3,14,7,0,61,71,3,16,8,0,62,71,3,4,2,0,63,71,3,6,3,0,64,71,3,8,
        4,0,65,71,3,20,10,0,66,71,3,18,9,0,67,71,3,34,17,0,68,71,3,32,16,
        0,69,71,3,24,12,0,70,60,1,0,0,0,70,61,1,0,0,0,70,62,1,0,0,0,70,63,
        1,0,0,0,70,64,1,0,0,0,70,65,1,0,0,0,70,66,1,0,0,0,70,67,1,0,0,0,
        70,68,1,0,0,0,70,69,1,0,0,0,71,3,1,0,0,0,72,73,5,3,0,0,73,74,5,35,
        0,0,74,76,5,18,0,0,75,77,3,10,5,0,76,75,1,0,0,0,76,77,1,0,0,0,77,
        78,1,0,0,0,78,79,5,19,0,0,79,80,3,12,6,0,80,81,3,18,9,0,81,5,1,0,
        0,0,82,83,5,24,0,0,83,84,5,35,0,0,84,85,5,14,0,0,85,86,3,22,11,0,
        86,87,5,15,0,0,87,7,1,0,0,0,88,89,5,35,0,0,89,90,5,14,0,0,90,91,
        3,22,11,0,91,92,5,15,0,0,92,9,1,0,0,0,93,94,5,35,0,0,94,100,3,46,
        23,0,95,96,5,17,0,0,96,97,5,35,0,0,97,99,3,46,23,0,98,95,1,0,0,0,
        99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,11,1,0,0,0,102,
        100,1,0,0,0,103,104,5,33,0,0,104,105,5,11,0,0,105,13,1,0,0,0,106,
        107,5,2,0,0,107,108,5,35,0,0,108,109,3,44,22,0,109,110,5,14,0,0,
        110,111,3,22,11,0,111,112,5,15,0,0,112,15,1,0,0,0,113,114,5,1,0,
        0,114,115,5,12,0,0,115,116,5,35,0,0,116,117,3,44,22,0,117,118,5,
        14,0,0,118,119,3,22,11,0,119,120,5,15,0,0,120,17,1,0,0,0,121,125,
        5,20,0,0,122,124,3,2,1,0,123,122,1,0,0,0,124,127,1,0,0,0,125,123,
        1,0,0,0,125,126,1,0,0,0,126,128,1,0,0,0,127,125,1,0,0,0,128,129,
        5,21,0,0,129,19,1,0,0,0,130,131,3,22,11,0,131,132,5,15,0,0,132,21,
        1,0,0,0,133,134,6,11,-1,0,134,155,5,36,0,0,135,155,5,10,0,0,136,
        155,5,35,0,0,137,155,5,37,0,0,138,155,3,26,13,0,139,140,5,24,0,0,
        140,155,3,22,11,7,141,147,5,23,0,0,142,147,5,32,0,0,143,147,5,34,
        0,0,144,145,5,34,0,0,145,147,5,12,0,0,146,141,1,0,0,0,146,142,1,
        0,0,0,146,143,1,0,0,0,146,144,1,0,0,0,147,148,1,0,0,0,148,155,3,
        22,11,6,149,150,5,18,0,0,150,151,3,22,11,0,151,152,5,19,0,0,152,
        155,1,0,0,0,153,155,3,36,18,0,154,133,1,0,0,0,154,135,1,0,0,0,154,
        136,1,0,0,0,154,137,1,0,0,0,154,138,1,0,0,0,154,139,1,0,0,0,154,
        146,1,0,0,0,154,149,1,0,0,0,154,153,1,0,0,0,155,167,1,0,0,0,156,
        157,10,5,0,0,157,158,7,0,0,0,158,166,3,22,11,6,159,160,10,4,0,0,
        160,161,7,1,0,0,161,166,3,22,11,5,162,163,10,3,0,0,163,164,7,2,0,
        0,164,166,3,22,11,4,165,156,1,0,0,0,165,159,1,0,0,0,165,162,1,0,
        0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,23,1,0,0,
        0,169,167,1,0,0,0,170,171,5,7,0,0,171,172,3,22,11,0,172,173,5,15,
        0,0,173,25,1,0,0,0,174,175,3,28,14,0,175,177,5,18,0,0,176,178,3,
        30,15,0,177,176,1,0,0,0,177,178,1,0,0,0,178,179,1,0,0,0,179,180,
        5,19,0,0,180,27,1,0,0,0,181,182,5,35,0,0,182,29,1,0,0,0,183,188,
        3,22,11,0,184,185,5,17,0,0,185,187,3,22,11,0,186,184,1,0,0,0,187,
        190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,31,1,0,0,0,190,188,
        1,0,0,0,191,192,5,8,0,0,192,193,3,22,11,0,193,194,3,18,9,0,194,33,
        1,0,0,0,195,196,5,4,0,0,196,197,3,22,11,0,197,200,3,40,20,0,198,
        199,5,6,0,0,199,201,3,42,21,0,200,198,1,0,0,0,200,201,1,0,0,0,201,
        35,1,0,0,0,202,203,5,4,0,0,203,204,3,22,11,0,204,205,5,20,0,0,205,
        206,3,22,11,0,206,207,5,21,0,0,207,208,5,6,0,0,208,209,3,38,19,0,
        209,37,1,0,0,0,210,216,3,36,18,0,211,212,5,20,0,0,212,213,3,22,11,
        0,213,214,5,21,0,0,214,216,1,0,0,0,215,210,1,0,0,0,215,211,1,0,0,
        0,216,39,1,0,0,0,217,218,3,18,9,0,218,41,1,0,0,0,219,222,3,18,9,
        0,220,222,3,34,17,0,221,219,1,0,0,0,221,220,1,0,0,0,222,43,1,0,0,
        0,223,224,5,16,0,0,224,225,5,11,0,0,225,45,1,0,0,0,226,227,5,16,
        0,0,227,228,3,48,24,0,228,47,1,0,0,0,229,238,5,11,0,0,230,232,5,
        18,0,0,231,233,3,50,25,0,232,231,1,0,0,0,232,233,1,0,0,0,233,234,
        1,0,0,0,234,235,5,19,0,0,235,236,5,33,0,0,236,238,3,48,24,0,237,
        229,1,0,0,0,237,230,1,0,0,0,238,49,1,0,0,0,239,244,5,11,0,0,240,
        241,5,17,0,0,241,243,5,11,0,0,242,240,1,0,0,0,243,246,1,0,0,0,244,
        242,1,0,0,0,244,245,1,0,0,0,245,51,1,0,0,0,246,244,1,0,0,0,17,55,
        70,76,100,125,146,154,165,167,177,188,200,215,221,232,237,244
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustParser.__ATN) {
            RustParser.__ATN = new antlr.ATNDeserializer().deserialize(RustParser._serializedATN);
        }

        return RustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustParser.literalNames, RustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustParser.vocabulary;
    }

    private static readonly decisionsToDFA = RustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(RustParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_program;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constantDeclaration(): ConstantDeclarationContext | null {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public pointerVariableAssignment(): PointerVariableAssignmentContext | null {
        return this.getRuleContext(0, PointerVariableAssignmentContext);
    }
    public variableAssignment(): VariableAssignmentContext | null {
        return this.getRuleContext(0, VariableAssignmentContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public blockStatement(): BlockStatementContext | null {
        return this.getRuleContext(0, BlockStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public whileLoop(): WhileLoopContext | null {
        return this.getRuleContext(0, WhileLoopContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_statement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FN(): antlr.TerminalNode {
        return this.getToken(RustParser.FN, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public returnType(): ReturnTypeContext {
        return this.getRuleContext(0, ReturnTypeContext)!;
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public parameters(): ParametersContext | null {
        return this.getRuleContext(0, ParametersContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionDeclaration;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterFunctionDeclaration) {
             listener.enterFunctionDeclaration(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitFunctionDeclaration) {
             listener.exitFunctionDeclaration(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PointerVariableAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(RustParser.STAR, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(RustParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pointerVariableAssignment;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterPointerVariableAssignment) {
             listener.enterPointerVariableAssignment(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitPointerVariableAssignment) {
             listener.exitPointerVariableAssignment(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitPointerVariableAssignment) {
            return visitor.visitPointerVariableAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(RustParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_variableAssignment;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterVariableAssignment) {
             listener.enterVariableAssignment(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitVariableAssignment) {
             listener.exitVariableAssignment(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitVariableAssignment) {
            return visitor.visitVariableAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode[];
    public IDENT(i: number): antlr.TerminalNode | null;
    public IDENT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.IDENT);
    	} else {
    		return this.getToken(RustParser.IDENT, i);
    	}
    }
    public typeAnnotation(): TypeAnnotationContext[];
    public typeAnnotation(i: number): TypeAnnotationContext | null;
    public typeAnnotation(i?: number): TypeAnnotationContext[] | TypeAnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeAnnotationContext);
        }

        return this.getRuleContext(i, TypeAnnotationContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_parameters;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterParameters) {
             listener.enterParameters(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitParameters) {
             listener.exitParameters(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitParameters) {
            return visitor.visitParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(RustParser.ARROW, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.TYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_returnType;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterReturnType) {
             listener.enterReturnType(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitReturnType) {
             listener.exitReturnType(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONST(): antlr.TerminalNode {
        return this.getToken(RustParser.CONST, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public primitiveTypeAnnotation(): PrimitiveTypeAnnotationContext {
        return this.getRuleContext(0, PrimitiveTypeAnnotationContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(RustParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_constantDeclaration;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterConstantDeclaration) {
             listener.enterConstantDeclaration(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitConstantDeclaration) {
             listener.exitConstantDeclaration(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitConstantDeclaration) {
            return visitor.visitConstantDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(RustParser.LET, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public primitiveTypeAnnotation(): PrimitiveTypeAnnotationContext {
        return this.getRuleContext(0, PrimitiveTypeAnnotationContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(RustParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_variableDeclaration;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterVariableDeclaration) {
             listener.enterVariableDeclaration(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitVariableDeclaration) {
             listener.exitVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RBRACE, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_blockStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterBlockStatement) {
             listener.enterBlockStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitBlockStatement) {
             listener.exitBlockStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expressionStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NUMBER, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BOOL, 0);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.IDENT, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STRING_LITERAL, 0);
    }
    public functionCall(): FunctionCallContext | null {
        return this.getRuleContext(0, FunctionCallContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NOT, 0);
    }
    public AMP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AMP, 0);
    }
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MUT, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASH, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUS, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public GEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GEQ, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GT, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LT, 0);
    }
    public LEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LEQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NEQ, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expression;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(RustParser.RETURN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_returnStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionCall;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionName;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterFunctionName) {
             listener.enterFunctionName(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitFunctionName) {
             listener.exitFunctionName(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_arguments;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterArguments) {
             listener.enterArguments(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitArguments) {
             listener.exitArguments(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileLoopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(RustParser.WHILE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_whileLoop;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterWhileLoop) {
             listener.enterWhileLoop(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitWhileLoop) {
             listener.exitWhileLoop(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitWhileLoop) {
            return visitor.visitWhileLoop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(RustParser.IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public conseqStatement(): ConseqStatementContext {
        return this.getRuleContext(0, ConseqStatementContext)!;
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ELSE, 0);
    }
    public altStatement(): AltStatementContext | null {
        return this.getRuleContext(0, AltStatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_ifStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(RustParser.IF, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RBRACE, 0)!;
    }
    public ELSE(): antlr.TerminalNode {
        return this.getToken(RustParser.ELSE, 0)!;
    }
    public altExpression(): AltExpressionContext {
        return this.getRuleContext(0, AltExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_ifExpression;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterIfExpression) {
             listener.enterIfExpression(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitIfExpression) {
             listener.exitIfExpression(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitIfExpression) {
            return visitor.visitIfExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LBRACE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_altExpression;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterAltExpression) {
             listener.enterAltExpression(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitAltExpression) {
             listener.exitAltExpression(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitAltExpression) {
            return visitor.visitAltExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConseqStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_conseqStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterConseqStatement) {
             listener.enterConseqStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitConseqStatement) {
             listener.exitConseqStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitConseqStatement) {
            return visitor.visitConseqStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockStatement(): BlockStatementContext | null {
        return this.getRuleContext(0, BlockStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_altStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterAltStatement) {
             listener.enterAltStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitAltStatement) {
             listener.exitAltStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitAltStatement) {
            return visitor.visitAltStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimitiveTypeAnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.TYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_primitiveTypeAnnotation;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterPrimitiveTypeAnnotation) {
             listener.enterPrimitiveTypeAnnotation(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitPrimitiveTypeAnnotation) {
             listener.exitPrimitiveTypeAnnotation(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitPrimitiveTypeAnnotation) {
            return visitor.visitPrimitiveTypeAnnotation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeAnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public validType(): ValidTypeContext {
        return this.getRuleContext(0, ValidTypeContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeAnnotation;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterTypeAnnotation) {
             listener.enterTypeAnnotation(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitTypeAnnotation) {
             listener.exitTypeAnnotation(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitTypeAnnotation) {
            return visitor.visitTypeAnnotation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValidTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.TYPE, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public ARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ARROW, 0);
    }
    public validType(): ValidTypeContext | null {
        return this.getRuleContext(0, ValidTypeContext);
    }
    public validParamType(): ValidParamTypeContext | null {
        return this.getRuleContext(0, ValidParamTypeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_validType;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterValidType) {
             listener.enterValidType(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitValidType) {
             listener.exitValidType(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitValidType) {
            return visitor.visitValidType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValidParamTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE(): antlr.TerminalNode[];
    public TYPE(i: number): antlr.TerminalNode | null;
    public TYPE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.TYPE);
    	} else {
    		return this.getToken(RustParser.TYPE, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_validParamType;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterValidParamType) {
             listener.enterValidParamType(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitValidParamType) {
             listener.exitValidParamType(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitValidParamType) {
            return visitor.visitValidParamType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
