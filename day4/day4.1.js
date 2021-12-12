const fs = require('fs')
const nSeq = fs.readFileSync('./data.txt').toString().split("\n").shift().split(",");
const boards = fs.readFileSync('./data.txt').toString().split("\n\n").slice(1).map(board => {
    return board.split("\n").map((row) => {
        return row.replace(/\s+/g,' ').trim().split(" ")
    })
})
console.log(boards)
console.log(nSeq)

function findNumberInBoards(sequence, boards) {
    let newSet = boards;
    let score;
    for (let i = 0; i < sequence.length; i++) {
        newSet = newSet.map(board => {
            return board.map(row => {
                return row.map(n => {
                    if (n === sequence[i]) {
                        return parseInt(n);
                    } else {
                        return n
                    }
                })
            })
        })
        let row = checkIfRow(newSet)
        let column = checkIfColumn(newSet)
        if (row[0]) {
            score = calculateScore(newSet[row[1]], sequence[i])
            break;
        } else if (column[0]) {
            score = calculateScore(newSet[column[1]], sequence[i])
            break;
        }
    }
    return score
}

function checkIfRow(boards) {
    let check = false;
    let boardIndex = null;
    boards.forEach(board => {
        board.forEach(row => {
            if (row.every(function(n) { return Number.isInteger(n) })) {
                check = true;
                boardIndex = boards.indexOf(board);
            }
        })
    })
    return [check, boardIndex]
}

function checkIfColumn(boards) {
    let check = false;
    let boardIndex = null;
    let checkArr;
    boards.forEach(board => {
        for (i = 0; i < board[0].length; i++) {
            checkArr = [];
            board.forEach(row => {
                checkArr.push(Number.isInteger(row[i]))
            })
            if (checkArr.every(el => el === true)) {
                check = true;
                boardIndex = boards.indexOf(board)
            }
        }
    })
    return [check, boardIndex];
}

function calculateScore(board, num) {
    let counter = 0;
    board.forEach(row => {
        row.forEach(n => {
            if (n === n.toString()) counter += parseInt(n);
        })
    })
    return counter * num;
}

console.log(findNumberInBoards(nSeq, boards))

module.exports = { findNumberInBoards, checkIfRow, checkIfColumn, calculateScore }

