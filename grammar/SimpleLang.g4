grammar SimpleLang;

prog: statement EOF;

statement
    : ifStatement
    | block
    | expression
    ;

block
    : '{' statement '}'

ifStatement
    : 'if' '(' expression ')' statement 'else' statement;

expression
    : expression op=('+'|'-') expression
    | expression op=('*'|'/') expression
    | INT
    | '(' expression ')'
    ;

INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;