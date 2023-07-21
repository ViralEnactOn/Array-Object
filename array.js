// const fruits = []
// fruits.push('banana', 'apple', 'peach')
// console.log('fruits.length', fruits.length) // 3

// Update length
// fruits[5] = 'mango'
// console.log(fruits[5]) // 'mango'
// console.log('Object.keys(fruits)', Object.keys(fruits)) // ['0', '1', '2', '5']
// console.log(fruits.length) // 6

// Increasing Length
// fruits.length = 10
// console.log(fruits) // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
// console.log(fruits.length) // 10
// console.log(fruits[8]) // undefined

// Decreasing Length
// fruits.length = 2
// console.log(Object.keys(fruits)) // ['0', '1']
// console.log(fruits.length) // 2

// Array literal notation
// console.log(fruits.length) // 2
// console.log(fruits[0]) // "banana"

// Array constructor with a single parameter
// const arrayEmpty = new Array(2)

// console.log(arrayEmpty.length) // 2
// console.log(arrayEmpty[0]) // undefined; actually, it is an empty slot
// console.log(0 in arrayEmpty) // false
// console.log(1 in arrayEmpty) // false

// const arrayOfOne = new Array('2') // Not the number 2 but the string "2"

// console.log(arrayOfOne.length) // 1
// console.log(arrayOfOne[0]) // "2"

// Iteration using for...of loop
// const arr = ['a', 'b', 'c']
// const letterResult = document.getElementById('letterResult')
// for (const letter of arr) {
//   const li = document.createElement('li')
//   li.textContent = letter
//   letterResult.appendChild(li)
// }

// Manually hand-rolling the iterator
// const arr = ['a', 'b', 'c', 'd', 'e']
// const arrIter = arr[Symbol.iterator]()
// console.log(arrIter.next().value) // a
// console.log(arrIter.next().value) // b
// console.log(arrIter.next().value) // c
// console.log(arrIter.next().value) // d
// console.log(arrIter.next().value) // e

// Handling strings and string arrays with the same function
// function logIterable (it) {
//   if (typeof it[Symbol.iterator] !== 'function') {
//     console.log(it, 'is not iterable.')
//     return
//   }
//   for (const letter of it) {
//     console.log(letter)
//   }
// }

// // Array
// logIterable(['a', 'b', 'c'])
// // a
// // b
// // c

// // String
// logIterable('abc')
// // a
// // b
// // c

// // Number
// logIterable(123)
// // 123 is not iterable.

// Array at
// const array1 = [5, 12, 8, 130, 44]

// let index = 2

// console.log(
//   `Using an index of ${index} the item returned is ${array1.at(index)}`
// )
// // Expected output: "Using an index of 2 the item returned is 8"

// index = -2

// console.log(`Using an index of ${index} item returned is ${array1.at(index)}`)
// // Expected output: "Using an index of -2 item returned is 130"

// // Return the last value of an array
// // Our array with items
// const cart = ['apple', 'banana', 'pear']

// // A function which returns the last item of a given array
// function returnLast (arr) {
//   return arr.at(-1)
// }

// // Get the last item of our array 'cart'
// const item1 = returnLast(cart)
// console.log(item1) // 'pear'

// // Add an item to our 'cart' array
// cart.push('orange')
// const item2 = returnLast(cart)
// console.log(item2) // 'orange'

// Comparing methods
// Our array with items
const colors = ['red', 'green', 'blue']

// // Using length property
// const lengthWay = colors[colors.length - 2]
// console.log(lengthWay) // 'green'

// // Using slice() method. Note an array is returned
// const sliceWay = colors.slice(-2, -1)
// console.log(sliceWay[0]) // 'green'

// // Using at() method
// const atWay = colors.at(-2)
// console.log(atWay) // 'green'

// // Calling at() on non-array objects
// const arrayLike = {
//   length: 2,
//   0: 'a',
//   1: 'b',
//   2: 'c' // ignored by at() since length is 2
// }
// console.log(Array.prototype.at.call(arrayLike, 0)) // "a"
// console.log(Array.prototype.at.call(arrayLike, 2)) // undefined

// // Concatenating two arrays
// const letters = ['a', 'b', 'c']
// const numbers = [1, 2, 3]

// const alphaNumeric = letters.concat(numbers)
// console.log(alphaNumeric)
// // results in ['a', 'b', 'c', 1, 2, 3]

// // Concatenating three arrays
// const num1 = [1, 2, 3]
// const num2 = [4, 5, 6]
// const num3 = [7, 8, 9]

// const numbers = num1.concat(num2, num3)

// console.log(numbers)
// // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // Concatenating values to an array
// const letters = ['a', 'b', 'c']

// const alphaNumeric = letters.concat(1, [2, 3])

// console.log(alphaNumeric)
// // results in ['a', 'b', 'c', 1, 2, 3]

// // Concatenating nested arrays
// const num1 = [[1]];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// console.log(numbers);
// // results in [[1], 2, [3]]

// // modify the first element of num1
// num1[0].push(4);

// console.log(numbers);
// // results in [[1, 4], 2, [3]]

// // Using copyWithin()
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3))
// // [4, 5, 3, 4, 5]

// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
// // [4, 2, 3, 4, 5]

// console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1))
// // [1, 2, 3, 3, 4]

// // Iterating with index and element
// const a = ['a', 'b', 'c']

// for (const [index, element] of a.entries()) {
//   console.log(index, element)
// }

// // 0 'a'
// // 1 'b'
// // 2 'c'

// // Using a for...of loop
// const array = ['a', 'b', 'c']
// const arrayEntries = array.entries()
// for (const element of arrayEntries) {
//   console.log(element)
// }

// // [0, 'a']
// // [1, 'b']
// // [2, 'c']

// // Iterating sparse arrays
// for (const element of [, 'a'].entries()) {
//   console.log(element)
// }
// // [0, undefined]
// // [1, 'a']

// // Testing size of all array elements
// function isBigEnough (element, index, array) {
//   return element >= 10
// }
// console.log([12, 5, 8, 130, 44].every(isBigEnough)) // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)) // true

// // Check if one array is a subset of another array
// const isSubset = (array1, array2) =>
//   array2.every(element => array1.includes(element))

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])) // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])) // false

// // Using fill
// console.log([1, 2, 3].fill(4)); // [4, 4, 4]
// console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
// console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
// console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
// console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
// console.log(Array(3).fill(4)); // [4, 4, 4]

// // A single object, referenced by each slot of the array:
// const arr = Array(3).fill({}); // [{}, {}, {}]
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// // Filtering out all small values
// function isBigEnough (value) {
//   return value >= 10
// }

// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// console.log(filtered)
// // filtered is [12, 130, 44]

// // Find all prime numbers in an array
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// function isPrime (num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return num > 1
// }

// console.log(array.filter(isPrime)) // [2, 3, 5, 7, 11, 13]

// // Searching in array
// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems (arr, query) {
//   return arr.filter(el => el.toLowerCase().includes(query.toLowerCase()))
// }

// console.log(filterItems(fruits, 'ap')) // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an')) // ['banana', 'mango', 'orange']

// // Find an object in an array by one of its properties
// const inventory = [
//   { name: 'apples', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'cherries', quantity: 5 }
// ]

// const result = inventory.find(({ name }) => name === 'cherries')

// console.log(result) // { name: 'cherries', quantity: 5 }

// // Find a prime number in an array
// function isPrime (element, index, array) {
//   let start = 2
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false
//     }
//   }
//   return element > 1
// }

// console.log([4, 6, 8, 12].find(isPrime)) // undefined, not found
// console.log([4, 5, 8, 7, 12].find(isPrime)) // 5

// // Find the index of a prime number in an array
// function isPrime (element) {
//   if (element % 2 === 0 || element < 2) {
//     return false
//   }
//   for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
//     if (element % factor === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log([4, 6, 8, 9, 12].findIndex(isPrime)) // -1, not found
// console.log([4, 6, 7, 9, 12].findIndex(isPrime)) // 2 (array[2] is 7)

// // Find last object in an array matching on element properties
// const inventory = [
//   { name: 'apples', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'fish', quantity: 1 },
//   { name: 'cherries', quantity: 5 }
// ]

// const result = inventory.findLast(({ quantity }) => quantity < 2)

// console.log(result)
// // { name: "fish", quantity: 1 }

// // Find the index of the last prime number in an array
// function isPrime (element) {
//   if (element % 2 === 0 || element < 2) {
//     return false
//   }
//   for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
//     if (element % factor === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log([4, 6, 8, 12].findLastIndex(isPrime)) // -1, not found
// console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)) // 5

// // Array flat
// const arr1 = [0, 1, 2, [3, 4]]

// console.log(arr1.flat())
// // Expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]]

// console.log(arr2.flat(2))
// // Expected output: Array [0, 1, 2, Array [3, 4]]

// // Flattening nested arrays
// const arr1 = [1, 2, [3, 4]]
// arr1.flat()
// // [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]]
// arr2.flat()
// // [1, 2, 3, 4, [5, 6]]

// const arr3 = [1, 2, [3, 4, [5, 6]]]
// arr3.flat(2)
// // [1, 2, 3, 4, 5, 6]

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
// arr4.flat(Infinity)
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // Array flatmap
// const arr1 = [1, 2, 1]

// const result = arr1.flatMap(num => (num === 2 ? [2, 2] : 1))

// console.log(result)
// // Expected output: Array [1, 2, 2, 1]

// // Array foreach
// const array1 = ['a', 'b', 'c']

// array1.forEach(element => console.log(element))

// // Expected output: "a"
// // Expected output: "b"
// // Expected output: "c"

// // Array from
// console.log(Array.from('foo'))
// // Expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x))
// // Expected output: Array [2, 4, 6]

// // Array group
// const inventory = [
//   { name: 'asparagus', type: 'vegetables', quantity: 5 },
//   { name: 'bananas', type: 'fruit', quantity: 0 },
//   { name: 'goat', type: 'meat', quantity: 23 },
//   { name: 'cherries', type: 'fruit', quantity: 5 },
//   { name: 'fish', type: 'meat', quantity: 22 }
// ]

// const result = inventory.group(({ type }) => type)
// console.log(result)
// /* Result is:
// {
//   vegetables: [
//     { name: 'asparagus', type: 'vegetables', quantity: 5 },
//   ],
//   fruit: [
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "cherries", type: "fruit", quantity: 5 }
//   ],
//   meat: [
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "fish", type: "meat", quantity: 22 }
//   ]
// }
// */

// // Using groupToMap()
// const inventory = [
//   { name: 'asparagus', type: 'vegetables', quantity: 9 },
//   { name: 'bananas', type: 'fruit', quantity: 5 },
//   { name: 'goat', type: 'meat', quantity: 23 },
//   { name: 'cherries', type: 'fruit', quantity: 12 },
//   { name: 'fish', type: 'meat', quantity: 22 }
// ]
// const restock = { restock: true }
// const sufficient = { restock: false }
// const result = inventory.groupToMap(({ quantity }) =>
//   quantity < 6 ? restock : sufficient
// )
// console.log(result.get(restock))
// // [{ name: "bananas", type: "fruit", quantity: 5 }]

// // Array.includes()
// const array1 = [1, 2, 3]

// console.log(array1.includes(2))
// // Expected output: true

// const pets = ['cat', 'dog', 'bat']

// console.log(pets.includes('cat'))
// // Expected output: true

// console.log(pets.includes('at'))
// // Expected output: false

// console.log([1, 2, 3].includes(2)) // true
// console.log([1, 2, 3].includes(4)) // false
// console.log([1, 2, 3].includes(3, 3)) // false
// console.log([1, 2, 3].includes(3, -1)) // true
// console.log([1, 2, NaN].includes(NaN)) // true
// console.log(['1', '2', '3'].includes(3)) // false

// Array.indexOf()
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

// console.log(beasts.indexOf('bison'))
// // Expected output: 1

// // Start from index 2
// console.log(beasts.indexOf('bison', 2))
// // Expected output: 4

// console.log(beasts.indexOf('giraffe'))
// // Expected output: -1

// const array = [2, 9, 9]
// console.log(array.indexOf(2)) // 0
// console.log(array.indexOf(7)) // -1
// console.log(array.indexOf(9, 2)) // 2
// console.log(array.indexOf(2, -1)) // -1
// console.log(array.indexOf(2, -3)) // 0

// // Array.isArray()
// console.log(Array.isArray([1, 3, 5]))
// // Expected output: true

// console.log(Array.isArray('[]'))
// // Expected output: false

// console.log(Array.isArray(new Array(5)))
// // Expected output: true

// console.log(Array.isArray(new Int16Array([15, 33])))
// // Expected output: false

// // Array.join()
// const elements = ['Fire', 'Air', 'Water']

// console.log(elements.join())
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''))
// // Expected output: "FireAirWater"

// console.log(elements.join('-'))
// // Expected output: "Fire-Air-Water"

// // Array.keys()
// const array1 = ['a', 'b', 'c']
// const iterator = array1.keys()

// for (const key of iterator) {
//   console.log(key)
// }

// // Expected output: 0
// // Expected output: 1
// // Expected output: 2

// // Array.lastIndexOf()

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

// console.log(animals.lastIndexOf('Dodo'))
// // Expected output: 3

// console.log(animals.lastIndexOf('Tiger'))
// // Expected output: 1

// // Array.map()
// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }))

// console.log(reformattedArray) // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(kvArray)
// // [
// //   { key: 1, value: 10 },
// //   { key: 2, value: 20 },
// //   { key: 3, value: 30 }
// // ]

// // Array.of()
// console.log(Array.of('foo', 2, 'bar', true))
// // Expected output: Array ["foo", 2, "bar", true]

// console.log(Array.of())
// // Expected output: Array []

// // Array.pop()
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

// console.log(plants.pop())
// // Expected output: "tomato"

// console.log(plants)
// // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// plants.pop()

// console.log(plants)
// // Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// // Array.push()
// const animals = ['pigs', 'goats', 'sheep']

// const count = animals.push('cows')
// console.log(count)
// // Expected output: 4
// console.log(animals)
// // Expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs')
// console.log(animals)
// // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// // Merging two arrays
// const vegetables = ['parsnip', 'potato']
// const moreVegs = ['celery', 'beetroot']

// // Merge the second array into the first one
// vegetables.push(...moreVegs)

// console.log(vegetables) // ['parsnip', 'potato', 'celery', 'beetroot']

// //  Array.reduce()
// const array1 = [1, 2, 3, 4]

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// )

// console.log(sumWithInitial)
// // Expected output: 10

// // Array.reduceRight()
// const array1 = [
//   [0, 1],
//   [2, 3],
//   [4, 5]
// ]

// const result = array1.reduceRight((accumulator, currentValue) =>
//   accumulator.concat(currentValue)
// )

// console.log(result)
// // Expected output: Array [4, 5, 2, 3, 0, 1]

// // Array.reverse()
// const array1 = ['one', 'two', 'three']
// console.log('array1:', array1)
// // Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse()
// console.log('reversed:', reversed)
// // Expected output: "reversed:" Array ["three", "two", "one"]

// // Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1)
// // Expected output: "array1:" Array ["three", "two", "one"]

// // Array.shift()
// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// // Expected output: Array [2, 3]

// console.log(firstElement);
// // Expected output: 1

// // Array.slice()
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

// console.log(animals.slice(2))
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4))
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5))
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2))
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1))
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice())
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// // Array.some()
// const a = [2, 5, 8, 1, 4]
// console.log(a.some(x => x > 10))

// // Array.sort()
// const months = ['March', 'Jan', 'Feb', 'Dec']
// months.sort()
// console.log(months)
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000]
// array1.sort()
// console.log(array1)
// // Expected output: Array [1, 100000, 21, 30, 4]

// // Array.splice()
// const months = ['Jan', 'March', 'April', 'June']
// months.splice(1, 0, 'Feb')
// // Inserts at index 1
// console.log(months)
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May')
// // Replaces 1 element at index 4
// console.log(months)
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// // Array.toLocaleString()
// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
// const localeString = array1.toLocaleString('en', { timeZone: 'UTC' })

// console.log(localeString)
// // Expected output: "1,a,12/21/1997, 2:12:00 PM",
// // This assumes "en" locale and UTC timezone - your results may vary


// // Array.toReversed()
// const items = [1, 3, 2];
// console.log(items); // [1, 2, 3]

// const reversedItems = items.toReversed();
// console.log(reversedItems); // [3, 2, 1]
// console.log(items); // [1, 2, 3]

// Array.toSorted()
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]

