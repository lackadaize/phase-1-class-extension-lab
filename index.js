class Polygon {
    constructor(polySides) {
        this.polySides = polySides
    }

    get countSides () {
        return this.polySides.length
    }

    get perimeter () {
        return this.polySides.reduce((accumulator, current) => accumulator + current, 0)
    }
}

class Triangle extends Polygon {
    get isValid () {
        if (this.polySides.length === 3) {
            let a = this.polySides[0]
            let b = this.polySides[1]
            let c = this.polySides[2]
            if (a + b > c && a + c > b && b + c > a) {
                return true
            } else {
                return false
            }
        }
    }  
}

class Square extends Polygon {
    get isValid () {
        if (this.polySides.length === 4) {
            let a = this.polySides[0]
            let b = this.polySides[1]
            let c = this.polySides[2]
            let d = this.polySides[3]
            if (a === b && b === c && c === d)  {
                return true
            } else {
                return false
            }
        }
    }   

    get area() {
        return this.polySides[0] * this.polySides[0]
    }
}