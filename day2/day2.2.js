const fs = require('fs')
const arr = fs.readFileSync('./data.txt').toString().split("\n")

function newMovementCalc(array) {
    let [x, y, a] = [0, 0, 0];
    array.forEach((movement) => {
        let split = movement.split(" ")
        if(split[0] === "forward") {
            x += parseInt(split[1])
            y += a * parseInt(split[1])
        };
        if(split[0] === "down") a += parseInt(split[1]);
        if(split[0] === "up") a -= parseInt(split[1]);
    })
    return [x, y, x * y]
}

console.log(newMovementCalc(arr))
module.exports = { newMovementCalc }