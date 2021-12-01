const { arr } = require('./data')

function slidingCounter(array) {
    let i = 0;
    let nest = [];
    while (i <= array.length - 3) {
        nest.push([array[i], array[i+1], array[i+2]])
        i++;
    }
    let i2 = 1;
    let c = 0;
    nest.forEach((nested) => {
        if (nest[i2]) {
            if (sumArr(nested) < sumArr(nest[i2])) c++;
            i2++;
        }   
    })
    return c
}

function sumArr(array) {
    return array.reduce((a, b) => a + b, 0)
}

console.log(slidingCounter(arr))
module.exports = { slidingCounter }