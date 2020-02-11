var input = require("fs").readFileSync("./dev/stdin/file1241.txt", "utf8");
var lines = input.split("\n");

var indice = lines.shift();

for (let i = 0; i < indice; i++) {
  [a, b] = lines.shift().split(" ");
  console.log(a.substr(a.length - b.length) == b ? "encaixa" : "nao encaixa");
}
