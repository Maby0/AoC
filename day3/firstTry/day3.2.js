const fs = require('fs');
const arr = fs.readFileSync('./data.txt').toString().split("\n")
const { gammaRate, epsilonRate } = require('../day3.1')

function oxygenGeneratorRating(array) {
    let i = 0;
    let objArr = [];
    let avgArr = gammaRate(array).split("")
    avgArr.forEach((avgBin) => {
        objArr.push({
            index: i,
            common: avgArr[i],
            binary: array.filter((binary) => {
                return binary.charAt(i) === avgBin;
            })
        })
        i ++;
    })
    console.log(objArr)
    return objArr
}

function CO2ScrubberRating(array) {
    let i = 0;
    let objArr = [];
    let avgArr = epsilonRate(array).split("")
    avgArr.forEach((avgBin) => {
        objArr.push({
            index: i,
            leastCommon: avgArr[i],
            binary: array.filter((binary) => {
                return binary.charAt(i) === avgBin;
            })
        })
        i ++;
    })
    console.log(objArr)
    return objArr
}

module.exports = { oxygenGeneratorRating, CO2ScrubberRating }