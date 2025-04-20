grammar Rust;

// Keywords
LET: 'let';
CONST: 'const';
FN: 'fn';
IF: 'if';
IFEXR: 'ifexpr';
ELSE: 'else';
RETURN: 'return';
WHILE: 'while';
LOOP: 'loop';
BOOL: 'true' | 'false';
TYPE: 'num' | 'bool' | 'string' | '&' TYPE;
MUT: 'mut';
NULL: 'null';

// Operators and Symbols
ASSIGN: '=';
SEMI: ';';
COLON: ':';
COMMA: ',';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
PLUS: '+';
MINUS: '-';
STAR: '*';
SLASH: '/';
EQ: '==';
NEQ: '!=';
LT: '<';
GT: '>';
LEQ: '<=';
GEQ: '>=';
NOT: '!';
ARROW: '->';
AMP: '&';

// Identifiers and Literals
IDENT: [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER: [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)?;
STRING_LITERAL: '"' ( ~["\\\r\n] | '\\' . )* '"';
WHITESPACE: [ \t\r\n]+ -> skip; // Ignore whitespace
LINE_COMMENT : '//' ~[\r\n]* -> skip ;  // Single-line comments
BLOCK_COMMENT : '/*' .*? '*/' -> skip ; // Multi-line comments (non-greedy)

program: statement* EOF;

statement:
      constantDeclaration
    | variableDeclaration
    | functionDeclaration
    | pointerVariableAssignment
    | variableAssignment
    | expressionStatement
    | blockStatement
    | ifStatement
    | whileLoop
    | returnStatement
    ;

functionDeclaration: FN IDENT LPAREN parameters? RPAREN returnType blockStatement; //Type check added

pointerVariableAssignment: STAR IDENT ASSIGN expression SEMI;

variableAssignment: IDENT ASSIGN expression SEMI; //Type check added

parameters: IDENT typeAnnotation (COMMA IDENT typeAnnotation)*;

returnType: ARROW TYPE; //Type check added

constantDeclaration: CONST IDENT primitiveTypeAnnotation ASSIGN expression SEMI; //Type check added

variableDeclaration: LET (MUT) IDENT primitiveTypeAnnotation ASSIGN expression SEMI; //Type check added

blockStatement: LBRACE statement* RBRACE; // Type check added

expressionStatement: expression SEMI; //Type check added

expression:
      NUMBER
    | BOOL
    | IDENT
    | STRING_LITERAL
    | functionCall
    | STAR* IDENT
    | (MINUS | NOT | AMP | AMP MUT) expression
    | expression (STAR | SLASH) expression
    | expression (PLUS | MINUS) expression
    | expression (EQ | GEQ | GT | LT | LEQ | NEQ) expression
    | LPAREN expression RPAREN
    | ifExpression
    ; // Type check added

// return statement
returnStatement: RETURN expression SEMI; //Type checked added

// Function call
functionCall: functionName LPAREN arguments? RPAREN; // Type check added

functionName: IDENT;

arguments: expression (COMMA expression)*;

// while loop
whileLoop: WHILE expression blockStatement; // Type check added

// If statement
ifStatement: IF expression conseqStatement (ELSE altStatement)?;

// IF expression
ifExpression: IF expression LBRACE expression RBRACE ELSE altExpression;

altExpression: ifExpression | LBRACE expression RBRACE;

conseqStatement: blockStatement;

altStatement: blockStatement | ifStatement;

//Valid types
primitiveTypeAnnotation: COLON TYPE; //Type check added

typeAnnotation: COLON validType; //Type check added

validType: TYPE | LPAREN (validParamType)? RPAREN ARROW validType; //Type check added

validParamType: TYPE (COMMA TYPE)*;
