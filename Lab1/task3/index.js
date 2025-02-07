var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var stringFruits = fruits.every(function (fruit) {
    return typeof fruit === "string"
})

console.log(stringFruits)

var StartsWithA = fruits.some(function (fruit) {
    return fruit.startsWith("a");
});

console.log(StartsWithA)

var filteredFruits = fruits.filter(function (fruit) {
    return fruit.startsWith("b") || fruit.startsWith("s");
})

console.log(filteredFruits);

var likedFruits = fruits.map(function (fruit) {
    return `I like ${fruit}`;
})

likedFruits.forEach(function (liked) {
    console.log(liked);
})


