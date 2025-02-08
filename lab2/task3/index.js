

const myObject = {
    [Symbol.split](str) {

        return str.split(",")
    },
};

const str = "courseName: JavaScript,courseDuration: 3 days,courseOwner: JS Master"

console.log(str.split(myObject))






