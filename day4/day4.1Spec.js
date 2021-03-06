const { 
    findNumberInBoards, checkIfRow, checkIfColumn, calculateScore
} = require('./day4.1')

describe('findNumberInBoards', () => {
    let board1 = [
        [
            ["1", "2"],
            ["3", "4"]
        ]
    ]

    it('changes corresponding numbers to ints', () => {
        let seq = ["1"]
        expect(findNumberInBoards(seq, board1)).toEqual([[[1, "2"], ["3", "4"]]])
    });

    it('changes corresponding numbers to ints', () => {
        let seq = ["1", "2"]
        expect(findNumberInBoards(seq, board1)).toEqual([[[1, 2],["3", "4"]]])
    })

    it('changes corresponding numbers to ints', () => {
        let seq = ["1", "2", "3"]
        expect(findNumberInBoards(seq, board1)).toEqual([[[1, 2],[3, "4"]]])
    })

    it('changes corresponding numbers to ints', () => {
        let seq = ["1", "2", "3", "4"]
        expect(findNumberInBoards(seq, board1)).toEqual([[[1, 2],[3, 4]]])
    })
});

describe('checkIfRow', () => {
    it('returns true if a row is all ints', () => {
        let boards = [
            [
                [1, 2],
                ["3", "4"]
            ]
        ]
        expect(checkIfRow(boards)).toEqual([true, 0])
    })

    it('returns true if a row is all ints', () => {
        let boards = [
            [
                ["1", "2"],
                [3, 4]
            ]
        ]
        expect(checkIfRow(boards)).toEqual([true, 0])
    })

    it('returns false if no row is all ints', () => {
        let boards = [
            [
                [1, "2"],
                ["3", "4"]
            ]
        ]
        expect(checkIfRow(boards)).toEqual([false, null])
    })
})

describe('checkIfColumn', () => {
    it('returns true if a column is all ints', () => {
        let boards = [
            [
                [1, "2"],
                [3, "4"]
            ]
        ]
        expect(checkIfColumn(boards)).toEqual([true, 0])
    })

    it('returns true if a column is all ints', () => {
        let boards = [
            [
                ["1", 2],
                ["3", 4]
            ]
        ]
        expect(checkIfColumn(boards)).toEqual([true, 0])
    })

    it('returns false if no column is all ints', () => {
        let boards = [
            [
                [1, "2"],
                ["3", "4"]
            ]
        ]
        expect(checkIfColumn(boards)).toEqual([false, null])
    })
})

describe('calculateScore', () => {
    it('calculates the score of the board', () => {
        let board = [[1, 2], ["3", "4"]]
        let num = 2;
        expect(calculateScore(board, num)).toEqual(14);
    })
})
