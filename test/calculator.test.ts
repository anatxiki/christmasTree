import Calculator from '../src/calculator'

describe('Calculator', () => {
    const calculator = new Calculator()

    it('should add two numbers', () => {
        expect(calculator.add(1, 2)).toEqual(3)
    })

    it('should multiply two numbers', () => {
        expect(calculator.multiply(1, 2)).toEqual(2)
    })
})
