var input = require("fs").readFileSync("./dev/stdin/file1174.txt", "utf8");
var lines = input.split("\n");

var A = lines;
A.length = 100;

for (let i = 0; i < A.length; i++) {
  if (A[i] <= 10) {
    console.log(`A[${i}] = ${Number(A[i]).toFixed(1)}`);
  }
}
