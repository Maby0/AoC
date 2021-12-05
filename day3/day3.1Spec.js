const { gammaRate } = require('./day3.1')

describe("gammaRate", () => {
    it("outputs the correct gamma rate", () => {
        expect(gammaRate(["00", "00", "11"])).toEqual("00")
    })

    it("outputs the correct gamma rate", () => {
        expect(gammaRate(["01", "01", "11"])).toEqual("01")
    })

    it("outputs the correct gamma rate", () => {
        expect(gammaRate(["00", "01", "11"])).toEqual("01")
    })

    it("outputs the correct gamma rate", () => {
        expect(gammaRate(["11", "11", "11"])).toEqual("11")
    })
})