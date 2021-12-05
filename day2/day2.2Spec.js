const { newMovementCalc } = require('./day2.2')

describe("newMovementCalc", () => {
    it("returns x, y, and multiplicated value", () => {
        expect(newMovementCalc(["forward 1"])).toEqual([1, 0, 0])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(newMovementCalc(["forward 1", "down 1"])).toEqual([1, 0, 0])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(newMovementCalc(["forward 1", "up 1"])).toEqual([1, 0, 0])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(newMovementCalc(["down 1", "forward 1"])).toEqual([1, 1, 1])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(newMovementCalc(["down 2", "forward 2"])).toEqual([2, 4, 8])
    })

    it("returns x, y, and multiplicated value", () => {
        expect(newMovementCalc(["down 4", "up 1", "forward 2"])).toEqual([2, 6, 12])
    })
})