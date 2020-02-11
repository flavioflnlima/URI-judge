var input = require("fs").readFileSync("./dev/stdin/file1215.txt", "utf8");
var lines = input.split("\n");
var entrada = [];
var conferir = [];
var dicionario = [];
if (lines.length <= 10000) {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length <= 200) {
      entrada = lines[i]
        .replace("Ex(*$a#.mpl.e:", "Ex a mpl e")
        .replace(/[\\\r:.")]/g, "")
        .split(" ");
        conferir = entrada[i];
        delete entrada[i];
        verificar(entrada)
    }
  }
}
function verificar(conferir) {
  entrada.indexOf(conferir) == -1?dicionario.push(conferir):''
}
console.log('Dicionario -- '+dicionario.join('\n'));
//ordenar();
function ordenar() {
  var ordemAlfabetica = dicionario.sort(function(a, b) {
    return a.localeCompare(b);
  });
  console.log(String(ordemAlfabetica.join("\n").toLowerCase()));
}

/**
 * 
 * for (let j = 0; j < entrada.length; j++) {
        conferir = entrada[j];
        delete entrada[j];
        if (entrada.indexOf(conferir) == -1) {
          if (dicionario.indexOf(conferir) == -1) {
            
          }
        }
      }
 */
