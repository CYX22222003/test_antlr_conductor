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
    public static readonly RULE_variableAssignment = 3;
    public static readonly RULE_parameters = 4;
    public static readonly RULE_returnType = 5;
    public static readonly RULE_constantDeclaration = 6;
    public static readonly RULE_variableDeclaration = 7;
    public static readonly RULE_blockStatement = 8;
    public static readonly RULE_expressionStatement = 9;
    public static readonly RULE_expression = 10;
    public static readonly RULE_returnStatement = 11;
    public static readonly RULE_functionCall = 12;
    public static readonly RULE_functionName = 13;
    public static readonly RULE_arguments = 14;
    public static readonly RULE_whileLoop = 15;
    public static readonly RULE_ifStatement = 16;
    public static readonly RULE_ifExpression = 17;
    public static readonly RULE_altExpression = 18;
    public static readonly RULE_conseqStatement = 19;
    public static readonly RULE_altStatement = 20;
    public static readonly RULE_primitiveTypeAnnotation = 21;
    public static readonly RULE_typeAnnotation = 22;
    public static readonly RULE_validType = 23;
    public static readonly RULE_validParamType = 24;

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
        "program", "statement", "functionDeclaration", "variableAssignment", 
        "parameters", "returnType", "constantDeclaration", "variableDeclaration", 
        "blockStatement", "expressionStatement", "expression", "returnStatement", 
        "functionCall", "functionName", "arguments", "whileLoop", "ifStatement", 
        "ifExpression", "altExpression", "conseqStatement", "altStatement", 
        "primitiveTypeAnnotation", "typeAnnotation", "validType", "validParamType",
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
            this.state = 53;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 26477982) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 61) !== 0)) {
                {
                {
                this.state = 50;
                this.statement();
                }
                }
                this.state = 55;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 56;
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
            this.state = 67;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 58;
                this.constantDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 59;
                this.variableDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 60;
                this.functionDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 61;
                this.variableAssignment();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 62;
                this.expressionStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 63;
                this.blockStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 64;
                this.ifStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 65;
                this.whileLoop();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 66;
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
            this.state = 69;
            this.match(RustParser.FN);
            this.state = 70;
            this.match(RustParser.IDENT);
            this.state = 71;
            this.match(RustParser.LPAREN);
            this.state = 73;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 72;
                this.parameters();
                }
            }

            this.state = 75;
            this.match(RustParser.RPAREN);
            this.state = 76;
            this.returnType();
            this.state = 77;
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
    public variableAssignment(): VariableAssignmentContext {
        let localContext = new VariableAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 6, RustParser.RULE_variableAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 79;
            this.match(RustParser.IDENT);
            this.state = 80;
            this.match(RustParser.ASSIGN);
            this.state = 81;
            this.expression(0);
            this.state = 82;
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
        this.enterRule(localContext, 8, RustParser.RULE_parameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 84;
            this.match(RustParser.IDENT);
            this.state = 85;
            this.typeAnnotation();
            this.state = 91;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 86;
                this.match(RustParser.COMMA);
                this.state = 87;
                this.match(RustParser.IDENT);
                this.state = 88;
                this.typeAnnotation();
                }
                }
                this.state = 93;
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
        this.enterRule(localContext, 10, RustParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 94;
            this.match(RustParser.ARROW);
            this.state = 95;
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
        this.enterRule(localContext, 12, RustParser.RULE_constantDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 97;
            this.match(RustParser.CONST);
            this.state = 98;
            this.match(RustParser.IDENT);
            this.state = 99;
            this.primitiveTypeAnnotation();
            this.state = 100;
            this.match(RustParser.ASSIGN);
            this.state = 101;
            this.expression(0);
            this.state = 102;
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
        this.enterRule(localContext, 14, RustParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 104;
            this.match(RustParser.LET);
            {
            this.state = 105;
            this.match(RustParser.MUT);
            }
            this.state = 106;
            this.match(RustParser.IDENT);
            this.state = 107;
            this.primitiveTypeAnnotation();
            this.state = 108;
            this.match(RustParser.ASSIGN);
            this.state = 109;
            this.expression(0);
            this.state = 110;
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
        this.enterRule(localContext, 16, RustParser.RULE_blockStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 112;
            this.match(RustParser.LBRACE);
            this.state = 116;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 26477982) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 61) !== 0)) {
                {
                {
                this.state = 113;
                this.statement();
                }
                }
                this.state = 118;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 119;
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
        this.enterRule(localContext, 18, RustParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 121;
            this.expression(0);
            this.state = 122;
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
        let _startState = 20;
        this.enterRecursionRule(localContext, 20, RustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 141;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 125;
                this.match(RustParser.NUMBER);
                }
                break;
            case 2:
                {
                this.state = 126;
                this.match(RustParser.BOOL);
                }
                break;
            case 3:
                {
                this.state = 127;
                this.match(RustParser.IDENT);
                }
                break;
            case 4:
                {
                this.state = 128;
                this.match(RustParser.STRING_LITERAL);
                }
                break;
            case 5:
                {
                this.state = 129;
                this.functionCall();
                }
                break;
            case 6:
                {
                this.state = 130;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2563) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 131;
                this.expression(7);
                }
                break;
            case 7:
                {
                {
                this.state = 132;
                this.match(RustParser.AMP);
                this.state = 133;
                this.match(RustParser.MUT);
                }
                this.state = 135;
                this.expression(6);
                }
                break;
            case 8:
                {
                this.state = 136;
                this.match(RustParser.LPAREN);
                this.state = 137;
                this.expression(0);
                this.state = 138;
                this.match(RustParser.RPAREN);
                }
                break;
            case 9:
                {
                this.state = 140;
                this.ifExpression();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 154;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 152;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 143;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 144;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 24 || _la === 25)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 145;
                        this.expression(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 146;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 147;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 22 || _la === 23)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 148;
                        this.expression(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 149;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 150;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4227858432) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 151;
                        this.expression(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 156;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
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
        this.enterRule(localContext, 22, RustParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 157;
            this.match(RustParser.RETURN);
            this.state = 158;
            this.expression(0);
            this.state = 159;
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
        this.enterRule(localContext, 24, RustParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            this.functionName();
            this.state = 162;
            this.match(RustParser.LPAREN);
            this.state = 164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25429008) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 61) !== 0)) {
                {
                this.state = 163;
                this.arguments();
                }
            }

            this.state = 166;
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
        this.enterRule(localContext, 26, RustParser.RULE_functionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 168;
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
        this.enterRule(localContext, 28, RustParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.expression(0);
            this.state = 175;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 171;
                this.match(RustParser.COMMA);
                this.state = 172;
                this.expression(0);
                }
                }
                this.state = 177;
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
        this.enterRule(localContext, 30, RustParser.RULE_whileLoop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 178;
            this.match(RustParser.WHILE);
            this.state = 179;
            this.expression(0);
            this.state = 180;
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
        this.enterRule(localContext, 32, RustParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 182;
            this.match(RustParser.IF);
            this.state = 183;
            this.expression(0);
            this.state = 184;
            this.conseqStatement();
            this.state = 187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 185;
                this.match(RustParser.ELSE);
                this.state = 186;
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
        this.enterRule(localContext, 34, RustParser.RULE_ifExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 189;
            this.match(RustParser.IF);
            this.state = 190;
            this.expression(0);
            this.state = 191;
            this.match(RustParser.LBRACE);
            this.state = 192;
            this.expression(0);
            this.state = 193;
            this.match(RustParser.RBRACE);
            this.state = 194;
            this.match(RustParser.ELSE);
            this.state = 195;
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
        this.enterRule(localContext, 36, RustParser.RULE_altExpression);
        try {
            this.state = 202;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.IF:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 197;
                this.ifExpression();
                }
                break;
            case RustParser.LBRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 198;
                this.match(RustParser.LBRACE);
                this.state = 199;
                this.expression(0);
                this.state = 200;
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
        this.enterRule(localContext, 38, RustParser.RULE_conseqStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 204;
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
        this.enterRule(localContext, 40, RustParser.RULE_altStatement);
        try {
            this.state = 208;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 206;
                this.blockStatement();
                }
                break;
            case RustParser.IF:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 207;
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
        this.enterRule(localContext, 42, RustParser.RULE_primitiveTypeAnnotation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 210;
            this.match(RustParser.COLON);
            this.state = 211;
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
        this.enterRule(localContext, 44, RustParser.RULE_typeAnnotation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 213;
            this.match(RustParser.COLON);
            this.state = 214;
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
        this.enterRule(localContext, 46, RustParser.RULE_validType);
        let _la: number;
        try {
            this.state = 224;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 216;
                this.match(RustParser.TYPE);
                }
                break;
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 217;
                this.match(RustParser.LPAREN);
                this.state = 219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 218;
                    this.validParamType();
                    }
                }

                this.state = 221;
                this.match(RustParser.RPAREN);
                this.state = 222;
                this.match(RustParser.ARROW);
                this.state = 223;
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
        this.enterRule(localContext, 48, RustParser.RULE_validParamType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.match(RustParser.TYPE);
            this.state = 231;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 227;
                this.match(RustParser.COMMA);
                this.state = 228;
                this.match(RustParser.TYPE);
                }
                }
                this.state = 233;
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
        case 10:
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
        4,1,40,235,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,5,0,52,8,0,10,0,
        12,0,55,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,68,8,
        1,1,2,1,2,1,2,1,2,3,2,74,8,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
        1,4,1,4,1,4,1,4,1,4,5,4,90,8,4,10,4,12,4,93,9,4,1,5,1,5,1,5,1,6,
        1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,
        5,8,115,8,8,10,8,12,8,118,9,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,3,10,142,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        5,10,153,8,10,10,10,12,10,156,9,10,1,11,1,11,1,11,1,11,1,12,1,12,
        1,12,3,12,165,8,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,5,14,174,8,
        14,10,14,12,14,177,9,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,
        1,16,3,16,188,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,
        1,18,1,18,1,18,1,18,3,18,203,8,18,1,19,1,19,1,20,1,20,3,20,209,8,
        20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,3,23,220,8,23,1,
        23,1,23,1,23,3,23,225,8,23,1,24,1,24,1,24,5,24,230,8,24,10,24,12,
        24,233,9,24,1,24,0,1,20,25,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
        28,30,32,34,36,38,40,42,44,46,48,0,4,3,0,23,24,32,32,34,34,1,0,24,
        25,1,0,22,23,1,0,26,31,240,0,53,1,0,0,0,2,67,1,0,0,0,4,69,1,0,0,
        0,6,79,1,0,0,0,8,84,1,0,0,0,10,94,1,0,0,0,12,97,1,0,0,0,14,104,1,
        0,0,0,16,112,1,0,0,0,18,121,1,0,0,0,20,141,1,0,0,0,22,157,1,0,0,
        0,24,161,1,0,0,0,26,168,1,0,0,0,28,170,1,0,0,0,30,178,1,0,0,0,32,
        182,1,0,0,0,34,189,1,0,0,0,36,202,1,0,0,0,38,204,1,0,0,0,40,208,
        1,0,0,0,42,210,1,0,0,0,44,213,1,0,0,0,46,224,1,0,0,0,48,226,1,0,
        0,0,50,52,3,2,1,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,
        1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,5,0,0,1,57,1,1,0,0,0,58,
        68,3,12,6,0,59,68,3,14,7,0,60,68,3,4,2,0,61,68,3,6,3,0,62,68,3,18,
        9,0,63,68,3,16,8,0,64,68,3,32,16,0,65,68,3,30,15,0,66,68,3,22,11,
        0,67,58,1,0,0,0,67,59,1,0,0,0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,
        1,0,0,0,67,63,1,0,0,0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,
        68,3,1,0,0,0,69,70,5,3,0,0,70,71,5,35,0,0,71,73,5,18,0,0,72,74,3,
        8,4,0,73,72,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,5,19,0,0,76,
        77,3,10,5,0,77,78,3,16,8,0,78,5,1,0,0,0,79,80,5,35,0,0,80,81,5,14,
        0,0,81,82,3,20,10,0,82,83,5,15,0,0,83,7,1,0,0,0,84,85,5,35,0,0,85,
        91,3,44,22,0,86,87,5,17,0,0,87,88,5,35,0,0,88,90,3,44,22,0,89,86,
        1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,9,1,0,0,0,93,
        91,1,0,0,0,94,95,5,33,0,0,95,96,5,11,0,0,96,11,1,0,0,0,97,98,5,2,
        0,0,98,99,5,35,0,0,99,100,3,42,21,0,100,101,5,14,0,0,101,102,3,20,
        10,0,102,103,5,15,0,0,103,13,1,0,0,0,104,105,5,1,0,0,105,106,5,12,
        0,0,106,107,5,35,0,0,107,108,3,42,21,0,108,109,5,14,0,0,109,110,
        3,20,10,0,110,111,5,15,0,0,111,15,1,0,0,0,112,116,5,20,0,0,113,115,
        3,2,1,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,
        1,0,0,0,117,119,1,0,0,0,118,116,1,0,0,0,119,120,5,21,0,0,120,17,
        1,0,0,0,121,122,3,20,10,0,122,123,5,15,0,0,123,19,1,0,0,0,124,125,
        6,10,-1,0,125,142,5,36,0,0,126,142,5,10,0,0,127,142,5,35,0,0,128,
        142,5,37,0,0,129,142,3,24,12,0,130,131,7,0,0,0,131,142,3,20,10,7,
        132,133,5,34,0,0,133,134,5,12,0,0,134,135,1,0,0,0,135,142,3,20,10,
        6,136,137,5,18,0,0,137,138,3,20,10,0,138,139,5,19,0,0,139,142,1,
        0,0,0,140,142,3,34,17,0,141,124,1,0,0,0,141,126,1,0,0,0,141,127,
        1,0,0,0,141,128,1,0,0,0,141,129,1,0,0,0,141,130,1,0,0,0,141,132,
        1,0,0,0,141,136,1,0,0,0,141,140,1,0,0,0,142,154,1,0,0,0,143,144,
        10,5,0,0,144,145,7,1,0,0,145,153,3,20,10,6,146,147,10,4,0,0,147,
        148,7,2,0,0,148,153,3,20,10,5,149,150,10,3,0,0,150,151,7,3,0,0,151,
        153,3,20,10,4,152,143,1,0,0,0,152,146,1,0,0,0,152,149,1,0,0,0,153,
        156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,21,1,0,0,0,156,154,
        1,0,0,0,157,158,5,7,0,0,158,159,3,20,10,0,159,160,5,15,0,0,160,23,
        1,0,0,0,161,162,3,26,13,0,162,164,5,18,0,0,163,165,3,28,14,0,164,
        163,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,167,5,19,0,0,167,
        25,1,0,0,0,168,169,5,35,0,0,169,27,1,0,0,0,170,175,3,20,10,0,171,
        172,5,17,0,0,172,174,3,20,10,0,173,171,1,0,0,0,174,177,1,0,0,0,175,
        173,1,0,0,0,175,176,1,0,0,0,176,29,1,0,0,0,177,175,1,0,0,0,178,179,
        5,8,0,0,179,180,3,20,10,0,180,181,3,16,8,0,181,31,1,0,0,0,182,183,
        5,4,0,0,183,184,3,20,10,0,184,187,3,38,19,0,185,186,5,6,0,0,186,
        188,3,40,20,0,187,185,1,0,0,0,187,188,1,0,0,0,188,33,1,0,0,0,189,
        190,5,4,0,0,190,191,3,20,10,0,191,192,5,20,0,0,192,193,3,20,10,0,
        193,194,5,21,0,0,194,195,5,6,0,0,195,196,3,36,18,0,196,35,1,0,0,
        0,197,203,3,34,17,0,198,199,5,20,0,0,199,200,3,20,10,0,200,201,5,
        21,0,0,201,203,1,0,0,0,202,197,1,0,0,0,202,198,1,0,0,0,203,37,1,
        0,0,0,204,205,3,16,8,0,205,39,1,0,0,0,206,209,3,16,8,0,207,209,3,
        32,16,0,208,206,1,0,0,0,208,207,1,0,0,0,209,41,1,0,0,0,210,211,5,
        16,0,0,211,212,5,11,0,0,212,43,1,0,0,0,213,214,5,16,0,0,214,215,
        3,46,23,0,215,45,1,0,0,0,216,225,5,11,0,0,217,219,5,18,0,0,218,220,
        3,48,24,0,219,218,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,222,
        5,19,0,0,222,223,5,33,0,0,223,225,3,46,23,0,224,216,1,0,0,0,224,
        217,1,0,0,0,225,47,1,0,0,0,226,231,5,11,0,0,227,228,5,17,0,0,228,
        230,5,11,0,0,229,227,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,231,
        232,1,0,0,0,232,49,1,0,0,0,233,231,1,0,0,0,16,53,67,73,91,116,141,
        152,154,164,175,187,202,208,219,224,231
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
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
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
