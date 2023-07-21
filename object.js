// const ages = { alice: 18, bob: 27 }

// function hasPerson (name) {
//   return name in ages
// }

// function getAge (name) {
//   return ages[name]
// }

// console.log("hasPerson('hasOwnProperty')", hasPerson('hasOwnProperty'))
// console.log("getAge('toString')", getAge('toString'))

// // Object.assign()
// const target = { a: 1, b: 2 }
// const source = { b: 4, c: 5 }

// const returnedTarget = Object.assign(target, source)

// console.log(target)
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target)
// // Expected output: true

// const obj1 = { a: 0, b: { c: 0 } }
// const obj2 = Object.assign({}, obj1)
// console.log(obj2) // { a: 0, b: { c: 0 } }

// obj1.a = 1
// console.log(obj1) // { a: 1, b: { c: 0 } }
// console.log(obj2) // { a: 0, b: { c: 0 } }

// obj2.a = 2
// console.log(obj1) // { a: 1, b: { c: 0 } }
// console.log(obj2) // { a: 2, b: { c: 0 } }

// obj2.b.c = 3
// console.log(obj1) // { a: 1, b: { c: 3 } }
// console.log(obj2) // { a: 2, b: { c: 3 } }

// // Deep Clone
// const obj3 = { a: 0, b: { c: 0 } }
// const obj4 = structuredClone(obj3)
// obj3.a = 4
// obj3.b.c = 4
// console.log(obj4) // { a: 0, b: { c: 0 } }

// const o1 = { a: 1, b: 1, c: 1 }
// const o2 = { b: 2, c: 2 }
// const o3 = { c: 3 }

// const obj = Object.assign({}, o1, o2, o3)
// console.log(obj) // { a: 1, b: 2, c: 3 }

// Object.create()

// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
//   }
// }

// const me = Object.create(person)

// me.name = 'Matthew' // "name" is a property set on "me", but not on "person"
// me.isHuman = true // Inherited properties can be overwritten

// me.printIntroduction()
// // Expected output: "My name is Matthew. Am I human? true"

// // Object.defineProperties()
// const object1 = {}

// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true
//   },
//   property2: {}
// })

// console.log(object1.property1)
// // Expected output: 42

// // Object.defineProperty()

// const object1 = {}

// Object.defineProperty(object1, 'property1', {
//   value: 42,
//   writable: false
// })

// object1.property1 = 77
// // Throws an error in strict mode

// console.log(object1.property1)
// // Expected output: 42

// // Object.entries()
// const object1 = {
//   a: 'somestring',
//   b: 42
// }

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`)
// }

// // Expected output:
// // "a: somestring"
// // "b: 42"

// const obj = { foo: 'bar', baz: 42 }
// console.log(Object.entries(obj)) // [ ['foo', 'bar'], ['baz', 42] ]

// Array-like object
// const obj = { 0: 'a', 1: 'b', 2: 'c' }
// console.log(Object.entries(obj)) // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// // Array-like object with random key ordering
// const anObj = { 100: 'a', 2: 'b', 7: 'c' }
// console.log(Object.entries(anObj)) // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// // getFoo is a non-enumerable property
// const myObj = Object.create(
//   {},
//   {
//     getFoo: {
//       value () {
//         return this.foo
//       }
//     }
//   }
// )
// myObj.foo = 'bar'
// console.log(Object.entries(myObj)) // [ ['foo', 'bar'] ]

// Object.freeze()
// const obj = {
//   prop: 42
// }

// Object.freeze(obj)

// obj.prop = 33
// // Throws an error in strict mode

// console.log(obj.prop)
// // Expected output: 42

// // Object.fromEntries()
// const entries = new Map([
//   ['foo', 'bar'],
//   ['baz', 42]
// ])

// const obj = Object.fromEntries(entries)

// console.log(obj)
// Expected output: Object { foo: "bar", baz: 42 }

// const arr = [
//   ['0', 'a'],
//   ['1', 'b'],
//   ['2', 'c']
// ]
// const obj = Object.fromEntries(arr)
// console.log(obj) // { 0: "a", 1: "b", 2: "c" }

// // Object.getOwnPropertyDescriptor()
// const object1 = {
//   property1: 42
// }

// const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1')

// console.log(descriptor1.configurable)
// // Expected output: true

// console.log(descriptor1.value)
// // Expected output: 42

// // Object.getOwnPropertyDescriptors()
// const object1 = {
//   property1: 42
// }

// const descriptors1 = Object.getOwnPropertyDescriptors(object1)

// console.log(descriptors1.property1.writable)
// // Expected output: true

// console.log(descriptors1.property1.value)
// // Expected output: 42

// Object.hasOwn()
const object1 = {
  prop: 'exists'
}

console.log(Object.hasOwn(object1, 'prop'))
// Expected output: true

console.log(Object.hasOwn(object1, 'toString'))
// Expected output: false

console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'))
// Expected output: false
