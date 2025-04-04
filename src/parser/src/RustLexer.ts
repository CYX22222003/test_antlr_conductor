// Generated from src/Rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class RustLexer extends antlr.Lexer {
    public static readonly LET = 1;
    public static readonly CONST = 2;
    public static readonly FN = 3;
    public static readonly IF = 4;
    public static readonly ELSE = 5;
    public static readonly RETURN = 6;
    public static readonly WHILE = 7;
    public static readonly LOOP = 8;
    public static readonly BOOL = 9;
    public static readonly TYPE = 10;
    public static readonly MUT = 11;
    public static readonly NULL = 12;
    public static readonly ASSIGN = 13;
    public static readonly SEMI = 14;
    public static readonly COLON = 15;
    public static readonly COMMA = 16;
    public static readonly LPAREN = 17;
    public static readonly RPAREN = 18;
    public static readonly LBRACE = 19;
    public static readonly RBRACE = 20;
    public static readonly PLUS = 21;
    public static readonly MINUS = 22;
    public static readonly STAR = 23;
    public static readonly SLASH = 24;
    public static readonly EQ = 25;
    public static readonly NEQ = 26;
    public static readonly LT = 27;
    public static readonly GT = 28;
    public static readonly LEQ = 29;
    public static readonly GEQ = 30;
    public static readonly NOT = 31;
    public static readonly ARROW = 32;
    public static readonly IDENT = 33;
    public static readonly NUMBER = 34;
    public static readonly WHITESPACE = 35;
    public static readonly LINE_COMMENT = 36;
    public static readonly BLOCK_COMMENT = 37;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "'const'", "'fn'", "'if'", "'else'", "'return'", 
        "'while'", "'loop'", null, null, "'mut'", "'null'", "'='", "';'", 
        "':'", "','", "'('", "')'", "'{'", "'}'", "'+'", "'-'", "'*'", "'/'", 
        "'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'!'", "'->'"
    ];

    public static readonly symbolicNames = [
        null, "LET", "CONST", "FN", "IF", "ELSE", "RETURN", "WHILE", "LOOP", 
        "BOOL", "TYPE", "MUT", "NULL", "ASSIGN", "SEMI", "COLON", "COMMA", 
        "LPAREN", "RPAREN", "LBRACE", "RBRACE", "PLUS", "MINUS", "STAR", 
        "SLASH", "EQ", "NEQ", "LT", "GT", "LEQ", "GEQ", "NOT", "ARROW", 
        "IDENT", "NUMBER", "WHITESPACE", "LINE_COMMENT", "BLOCK_COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "LET", "CONST", "FN", "IF", "ELSE", "RETURN", "WHILE", "LOOP", "BOOL", 
        "TYPE", "MUT", "NULL", "ASSIGN", "SEMI", "COLON", "COMMA", "LPAREN", 
        "RPAREN", "LBRACE", "RBRACE", "PLUS", "MINUS", "STAR", "SLASH", 
        "EQ", "NEQ", "LT", "GT", "LEQ", "GEQ", "NOT", "ARROW", "IDENT", 
        "NUMBER", "WHITESPACE", "LINE_COMMENT", "BLOCK_COMMENT",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, RustLexer._ATN, RustLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Rust.g4"; }

    public get literalNames(): (string | null)[] { return RustLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustLexer.symbolicNames; }
    public get ruleNames(): string[] { return RustLexer.ruleNames; }

    public get serializedATN(): number[] { return RustLexer._serializedATN; }

    public get channelNames(): string[] { return RustLexer.channelNames; }

    public get modeNames(): string[] { return RustLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,37,232,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,0,1,1,1,
        1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
        5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,
        7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,124,8,8,1,9,1,9,1,
        9,1,9,1,9,1,9,1,9,3,9,133,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
        1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,
        1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,
        1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,28,
        1,29,1,29,1,29,1,30,1,30,1,31,1,31,1,31,1,32,1,32,5,32,191,8,32,
        10,32,12,32,194,9,32,1,33,4,33,197,8,33,11,33,12,33,198,1,34,4,34,
        202,8,34,11,34,12,34,203,1,34,1,34,1,35,1,35,1,35,1,35,5,35,212,
        8,35,10,35,12,35,215,9,35,1,35,1,35,1,36,1,36,1,36,1,36,5,36,223,
        8,36,10,36,12,36,226,9,36,1,36,1,36,1,36,1,36,1,36,1,224,0,37,1,
        1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
        14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,
        25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,
        36,73,37,1,0,5,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,
        1,0,48,57,3,0,9,10,13,13,32,32,2,0,10,10,13,13,238,0,1,1,0,0,0,0,
        3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
        1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
        1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
        1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,
        1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,
        1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,
        1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,
        1,0,0,0,1,75,1,0,0,0,3,79,1,0,0,0,5,85,1,0,0,0,7,88,1,0,0,0,9,91,
        1,0,0,0,11,96,1,0,0,0,13,103,1,0,0,0,15,109,1,0,0,0,17,123,1,0,0,
        0,19,132,1,0,0,0,21,134,1,0,0,0,23,138,1,0,0,0,25,143,1,0,0,0,27,
        145,1,0,0,0,29,147,1,0,0,0,31,149,1,0,0,0,33,151,1,0,0,0,35,153,
        1,0,0,0,37,155,1,0,0,0,39,157,1,0,0,0,41,159,1,0,0,0,43,161,1,0,
        0,0,45,163,1,0,0,0,47,165,1,0,0,0,49,167,1,0,0,0,51,170,1,0,0,0,
        53,173,1,0,0,0,55,175,1,0,0,0,57,177,1,0,0,0,59,180,1,0,0,0,61,183,
        1,0,0,0,63,185,1,0,0,0,65,188,1,0,0,0,67,196,1,0,0,0,69,201,1,0,
        0,0,71,207,1,0,0,0,73,218,1,0,0,0,75,76,5,108,0,0,76,77,5,101,0,
        0,77,78,5,116,0,0,78,2,1,0,0,0,79,80,5,99,0,0,80,81,5,111,0,0,81,
        82,5,110,0,0,82,83,5,115,0,0,83,84,5,116,0,0,84,4,1,0,0,0,85,86,
        5,102,0,0,86,87,5,110,0,0,87,6,1,0,0,0,88,89,5,105,0,0,89,90,5,102,
        0,0,90,8,1,0,0,0,91,92,5,101,0,0,92,93,5,108,0,0,93,94,5,115,0,0,
        94,95,5,101,0,0,95,10,1,0,0,0,96,97,5,114,0,0,97,98,5,101,0,0,98,
        99,5,116,0,0,99,100,5,117,0,0,100,101,5,114,0,0,101,102,5,110,0,
        0,102,12,1,0,0,0,103,104,5,119,0,0,104,105,5,104,0,0,105,106,5,105,
        0,0,106,107,5,108,0,0,107,108,5,101,0,0,108,14,1,0,0,0,109,110,5,
        108,0,0,110,111,5,111,0,0,111,112,5,111,0,0,112,113,5,112,0,0,113,
        16,1,0,0,0,114,115,5,116,0,0,115,116,5,114,0,0,116,117,5,117,0,0,
        117,124,5,101,0,0,118,119,5,102,0,0,119,120,5,97,0,0,120,121,5,108,
        0,0,121,122,5,115,0,0,122,124,5,101,0,0,123,114,1,0,0,0,123,118,
        1,0,0,0,124,18,1,0,0,0,125,126,5,110,0,0,126,127,5,117,0,0,127,133,
        5,109,0,0,128,129,5,98,0,0,129,130,5,111,0,0,130,131,5,111,0,0,131,
        133,5,108,0,0,132,125,1,0,0,0,132,128,1,0,0,0,133,20,1,0,0,0,134,
        135,5,109,0,0,135,136,5,117,0,0,136,137,5,116,0,0,137,22,1,0,0,0,
        138,139,5,110,0,0,139,140,5,117,0,0,140,141,5,108,0,0,141,142,5,
        108,0,0,142,24,1,0,0,0,143,144,5,61,0,0,144,26,1,0,0,0,145,146,5,
        59,0,0,146,28,1,0,0,0,147,148,5,58,0,0,148,30,1,0,0,0,149,150,5,
        44,0,0,150,32,1,0,0,0,151,152,5,40,0,0,152,34,1,0,0,0,153,154,5,
        41,0,0,154,36,1,0,0,0,155,156,5,123,0,0,156,38,1,0,0,0,157,158,5,
        125,0,0,158,40,1,0,0,0,159,160,5,43,0,0,160,42,1,0,0,0,161,162,5,
        45,0,0,162,44,1,0,0,0,163,164,5,42,0,0,164,46,1,0,0,0,165,166,5,
        47,0,0,166,48,1,0,0,0,167,168,5,61,0,0,168,169,5,61,0,0,169,50,1,
        0,0,0,170,171,5,33,0,0,171,172,5,61,0,0,172,52,1,0,0,0,173,174,5,
        60,0,0,174,54,1,0,0,0,175,176,5,62,0,0,176,56,1,0,0,0,177,178,5,
        60,0,0,178,179,5,61,0,0,179,58,1,0,0,0,180,181,5,62,0,0,181,182,
        5,61,0,0,182,60,1,0,0,0,183,184,5,33,0,0,184,62,1,0,0,0,185,186,
        5,45,0,0,186,187,5,62,0,0,187,64,1,0,0,0,188,192,7,0,0,0,189,191,
        7,1,0,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,
        1,0,0,0,193,66,1,0,0,0,194,192,1,0,0,0,195,197,7,2,0,0,196,195,1,
        0,0,0,197,198,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,68,1,0,
        0,0,200,202,7,3,0,0,201,200,1,0,0,0,202,203,1,0,0,0,203,201,1,0,
        0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,206,6,34,0,0,206,70,1,0,
        0,0,207,208,5,47,0,0,208,209,5,47,0,0,209,213,1,0,0,0,210,212,8,
        4,0,0,211,210,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,
        0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,217,6,35,0,0,217,72,1,
        0,0,0,218,219,5,47,0,0,219,220,5,42,0,0,220,224,1,0,0,0,221,223,
        9,0,0,0,222,221,1,0,0,0,223,226,1,0,0,0,224,225,1,0,0,0,224,222,
        1,0,0,0,225,227,1,0,0,0,226,224,1,0,0,0,227,228,5,42,0,0,228,229,
        5,47,0,0,229,230,1,0,0,0,230,231,6,36,0,0,231,74,1,0,0,0,8,0,123,
        132,192,198,203,213,224,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustLexer.__ATN) {
            RustLexer.__ATN = new antlr.ATNDeserializer().deserialize(RustLexer._serializedATN);
        }

        return RustLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustLexer.literalNames, RustLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustLexer.vocabulary;
    }

    private static readonly decisionsToDFA = RustLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}