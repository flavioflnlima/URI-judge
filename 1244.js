var input = require("fs").readFileSync("./dev/stdin/file1244.txt", "utf8");
var lines = input.split("\n");
var ordenada = "";

const N = lines.shift();
var ordem = "";
for (var i = 0; i < N; i++) {
  comparar(lines[i].replace(/[\r,]/g, " ").split(" "));
}
function comparar(linha) {
  ordem += linha.sort(function(b, a) {
    if (a.length < b.length) return -1;
  });
}
console.log(ordem.replace(/[,\r]/g,' '));
//ordenada += linha+'\n';
//console.log(String(ordenada.replace(/[\r,]/g, " ")));
