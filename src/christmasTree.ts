function findNumberOfStars(step: number):number {
    let numOfStars = step * 2 +1
    return numOfStars
}

function makeChristmasTree(height:number):string {
    let tree = ''

    for (let step = 0; step < height; step++) {

        for (let space = 1; space < height - step; space++){
            tree += ' '
        }

        let numOfStars = findNumberOfStars(step)

        for (let star = 0; star < numOfStars; star++){
            tree += '*'
        }

        tree += '\n'

    }

    return tree
}

export default function christmasTree(height: number) {

    if (height > 0 ){
        return makeChristmasTree(height)
    }
    
    return "Can't make a tree with negative height, please try with a positive value."
}

console.log(christmasTree(10))
