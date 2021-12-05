const fs = require('fs');
const arr = fs.readFileSync('./data.txt').toString().split("\n")

function gammaRate(array) {
    let binarr = []
    for (var n = 1; n <= array[0].length; n++) {
        binarr.push(0);
    }
    let i;
    array.forEach(binary => {
        i = 0;
        binary.split("").forEach(n =>{
            if (n === "0") binarr[i] --;
            if (n === "1") binarr[i] ++;
            i++;
        })
    });
    return _checkPosNeg(binarr)
}

function _checkPosNeg(array) {
    return array.map(n => {
        if (parseInt(n) > 0) return "1"
        if (parseInt(n) < 0) return "0"
    }).join("")
}

console.log(gammaRate(arr))

module.exports = { gammaRate }