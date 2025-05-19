grammar Segun;

prog: stat+;

stat: sentencia_segun;

sentencia_segun:
  SEGUN expr HACER LBRACE bloque_caso* bloque_caso_defecto? RBRACE FINSEGUN;

bloque_caso: CASO constante DOSPUNTOS LBRACE sentencia RBRACE;

bloque_caso_defecto: DEFECTO DOSPUNTOS LBRACE sentencia RBRACE;

sentencia: (salida | terminar)+;

salida: SALIDA LPAREN CADENA RPAREN PUNTOCOMA;

terminar: SALIR PUNTOCOMA;

expr: constante;

constante: CADENA | NUMERO;

// ----------- LÉXICO ---------------

SEGUN: 'segun';
HACER: 'hacer';
FINSEGUN: 'finsegun';
CASO: 'caso';
DEFECTO: 'defecto';
SALIDA: 'imprimir';
SALIR: 'salir';

NUMERO: [0-9]+;
CADENA: '"' (~["\\])* '"';

DOSPUNTOS: ':';
PUNTOCOMA: ';';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';

WS: [ \t\r\n]+ -> skip;
