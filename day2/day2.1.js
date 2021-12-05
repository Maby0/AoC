const fs = require('fs');
const arr = fs.readFileSync('./data.txt').toString().split("\n");


function movementCalc(array) {
    let x = 0
    let y = 0
    array.forEach((movement) => {
        var split = movement.split(" ")
        if (split[0] === "forward") x += parseInt(split[1]);
        if (split[0] === "down") y += parseInt(split[1]);
        if (split[0] === "up") y -= parseInt(split[1]);
    })
    return [x, y, (x * y)]
}

console.log(movementCalc(arr))

module.exports = { movementCalc }