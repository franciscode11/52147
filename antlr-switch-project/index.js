import fs from "fs";
import antlr4 from "antlr4";

import SegunLexer from "./generated/SegunLexer.js";
import SegunParser from "./generated/SegunParser.js";
import CustomSegunVisitor from "./CustomSegunVisitor.js";

async function main() {
  let input;
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch {
    console.error("No se encontró input.txt");
    return;
  }

  const inputStream = new antlr4.InputStream(input);
  const lexer = new SegunLexer(inputStream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  tokens.fill();

  const parser = new SegunParser(tokens);
  const tree = parser.prog();

  if (parser._syntaxErrors > 0) {
    console.error("Error de sintaxis");
    return;
  }

  console.log("Entrada válida.\n");

  // Tabla de tokens y lexemas
  console.log("Tabla de tokens:");
  console.log("LEXEMA".padEnd(24) + "TOKEN");
  tokens.tokens
    .filter((t) => t.type > 0)
    .forEach((t) => {
      const name = parser.symbolicNames[t.type];
      console.log(t.text.trim().padEnd(24) + name);
    });

  // Árbol de derivación
  console.log("\nÁrbol de derivación:");
  console.log(tree.toStringTree(parser.ruleNames));
  console.log("");

  // Traducción a JS
  const visitor = new CustomSegunVisitor();
  const transpilado = await visitor.visit(tree);

  console.log("Código traducido a JavaScript:\n");
  console.log(transpilado.join("\n"));

  // Ejecución
  console.log("\nResultado de la ejecución:");
  try {
    eval(transpilado.join("\n"));
  } catch (e) {
    console.error("Error al ejecutar:", e.message);
  }
}

main();
