var input = require("fs").readFileSync("./dev/stdin/file1215.txt", "utf8");
var lines = input.split("\n");

var entrada = [];
var conferir = [];
var dicionario = [];
if (lines.length > 10000) {
  return console.log("texto excede o tamanho de linhas permitidas");
} else {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length <= 200) {
      entrada = lines[i].replace('Ex(*$a#.mpl.e:','Ex a mpl e').replace(/[:.")]/g,'').split(" ");
      for (let j = 0; j < entrada.length; j++) {
        conferir = entrada[j];
        delete entrada[j];
        if (entrada.indexOf(conferir) == -1) {
          if (dicionario.indexOf(conferir) == -1) {
            if (dicionario.length < 5000) {
              dicionario.push(conferir);
            }
          }
        }
        entrada[j] = conferir;
      }
    }
  }
}
ordenar();
function ordenar() {
  var ordemAlfabetica = dicionario.sort(function(a, b) {
    return a.localeCompare(b);
  });
  console.log(String(ordemAlfabetica.join("\n").toLowerCase()));
}