class Polygon {
    constructor(name, dim1, dim2) {
        if (this.constructor == Polygon) {
            throw new Error("Cannot instantiate an abstract class Polygon directly!")
        }
        this.name = name
        this.dim1 = dim1
        this.dim2 = dim2
    }

    getArea() {
        throw new Error("getArea Function must be implemented in subclasses")
    }


    toString() {
        return `${this.name} - Area: ${this.getArea()}, Dimensions: ${this.dim1} x ${this.dim2}`
    }
}

class Rectangle extends Polygon {
    constructor(width, height) {
        super("Rectangle", width, height)
    }

    getArea() {
        return this.dim1 * this.dim2
    }
}

class Square extends Rectangle {
    constructor(dim) {
        super("Square", dim, dim)
    }
}

class Circle extends Polygon {
    constructor(radius) {
        super("Circle", radius, radius)
    }

    getArea() {
        return Math.PI * this.dim1 * this.dim2
    }

    toString() {
        return `${this.name} - Area: ${this.getArea()}, Radius: ${this.dim1}`
    }
}

class Triangle extends Polygon {
    constructor(base, height) {
        super("Triangle", base, height)
    }

    getArea() {
        return 0.5 * this.dim1 * this.dim2
    }
}



const rect = new Rectangle(10, 5)
const square = new Square(7)
const circle = new Circle(4)
const triangle = new Triangle(6, 3)

console.log(rect.toString())
console.log(square.toString())
console.log(circle.toString())
console.log(triangle.toString())
