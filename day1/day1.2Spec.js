const { slidingCounter } = require('./day1.2')

describe("slidingCounter", () => {
    it("returns 1 when passed array with 2 possible", () => {
        expect(slidingCounter([1,2,3,4])).toEqual(1)
    })
})