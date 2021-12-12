const fs = require('fs')
const nSeq = fs.readFileSync('./data.txt').toString().split("\n").shift().split(",");
const boards = fs.readFileSync('./data.txt').toString().split("\n\n").slice(1).map(board => {
    return board.split("\n").map((row) => row.split(" ")).map(n => n)
})

function findNumberInBoards(sequence, boards) {
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
    return newSet
}

function checkIfRow(boards) {
    let check = false;
    boards.forEach(board => {
        board.forEach(row => {
            if (row.every(function(n) { return Number.isInteger(n)})) check = true;
        })
    })
    return check
}

function checkIfColumn(boards) {
    let check = false;
    let checkArr;
    boards.forEach(board => {
        for (i = 0; i < board[0].length; i++) {
            checkArr = [];
            board.forEach(row => {
                checkArr.push(Number.isInteger(row[i]))
            })
            if (checkArr.every(el => el === true)) check = true;
        }
    })
    return check;
}

// console.log(nSeq)
// console.log(boards)
module.exports = { findNumberInBoards, checkIfRow, checkIfColumn }

