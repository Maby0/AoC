const fs = require('fs')
const nSeq = fs.readFileSync('./data.txt').toString().split("\n").shift();
const boards = fs.readFileSync('./data.txt').toString().split("\n\n").slice(1).map(board => {
    return board.split("\n").map((row) => row.split(" ")).map(n => n)
})


console.log(boards)
