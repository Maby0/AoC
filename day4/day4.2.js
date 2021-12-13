const fs = require('fs')
const nSeq = fs.readFileSync('./data.txt').toString().split("\n").shift().split(",");
const boards = fs.readFileSync('./data.txt').toString().split("\n\n").slice(1).map(board => {
    return board.split("\n").map((row) => {
        return row.replace(/\s+/g,' ').trim().split(" ")
    })
})

function findNumberInBoards(sequence, boards) {
    let newSet = boards;
    let score;
    let winArr = [];
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
        row.forEach(winningBoard => {
            console.log("I GET HERE")
            if (winningBoard.win && !winArr.some(winners => winners.boardIndex === winningBoard.boardIndex)) {
                score = calculateScore(newSet[winningBoard.boardIndex], sequence[i])
                winArr.push({boardIndex: winningBoard.boardIndex, boardScore: score})
            }
        })
        column.forEach(winningBoard => {
            console.log("I GET HERE TOO")
            if (winningBoard.win && !winArr.some(winners => winners.boardIndex === winningBoard.boardIndex)) {
                score = calculateScore(newSet[winningBoard.boardIndex], sequence[i])
                winArr.push({boardIndex: winningBoard.boardIndex, boardScore: score})
            }
        })
        
    }
    console.log(winArr)
    return winArr
}

function checkIfRow(boards) {
    let check = false;
    let boardIndex = null;
    let winningBoards = [];
    boards.forEach(board => {
        board.forEach(row => {
            if (row.every(function(n) { return Number.isInteger(n) })) {
                check = true;
                boardIndex = boards.indexOf(board);
                winningBoards.push({win: check, boardIndex: boardIndex})
            }
        })
    })
    console.log(winningBoards)
    return winningBoards
}

function checkIfColumn(boards) {
    let check = false;
    let boardIndex = null;
    let checkArr;
    let winningBoards = [];
    boards.forEach(board => {
        for (let i = 0; i < board[0].length; i++) {
            checkArr = [];
            board.forEach(row => {
                checkArr.push(Number.isInteger(row[i]))
            })
            if (checkArr.every(el => el === true)) {
                check = true;
                boardIndex = boards.indexOf(board)
                winningBoards.push({win: check, boardIndex: boardIndex})
            }
        }
    })
    return winningBoards;
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

// console.log(findNumberInBoards(nSeq, boards))

module.exports = { findNumberInBoards, checkIfRow, checkIfColumn, calculateScore }

