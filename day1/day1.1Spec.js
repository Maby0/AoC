const { counter } = require('./day1.1')

describe("day1", () => {
    it("increases c by 1", () => {
        expect(counter([1,2])).toEqual(1)
    })
    it("increases c by 1 ", () => {
        expect(counter([1,2,1])).toEqual(1);
    })
})