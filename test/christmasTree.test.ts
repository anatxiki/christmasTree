import christmasTree from '../src/christmasTree'

describe('Christmas Tree', () => {

    it('should print 1 star when height is 1', () => {
        expect(christmasTree(1)).toEqual('*\n')
    })

    it('should print *\n*** if height is 2', () => {
        expect(christmasTree(2)).toEqual(' *\n***\n')
    })

})