var input = require("fs").readFileSync("./dev/stdin/file1244.txt", "utf8");
var lines = input.split("\n");

const N = lines.shift();
var ordem = "";
for (var i = 0; i < N; i++) {
  comparar(lines[i].replace(/[\r,]/g, " ").split(" "));
}
function comparar(linha) {
  ordem += linha.sort(function(b, a) {
    a.length < b.length?-1:a.length>b.length?1:0;
    return 0

  });
}
console.log(ordem.replace(/[,\r]/g,' '));
