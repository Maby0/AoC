const { 
    findNumberInBoards, checkIfRow, checkIfColumn, calculateScore
} = require('./day4.2')

describe('findNumberInBoards', () => {
    let boards = [
        [
            ["1", "2"],
            ["4", "5"]
        ],
        [
            ["1", "5"],
            ["3", "6"]
        ],
        [
            ["2", "3"],
            ["7", "6"]
        ]
    ]

    let seq = ["1", "2", "3"]

    iit('returns an array of winning boards', () => {
        expect(findNumberInBoards(seq, boards)).toEqual([
            {boardIndex: 0, boardScore: 18}, 
            {boardIndex: 2, boardScore: 39},
            {boardIndex: 1, boardScore: 33}
        ])
    })
})