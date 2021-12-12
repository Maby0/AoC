const { 
    findNumberInBoards, checkIfRow, checkIfColumn 
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
        expect(checkIfRow(boards)).toEqual(true)
    })

    it('returns false if no row is all ints', () => {
        let boards = [
            [
                [1, "2"],
                ["3", "4"]
            ]
        ]
        expect(checkIfRow(boards)).toEqual(false)
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
        expect(checkIfColumn(boards)).toEqual(true)
    })

    it('returns true if a column is all ints', () => {
        let boards = [
            [
                [1, "2"],
                ["3", "4"]
            ]
        ]
        expect(checkIfColumn(boards)).toEqual(false)
    })
})
