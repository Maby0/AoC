const { findNumberInBoards } = require('./day4.1')

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

// describe('checkIfRow', () => {
//     it('')
// })
