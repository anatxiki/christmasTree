import christmasTree from '../src/christmasTree'

describe('Christmas Tree', () => {

    it('should return error message if height is below 0', () => {
        expect(christmasTree(-1)).toEqual("Can't make a tree with negative height, please try with a positive value.")
    })

    it('should print 1 star when height is 1', () => {
        expect(christmasTree(1)).toEqual('*\n')
    })

    it('should print a 2 step tree if height is 2', () => {
        expect(christmasTree(2)).toEqual(' *\n***\n')
    })

})
