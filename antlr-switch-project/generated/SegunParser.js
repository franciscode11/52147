// Generated from c://Users//valle//Downloads//52147//antlr-switch-project//Segun.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SegunListener from './SegunListener.js';
import SegunVisitor from './SegunVisitor.js';

const serializedATN = [4,1,16,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,5,2,33,8,2,10,2,12,2,36,9,2,1,2,3,2,39,8,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,4,5,59,
8,5,11,5,12,5,60,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,
0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,8,9,70,0,21,1,0,0,0,2,25,1,0,0,0,
4,27,1,0,0,0,6,43,1,0,0,0,8,50,1,0,0,0,10,58,1,0,0,0,12,62,1,0,0,0,14,68,
1,0,0,0,16,71,1,0,0,0,18,73,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,
0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,26,3,4,2,0,26,3,1,0,0,
0,27,28,5,1,0,0,28,29,3,16,8,0,29,30,5,2,0,0,30,34,5,14,0,0,31,33,3,6,3,
0,32,31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,38,1,0,0,0,
36,34,1,0,0,0,37,39,3,8,4,0,38,37,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,
41,5,15,0,0,41,42,5,3,0,0,42,5,1,0,0,0,43,44,5,4,0,0,44,45,3,18,9,0,45,46,
5,10,0,0,46,47,5,14,0,0,47,48,3,10,5,0,48,49,5,15,0,0,49,7,1,0,0,0,50,51,
5,5,0,0,51,52,5,10,0,0,52,53,5,14,0,0,53,54,3,10,5,0,54,55,5,15,0,0,55,9,
1,0,0,0,56,59,3,12,6,0,57,59,3,14,7,0,58,56,1,0,0,0,58,57,1,0,0,0,59,60,
1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,11,1,0,0,0,62,63,5,6,0,0,63,64,5,
12,0,0,64,65,5,9,0,0,65,66,5,13,0,0,66,67,5,11,0,0,67,13,1,0,0,0,68,69,5,
7,0,0,69,70,5,11,0,0,70,15,1,0,0,0,71,72,3,18,9,0,72,17,1,0,0,0,73,74,7,
0,0,0,74,19,1,0,0,0,5,23,34,38,58,60];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SegunParser extends antlr4.Parser {

    static grammarFileName = "Segun.g4";
    static literalNames = [ null, "'segun'", "'hacer'", "'finsegun'", "'caso'", 
                            "'defecto'", "'imprimir'", "'salir'", null, 
                            null, "':'", "';'", "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "SEGUN", "HACER", "FINSEGUN", "CASO", 
                             "DEFECTO", "SALIDA", "SALIR", "NUMERO", "CADENA", 
                             "DOSPUNTOS", "PUNTOCOMA", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "WS" ];
    static ruleNames = [ "prog", "stat", "sentencia_segun", "bloque_caso", 
                         "bloque_caso_defecto", "sentencia", "salida", "terminar", 
                         "expr", "constante" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SegunParser.ruleNames;
        this.literalNames = SegunParser.literalNames;
        this.symbolicNames = SegunParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SegunParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.stat();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SegunParser.RULE_stat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.sentencia_segun();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia_segun() {
	    let localctx = new Sentencia_segunContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SegunParser.RULE_sentencia_segun);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(SegunParser.SEGUN);
	        this.state = 28;
	        this.expr();
	        this.state = 29;
	        this.match(SegunParser.HACER);
	        this.state = 30;
	        this.match(SegunParser.LBRACE);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 31;
	            this.bloque_caso();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 37;
	            this.bloque_caso_defecto();
	        }

	        this.state = 40;
	        this.match(SegunParser.RBRACE);
	        this.state = 41;
	        this.match(SegunParser.FINSEGUN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque_caso() {
	    let localctx = new Bloque_casoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SegunParser.RULE_bloque_caso);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(SegunParser.CASO);
	        this.state = 44;
	        this.constante();
	        this.state = 45;
	        this.match(SegunParser.DOSPUNTOS);
	        this.state = 46;
	        this.match(SegunParser.LBRACE);
	        this.state = 47;
	        this.sentencia();
	        this.state = 48;
	        this.match(SegunParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque_caso_defecto() {
	    let localctx = new Bloque_caso_defectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SegunParser.RULE_bloque_caso_defecto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(SegunParser.DEFECTO);
	        this.state = 51;
	        this.match(SegunParser.DOSPUNTOS);
	        this.state = 52;
	        this.match(SegunParser.LBRACE);
	        this.state = 53;
	        this.sentencia();
	        this.state = 54;
	        this.match(SegunParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SegunParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 58;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 6:
	                this.state = 56;
	                this.salida();
	                break;
	            case 7:
	                this.state = 57;
	                this.terminar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 60; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6 || _la===7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SegunParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(SegunParser.SALIDA);
	        this.state = 63;
	        this.match(SegunParser.LPAREN);
	        this.state = 64;
	        this.match(SegunParser.CADENA);
	        this.state = 65;
	        this.match(SegunParser.RPAREN);
	        this.state = 66;
	        this.match(SegunParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SegunParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(SegunParser.SALIR);
	        this.state = 69;
	        this.match(SegunParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SegunParser.RULE_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.constante();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SegunParser.RULE_constante);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SegunParser.EOF = antlr4.Token.EOF;
SegunParser.SEGUN = 1;
SegunParser.HACER = 2;
SegunParser.FINSEGUN = 3;
SegunParser.CASO = 4;
SegunParser.DEFECTO = 5;
SegunParser.SALIDA = 6;
SegunParser.SALIR = 7;
SegunParser.NUMERO = 8;
SegunParser.CADENA = 9;
SegunParser.DOSPUNTOS = 10;
SegunParser.PUNTOCOMA = 11;
SegunParser.LPAREN = 12;
SegunParser.RPAREN = 13;
SegunParser.LBRACE = 14;
SegunParser.RBRACE = 15;
SegunParser.WS = 16;

SegunParser.RULE_prog = 0;
SegunParser.RULE_stat = 1;
SegunParser.RULE_sentencia_segun = 2;
SegunParser.RULE_bloque_caso = 3;
SegunParser.RULE_bloque_caso_defecto = 4;
SegunParser.RULE_sentencia = 5;
SegunParser.RULE_salida = 6;
SegunParser.RULE_terminar = 7;
SegunParser.RULE_expr = 8;
SegunParser.RULE_constante = 9;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_stat;
    }

	sentencia_segun() {
	    return this.getTypedRuleContext(Sentencia_segunContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Sentencia_segunContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_sentencia_segun;
    }

	SEGUN() {
	    return this.getToken(SegunParser.SEGUN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	HACER() {
	    return this.getToken(SegunParser.HACER, 0);
	};

	LBRACE() {
	    return this.getToken(SegunParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(SegunParser.RBRACE, 0);
	};

	FINSEGUN() {
	    return this.getToken(SegunParser.FINSEGUN, 0);
	};

	bloque_caso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Bloque_casoContext);
	    } else {
	        return this.getTypedRuleContext(Bloque_casoContext,i);
	    }
	};

	bloque_caso_defecto() {
	    return this.getTypedRuleContext(Bloque_caso_defectoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterSentencia_segun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitSentencia_segun(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitSentencia_segun(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Bloque_casoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_bloque_caso;
    }

	CASO() {
	    return this.getToken(SegunParser.CASO, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	DOSPUNTOS() {
	    return this.getToken(SegunParser.DOSPUNTOS, 0);
	};

	LBRACE() {
	    return this.getToken(SegunParser.LBRACE, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	RBRACE() {
	    return this.getToken(SegunParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterBloque_caso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitBloque_caso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitBloque_caso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Bloque_caso_defectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_bloque_caso_defecto;
    }

	DEFECTO() {
	    return this.getToken(SegunParser.DEFECTO, 0);
	};

	DOSPUNTOS() {
	    return this.getToken(SegunParser.DOSPUNTOS, 0);
	};

	LBRACE() {
	    return this.getToken(SegunParser.LBRACE, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	RBRACE() {
	    return this.getToken(SegunParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterBloque_caso_defecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitBloque_caso_defecto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitBloque_caso_defecto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminarContext);
	    } else {
	        return this.getTypedRuleContext(TerminarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_salida;
    }

	SALIDA() {
	    return this.getToken(SegunParser.SALIDA, 0);
	};

	LPAREN() {
	    return this.getToken(SegunParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(SegunParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(SegunParser.RPAREN, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(SegunParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(SegunParser.SALIR, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(SegunParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_expr;
    }

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_constante;
    }

	CADENA() {
	    return this.getToken(SegunParser.CADENA, 0);
	};

	NUMERO() {
	    return this.getToken(SegunParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitConstante(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitConstante(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SegunParser.ProgContext = ProgContext; 
SegunParser.StatContext = StatContext; 
SegunParser.Sentencia_segunContext = Sentencia_segunContext; 
SegunParser.Bloque_casoContext = Bloque_casoContext; 
SegunParser.Bloque_caso_defectoContext = Bloque_caso_defectoContext; 
SegunParser.SentenciaContext = SentenciaContext; 
SegunParser.SalidaContext = SalidaContext; 
SegunParser.TerminarContext = TerminarContext; 
SegunParser.ExprContext = ExprContext; 
SegunParser.ConstanteContext = ConstanteContext; 
