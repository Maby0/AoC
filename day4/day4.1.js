const fs = require('fs')
const nSeq = fs.readFileSync('./data.txt').toString().split("\n").shift().split(",");
const boards = fs.readFileSync('./data.txt').toString().split("\n\n").slice(1).map(board => {
    return board.split("\n").map((row) => row.split(" ")).map(n => n)
})

function findNumberInBoards(sequence, boards) {
    let i = 0;
    let newSet = boards;
    sequence.forEach(number => {
        newSet = newSet.map(board => {
            return board.map(row => {
                return row.map(n => {
                    if (n === number) {
                        return parseInt(n);
                    } else {
                        return n
                    }
                })
            })
        })
    })
    console.log(newSet)
    return newSet
}

// console.log(nSeq)
// console.log(boards)
module.exports = { findNumberInBoards }

