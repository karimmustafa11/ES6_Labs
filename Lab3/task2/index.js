let handler = {
    set(target, prop, value) {
        if (prop === "name") {
            if (typeof value !== "string" || value.length !== 7) {
                throw new Error("Name must be a string of exactly 7 characters!")
            }
        } else if (prop === "address") {
            if (typeof value !== "string") {
                throw new Error("Address must be a string!")
            }
        } else if (prop === "age") {
            if (typeof value !== "number" || value < 25 || value > 60) {
                throw new Error("Age must be a number between 25 and 60!")
            }
        } else {
            throw new Error(` Property "${prop}" is not allowed!`)
        }

        target[prop] = value
    }
}

let person = new Proxy({}, handler)


person.name = "Karim12"
person.address = "Alex,Egypt"
person.age = 30

console.log(person)

// person.name = "karim"
// person.age = 20
// person.address = 123
// person.gender = "Male"
