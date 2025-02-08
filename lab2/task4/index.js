var obj = {
    nm: "ali",
    age: 20,
    [Symbol.iterator]: function () {
        var keys = Object.keys(obj)
        var counter = 0
        return {
            next: function () {
                if (counter >= keys.length) {
                    return { value: undefined, done: true }
                } else {
                    return { value: { key: keys[counter], value: obj[keys[counter++]] }, done: false };
                }
            }
        }
    }
}

for (let item of obj) {
    console.log(item)
}

const iter = obj[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

