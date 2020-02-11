var input = require("fs").readFileSync("./dev/stdin/file1172.txt", "utf8");
var lines = input.split("\n");


var X = lines;
X.length = 10;
for (let i = 0; i < X.length; i++) {    
    if(X[i] <= 0){
        X[i]=1
    }
    console.log(`X[${i}] = ${Number(X[i])}`)
}