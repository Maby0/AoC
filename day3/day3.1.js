const fs = require('fs');
const arr = fs.readFileSync('./data.txt').toString().split("\n")

console.log(arr)