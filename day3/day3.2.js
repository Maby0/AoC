const fs = require('fs');
const arr = fs.readFileSync('./data.txt').toString().split("\n")
const { gammaRate, epsilonRate, binaryToDecimal } = require('./day3.1')

function oxygenGeneratorRating(array) {
    let i = 0;
    let filterArr = array;
    while (filterArr.length !== 1) {
        let avgBin = gammaRate(filterArr).split("")
        filterArr = filterArr.filter(binary => {
            return binary.charAt(i) === avgBin[i]
        })
        i++;
    }
    console.log(filterArr)
    return filterArr[0]
}

function CO2ScrubberRating(array) {
    let i = 0;
    let filterArr = array;
    while (filterArr.length !== 1) {
        let avgBin = epsilonRate(filterArr).split("");
        filterArr = filterArr.filter(binary => {
            return binary.charAt(i) === avgBin[i]
        })
        i++;
    }
    console.log(filterArr);
    return filterArr[0];
}

console.log(oxygenGeneratorRating(arr) + " = " + binaryToDecimal(oxygenGeneratorRating(arr)))
console.log(CO2ScrubberRating(arr) + " = " + binaryToDecimal(CO2ScrubberRating(arr)))
console.log(3597*1389)
module.exports = { oxygenGeneratorRating, CO2ScrubberRating }