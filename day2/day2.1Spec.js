const { movementCalc } = require('./day2.1')

describe("movementCalc", () => {
    it("returns x, y, and multiplicated value", () => {
        expect(movementCalc(["forward 1"])).toEqual([1, 0, 0])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(movementCalc(["forward 1", "down 1"])).toEqual([1, 1, 1])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(movementCalc(["forward 1", "up 1"])).toEqual([1, -1, -1])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(movementCalc(["forward 1", "down 1", "up 1"])).toEqual([1, 0, 0])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(movementCalc(["forward 2", "down 2", "up 1"])).toEqual([2, 1, 2])
    })
})