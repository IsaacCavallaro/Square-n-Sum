const squareNsum = require('./squareNsum')

const arrTest = [1,2,2];
const arrTest2 = [2,4,6];

describe("squareNsum tests", () => {
    test('should square numbers in array and return sum', () => {
        expect(squareNsum(arrTest)).toBe(9)
        expect(squareNsum(arrTest2)).toBe(56)
    })
})


