import SegunVisitor from "./generated/SegunVisitor.js";

export default class CustomSegunVisitor extends SegunVisitor {
  constructor() {
    super();
    this.transpilado = [];
    this.salida = [];
  }

  visitProg(ctx) {
    for (let stat of ctx.stat()) {
      const codigoJS = this.visit(stat);
      if (codigoJS) this.transpilado.push(codigoJS);
    }
    return this.transpilado;
  }

  visitSentencia_segun(ctx) {
    const valor = this.visit(ctx.expr());
    const jsSwitch = [`switch (${this._toJSValue(valor)}) {`];

    const casos = ctx.bloque_caso();
    for (let caso of casos) {
      const caseVal = this.visit(caso.constante());
      const body = this.visit(caso.sentencia());

      jsSwitch.push(`  case ${this._toJSValue(caseVal)}:`);
      jsSwitch.push(this._indent(body));
    }

    const defecto = ctx.bloque_caso_defecto();
    if (defecto) {
      const defBody = this.visit(defecto.sentencia());
      jsSwitch.push("  default:");
      jsSwitch.push(this._indent(defBody));
    }

    jsSwitch.push("}");
    return jsSwitch.join("\n");
  }

  visitExpr(ctx) {
    return this.visit(ctx.constante());
  }

  visitConstante(ctx) {
    if (ctx.NUMERO()) return Number(ctx.NUMERO().getText());
    if (ctx.CADENA()) return ctx.CADENA().getText().slice(1, -1);
  }

  visitSentencia(ctx) {
    const sentencias = ctx.children
      .map((child) => this.visit(child))
      .filter(Boolean);
    return sentencias.join("\n");
  }

  visitSalida(ctx) {
    const texto = ctx.CADENA().getText().slice(1, -1);
    this.salida.push(texto);
    return `console.log(${JSON.stringify(texto)});`;
  }

  visitTerminar(ctx) {
    return "break;";
  }

  _toJSValue(val) {
    return typeof val === "number" ? val : JSON.stringify(val);
  }

  _indent(code) {
    return code
      .split("\n")
      .map((line) => "    " + line)
      .join("\n");
  }
}
