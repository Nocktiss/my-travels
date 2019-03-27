const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
const {b} = obj1
console.log(b)

const obj2 = {
    x: 42,
    y: 53,
    z: 64
}

const obj3 = {
    ...obj1, // "..." => spreadOperator
    ...obj2,
}

console.log(obj3)