grammar SimpleLang;

prog: statement EOF;

statement
    : ifStatement
    | block
    | expression
    ;

block
    : '{' statement '}';

ifStatement
    : 'if' '(' expression ')' statement 'else' statement;

expression
    : expression op=('+'|'-') expression
    | expression op=('*'|'/') expression
    | expression op=('>'|'<'|'==') expression
    | INT
    | BOOLEAN
    | '(' expression ')'
    ;

INT: [0-9]+;
BOOLEAN: 'true' | 'false';
WS: [ \t\r\n]+ -> skip;