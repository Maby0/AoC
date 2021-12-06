const { oxygenGeneratorRating, CO2ScrubberRating } = require('./day3.2')

describe('oxygenGeneratorRating', () => {
    let binArr;

    it('returns one binary number after filtering for most common bit', () => {
        binArr = ["10", "11", "01"]
        expect(oxygenGeneratorRating(binArr)).toEqual("11")
    })

    it('returns one binary number after filtering for most common bit', () => {
        binArr = ["100", "110", "111", "101", "010"]
        expect(oxygenGeneratorRating(binArr)).toEqual("111")
    })
})

describe('CO2ScrubberRating', () => {
    let binArr;

    it('returns one binary number after filtering for least common bit', () => {
        binArr = ["10", "11", "01"]
        expect(CO2ScrubberRating(binArr)).toEqual("01")
    })

    it('returns one binary number after filtering for least common bit', () => {
        binArr = ["100", "110", "111", "101", "010"]
        expect(CO2ScrubberRating(binArr)).toEqual("010")
    })
})
