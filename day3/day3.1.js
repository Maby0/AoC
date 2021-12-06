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
    return _checkPosNegGamma(binarr)
}

function epsilonRate(array) {
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
    return _checkPosNegEpsilon(binarr)
}

function binaryToDecimal(binStr) {
    return parseInt(binStr, 2)
}

function _checkPosNegGamma(array) {
    return array.map(n => {
        if (parseInt(n) >= 0) return "1"
        if (parseInt(n) < 0) return "0"
    }).join("")
}

function _checkPosNegEpsilon(array) {
    return array.map(n => {
        if (parseInt(n) >= 0) return "0"
        if (parseInt(n) < 0) return "1"
    }).join("")
}

let gammaRateCalc = gammaRate(arr)
let epsilonRateCalc = epsilonRate(arr)

    // console.log(gammaRateCalc)
    // console.log(binaryToDecimal(gammaRate(arr)))
    // console.log(epsilonRateCalc)
    // console.log(binaryToDecimal(epsilonRate(arr)))

    // console.log("FINAL ANSWER ==== " + binaryToDecimal(gammaRateCalc) * binaryToDecimal(epsilonRateCalc))

module.exports = { gammaRate, epsilonRate, binaryToDecimal }