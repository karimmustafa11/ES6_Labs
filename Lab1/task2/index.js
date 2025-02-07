function minMax(...numbers) {
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)
    return { min, max }
}

const array = [1, 2, 3, 4, 5]

const { min, max } = minMax(...array)

console.log(`Min value is ${min}`)
console.log(`Max value is  ${max}`)

let x = 0
let y = 1

x = y++
console.log(`${x}    ${y}`)
