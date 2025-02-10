// 1 ,2 set , get in lec

let obj = { name: "karim", age: 23 }


//^ 3. has property
//& - control your obj with in operator
//& - hide some properties without deleting

let proxy3 = new Proxy(obj, {
    has(target, prop) {
        return prop == "name"
    }
})

console.log("name" in proxy3)
console.log("age" in proxy3)

//*.....................................................................................................


//^ 4. deleteProperty
//& control deleting some property

let proxy4 = new Proxy(obj, {
    deleteProperty(target, prop) {
        return false
    }
})

delete proxy4.name
console.log(proxy4.name)

//*.....................................................................................................



//^ 5. getPrototypeOf
//& - control getting the prototype 
//& - allow or not in your obj
// let proxy5 = new Proxy(obj, {
//     getPrototypeOf(target) {
//         throw (`you can't see the prototype`)
//     }
// })
// console.log(Object.getPrototypeOf(proxy5))


//*.......................................................................................................


//^ 6. setPrototypeOf
//& - control setting the prototype 
//& - allow or not in your obj
let proxy6 = new Proxy(obj, {
    setPrototypeOf(target, prototype) {
        console.log("Prototype change is blocked!")
        return false
    }
})
Object.setPrototypeOf(proxy6, obj)


//*..........................................................................................................



//^ 7. ownKeys
//& - control showing some keys and prevent other

let proxy5 = new Proxy(obj, {
    ownKeys(target) {
        return ["name"]
    }
})

console.log(Object.keys(proxy5))



//*............................................................................................................



//^ 8. isExtensible
//& - control add properties to object "Controls whether the target object is extensible"
//& - Determines if the target can be extended using Object.isExtensible(obj)
//& - restrict object modifications
//& - return the same result as Object.isExtensible(target), or a TypeError will occur
//* ....................................................................................................


//^ 9. preventExtensions
//& -  Prevents extensions on the target object "no new properties can be added"
//& - Calls Object.preventExtensions(target) to lock the object
//& - return the same result as Object.preventExtensions(target), or a TypeError will occur
//*................................................................................................


//^ 10. defineProperty
//& - Control the defination of new properties
//& - restrict some modification in new properties
//*................................................................................................


//^ 11. getOwnPropertyDescriptor
//& - Controls Property Access & Modification
//& - Helps in restricting access to sensitive properties.
//& - Can return undefined for specific properties to hide them from being accessed.
//*................................................................................................




//^ 12. constructor
//& - Controls Object Creation "Triggers when using new with the Proxy"
//& - Allows validation or modification before an object is created
//& - Adds extra logic before or after object instantiation
//*.......................................................................................................


//^ 13. apply
//& - Control Function Calls "prevent or modify how a function executes"
//& - Modify Arguments or Return Values
//& - Implement logging, or validation before function execution.
//& - Block execution if specific conditions are not met










