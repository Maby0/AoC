const { oxygenGeneratorRating, CO2ScrubberRating } = require('./day3.2')

describe('oxygenGeneratorRating', () => {
    let binArr;

    it('returns values that have the most common bit in each position', () => {
        binArr = [
            "10",
            "10",
            "10",
            "10",
            "01"
        ]
        expect(oxygenGeneratorRating(binArr)).toEqual([
            {
                index: 0,
                common: "1",
                binary: ['10', '10', '10', '10']
            },
            {
                index: 1,
                common: "0",
                binary: ['10', '10', '10', '10']
            }
        ])
    })

    it('returns values that have the most common bit in each position', () => {
        binArr = [
            "10",
            "10",
            "11",
            "11",
            "01",
            "01"
        ]
        expect(oxygenGeneratorRating(binArr)).toEqual([
            {
                index: 0,
                common: "1",
                binary: ['10', '10', '11', '11']
            },
            {
                index: 1,
                common: "1",
                binary: ['11', '11', '01', '01']
            }
        ])
    })

    it('returns values with 1 in right position if equally common', () => {
        binArr = [
            "10",
            "10",
            "10",
            "01",
            "01",
            "01"
        ]
        expect(oxygenGeneratorRating(binArr)).toEqual([
            {
                index: 0,
                common: "1",
                binary: ['10', '10', '10']
            },
            {
                index: 1,
                common: "1",
                binary: ['01', '01', '01']
            }
        ])
    })
})

describe('CO2ScrubberRating', () => {
    let binArr;

    it('returns values that have the least common bit in each position', () => {
        binArr = [
            "10",
            "10",
            "10",
            "10",
            "01"
        ]
        expect(CO2ScrubberRating(binArr)).toEqual([
            {
                index: 0,
                leastCommon: "0",
                binary: ["01"]
            },
            {
                index: 1,
                leastCommon: "1",
                binary: ["01"]
            }
        ])
    })

    it('returns values that have the least common bit in each position', () => {
        binArr = [
            "10",
            "10",
            "11",
            "11",
            "01",
            "01"
        ]
        expect(CO2ScrubberRating(binArr)).toEqual([
            {
                index: 0,
                leastCommon: "0",
                binary: ['01', '01']
            },
            {
                index: 1,
                leastCommon: "0",
                binary: ['10', '10']
            }
        ])
    })

    it('returns values with 0 in right position if equally common', () => {
        binArr = [
            "10",
            "10",
            "10",
            "01",
            "01",
            "01"
        ]
        expect(CO2ScrubberRating(binArr)).toEqual([
            {
                index: 0,
                leastCommon: "0",
                binary: ['01', '01', '01']
            },
            {
                index: 1,
                leastCommon: "0",
                binary: ['10', '10', '10']
            }
        ])
    })
})
