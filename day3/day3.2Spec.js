const { oxygenGeneratorRating } = require('./day3.2')

describe('oxygenGeneratorRating', () => {
    let binArr;

    it('returns values with 0 in right position if equally common', () => {
        binArr = ["10", "11", "01"]
        expect(oxygenGeneratorRating(binArr)).toEqual("11")
    })
})
