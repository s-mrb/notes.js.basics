- [Syntax](#syntax)
- [Variables](#variables)
  - [Ways to declare variable](#ways-to-declare-variable)
  - [When to Use JavaScript var?](#when-to-use-javascript-var)
  - [One Statement, Many Variables](#one-statement-many-variables)
  - [Remember](#remember)
- [Order of Evaluation](#order-of-evaluation)
- [let](#let)
  - [Block Scope](#block-scope)
  - [Hoisting](#hoisting)
- [const](#const)
  - [Constant Objects and Arrays](#constant-objects-and-arrays)
- [Common Operators](#common-operators)
- [Functions](#functions)
- [Objects](#objects)
  - [What is this?](#what-is-this)
  - [Don't use object where not needed](#dont-use-object-where-not-needed)
  - [Comparing Objects](#comparing-objects)
- [Strings](#strings)
  - [Length](#length)
  - [Extracting string parts](#extracting-string-parts)
    - [slice()](#slice)
    - [substring()](#substring)
    - [substr()](#substr)
  - [Replacing string contents](#replacing-string-contents)
    - [replace()](#replace)
  - [Case conversion](#case-conversion)
  - [Concatenation](#concatenation)
  - [Trimming](#trimming)
  - [Padding](#padding)
  - [Extracting chars](#extracting-chars)
  - [String to Array](#string-to-array)
    - [split](#split)
  - [String Search](#string-search)
    - [`indexOf(str, start_position)`](#indexofstr-start_position)
    - [`lastIndexOf(str, start_position)`](#lastindexofstr-start_position)
    - [`search(str|regex)`](#searchstrregex)
    - [`match(regex)`](#matchregex)
    - [`includes(searchvalue, start)`](#includessearchvalue-start)
    - [`startsWith(searchvalue, start)`](#startswithsearchvalue-start)
    - [`endsWith(searchvalue, length)`](#endswithsearchvalue-length)
  - [Template Literals](#template-literals)
    - [Multiline strings](#multiline-strings)
    - [String Interpolation](#string-interpolation)
- [Numbers](#numbers)
  - [exponent notation](#exponent-notation)
  - [Integer Precision](#integer-precision)
  - [Floating Precision](#floating-precision)
  - [Numeric Strings](#numeric-strings)
  - [Special Numbers](#special-numbers)
    - [Infinity](#infinity)
    - [NaN](#nan)
  - [Change base](#change-base)
  - [Numbers as objects](#numbers-as-objects)
  - [Methods](#methods)
    - [toString()](#tostring)
    - [toFixed()](#tofixed)
    - [toPrecision()](#toprecision)
    - [valueOf()](#valueof)
    - [Converting variables to Numbers](#converting-variables-to-numbers)
      - [Number](#number)
      - [parseInt](#parseint)
      - [parseFloat](#parsefloat)
- [Arrays](#arrays)
  - [Arrays as special type of Object](#arrays-as-special-type-of-object)
  - [Looping through array](#looping-through-array)
    - [for loop](#for-loop)
    - [forEach](#foreach)
    - [map](#map)
    - [filter](#filter)
    - [reduce](#reduce)
    - [every](#every)
    - [some](#some)
    - [find](#find)
    - [findIndex](#findindex)
    - [Array.from](#arrayfrom)
    - [keys](#keys)
    - [entries](#entries)
    - [includes](#includes)
    - [indexOf](#indexof)
    - [lastIndexOf](#lastindexof)
  - [Adding new elements](#adding-new-elements)
  - [Removing an element](#removing-an-element)
  - [Identifying array](#identifying-array)
  - [Converting array to string](#converting-array-to-string)
    - [toString()](#tostring-1)
    - [join()](#join)
  - [Merging arrays](#merging-arrays)
  - [slicing](#slicing)
    - [slice returns shallow copy??](#slice-returns-shallow-copy)
  - [Sorting](#sorting)
    - [Alphabetic Sort](#alphabetic-sort)
    - [Numeric Sort](#numeric-sort)
      - [Compare Function](#compare-function)
    - [Sorting Object Arrays](#sorting-object-arrays)
  - [Reversing](#reversing)
  - [Max and Min](#max-and-min)
- [Continue from date](#continue-from-date)

## Syntax

- All JavaScript identifiers are case sensitive.
- `//` for single line comment and `/**/` for multiple line comment


## Variables

### Ways to declare variable

4 Ways to Declare a JavaScript Variable:
- var
- let
- const
- using nothing


using nothing eg:

```js
x = 5;
y = 6;
z = x + y;
// 11
```
### When to Use JavaScript var?
The `var` keyword is used in all JavaScript code from 1995 to 2015.
The `let` and `const` keywords were added to JavaScript in 2015.
If you want your code to run in older browser, you must use `var`.



### One Statement, Many Variables
You can declare many variables in one statement.
Start the statement with `let` and separate the variables by comma:

```js
let person = "John Doe",
carName = "Volvo",
price = 200;
```

### Remember
- A variable declared without a value will have the value undefined.
- If you re-declare a JavaScript variable declared with `var`, it will not lose its value
  only if re-declaration is also in var.
- You cannot re-declare a variable declared with `let` or `const`.
- Since JavaScript treats a dollar sign as a letter, identifiers containing `$` are valid variable names.
- Since JavaScript treats underscore as a letter, identifiers containing `_` are valid variable names.

## Order of Evaluation

- left to right of assignment operator

```js
let x = "5" + 2 + 3; 
// 523

let y = 2 + 3 + "5";
// 55
```

## let

- The `let` keyword was introduced in ES6 (2015).
- Variables defined with `let` cannot be Redeclared.
- Variables defined with `let` must be Declared before use.
- Variables defined with `let` have Block Scope.

### Block Scope

```js
{
  var x = 2;
}
// x CAN be used here
```

```js
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
```

### Hoisting
Variables declared with `let` and `const` are also hoisted but, unlike `var`, are not initialized with a default value. An exception will be thrown if a variable declared with `let` or `const` is read before it is initialized.

```js
num = 7 // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization
```

## const

- JavaScript `const` variables must be assigned a value when they are declared.
- Variables defined with `const` cannot be Redeclared.
- Variables defined with `const` cannot be Reassigned.
- Variables defined with `const` have Block Scope.

### Constant Objects and Arrays

The keyword `const` is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:

- Change the elements of constant array
- Change the properties of constant object

```js
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```

```js
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```

## Common Operators

- `**`          - exponentiation
- `==`          - equal to
- `===`         - equal value and equal type
- `?`           - ternary
- `&&`          - logical and
- `||`          - logical or
- `!`           - logical not
- `typeof`      - Returns the type of a variable
- `instanceof`  - Returns true if an object is an instance of an object type


> Bitwise Operators : View [here](https://www.w3schools.com/js/js_operators.asp)

## Functions

Nothing here yet

## Objects

- Access object property
  
```js
objectName.propertyName
objectName["propertyName"]
```


```js
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

In the example above, `this` refers to the **person object**.

I.E. **this.firstName** means the **firstName** property of **this**.

I.E. **this.firstName** means the **firstName** property of **person**.

### What is this?

In JavaScript, the `this` keyword refers to an **object**.

**Which** object depends on how `this` is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

- In an object method, `this` refers to the **object**.
- Alone, `this` refers to the **global object**.
- In a function, `this` refers to the **global object**.
- In a function, in strict mode, `this` is undefined.
- In an event, `this` refers to the **element** that received the event.
- Methods like `call()`, `apply()`, and `bind()` can refer `this` to **any object**.


### Don't use object where not needed

Do Not Declare Strings, Numbers, and Booleans as Objects!

```js
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
```

They complicate your code and slow down execution speed.

### Comparing Objects

> Comparing two JavaScript objects always returns false, cause not value but the reference is compared.

```js
let a = {'a':4}
let b = {'a':4}
let c = b

console.log(a==b)
// false
console.log(a===b)
// false


console.log(a==c)
// true
console.log(a===c)
// true
```

## Strings

> All string methods return a new string. They don't modify the original string.
> Formally said: Strings are immutable: Strings cannot be changed, only replaced.

```js
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

```js
let x = new String("John");
let y = new String("John");
let z = "John";

// x===y false
// x==y  false

// x==z  true
// x===z false
```

### Length
### Extracting string parts

- `slice(start, end)`
- `substring(start, end)`
- `substr(start, length)`

#### slice()

- `slice()` extracts a part of a string and returns the extracted part in a new string.

```js
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
// Banana

part = str.slice(-12, -6);
// Banana

part = str.slice(7);
// Banana, Kiwi

part = str.slice(-12);
// Banana, Kiwi
```

#### substring()

- `substring()` is similar to `slice()`.
- The difference is that start and end values less than 0 are treated as 0 in `substring()`.

```js
str.substring(7, 13);
// Banana
```

#### substr()

- `substr()` is similar to `slice()`.
- The difference is that the second parameter specifies the **length** of the extracted part.
  
```js
str.substr(7, 6);
// Banana
```

### Replacing string contents

#### replace()
- returns new string rather than changign the original one
- replaces only the first occurance if regex not used
- case sensitive if regex not used

```js
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```

**all occurances:**<br>

```js
let newText = text.replace(/Microsoft/g, "W3Schools");
```

**case insensitive:**<br>

```js
let newText = text.replace(/MICROSOFT/i, "W3Schools");
```

### Case conversion

- A string is converted to upper case with `toUpperCase()`
- A string is converted to lower case with `toLowerCase()`

### Concatenation

The `concat()` method can be used instead of the plus operator. These two lines do the same:

```js
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
```

### Trimming

The `trim()` method removes whitespace from both sides of a string

### Padding

`padStart()` and `padEnd()`

```js
let text = "5";
let padded = text.padStart(4,"x");
// xxx5
```

```js
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
```

### Extracting chars

There are 3 methods for extracting string characters:

- `charAt(position)`
- `charCodeAt(position)`
- Property access [ ]

> NOTE: Property access might be a little unpredictable:

- It makes strings look like arrays (but they are not)
- If no character is found, [ ] returns undefined, while charAt() returns an empty string.
- It is read only. str[0] = "A" gives no error (but does not work!)

### String to Array

#### split

- If the separator is omitted, the returned array will contain the whole string in index [0].
- If the separator is "", the returned array will be an array of single characters

### String Search

JavaScript Search Methods

#### `indexOf(str, start_position)`

- returns -1 if string not found

#### `lastIndexOf(str, start_position)`

- The `lastIndexOf()` methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
- returns -1 if string not found
 
#### `search(str|regex)`

- unlike the `indexOf` the `search()` method cannot take a second start position argument.
- unlike the `indexOf` the `search()` method can take regex.

```js
let str = "Please locate where 'locate' occurs!";
str.search("locate");
// 7
```

#### `match(regex)`

The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

```js
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g))
// [ 'ain', 'ain', 'ain' ]
```

#### `includes(searchvalue, start)`

- returns true if a string contains a specified value.


#### `startsWith(searchvalue, start)`

```js
let text = "Hello world, welcome to the universe.";

text.startsWith("world")    
// false
text.startsWith("world", 6)    
// true
```

#### `endsWith(searchvalue, length)`


### Template Literals

#### Multiline strings

Template literals allows multiline strings:
```js
let text =
`The quick
brown fox
jumps over
the lazy dog`;
```

#### String Interpolation

Automatic replacing of expressions with real values is called string interpolation.

```js
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

## Numbers

- JavaScript Numbers are Always 64-bit Floating Point
- The maximum number of decimals is 17.
- Integers are accurate up to 15 digits.
  
### exponent notation

```js
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123
```

### Integer Precision



```js
let y = 9999999999999999;  
// y will be 10000000000000000
```

### Floating Precision
Floating point arithmetic is not always 100% accurate:

```js
let x = 0.2 + 0.1;
// 0.2 + 0.1 = 0.30000000000000004
```

To solve the problem above, it helps to multiply and divide:
```js
let x = (0.2 * 10 + 0.1 * 10) / 10;
```

### Numeric Strings

- JavaScript will try to convert strings to numbers in all numeric operations except for addition

```js
let x = "100"
let y = "10"
let z = 10

x / y  // 10
x / z  // 10

x * y  // 1000

x - y  // 90

x + y  // 10010
```

### Special Numbers

#### Infinity
#### NaN
- Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
- NaN is a number: `typeof NaN` returns number

### Change base

By default, JavaScript displays numbers as **base 10** decimals.
But you can use the toString() method to output numbers from **base 2** to **base 36**.

```js
let myNumber = 32;
myNumber.toString(32);
// 10
myNumber.toString(16);
// 20
myNumber.toString(12);
// 28
myNumber.toString(10);
// 32
```

### Numbers as objects

```js
let x = 500;
let y = new Number(500);
// x==y true
// x===y false
```

### Methods

#### toString()
#### toFixed()

**`toFixed()`** returns a string representation of numObj that does not use exponential notation and has exactly `digits` digits after the decimal place

```js
let numObj = 12345.6789

numObj.toFixed()       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1)      // Returns '12345.7': note rounding
numObj.toFixed(6)      // Returns '12345.678900': note added zeros
(1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2)  // Returns '0.00'
2.34.toFixed(1)        // Returns '2.3'
2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
-2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1)     // Returns '-2.3'
```

#### toPrecision()

returns a string representing a Number object in fixed-point or exponential notation rounded to precision significant digits

```js
let numObj = 5.123456

console.log(numObj.toPrecision())    // logs '5.123456'
console.log(numObj.toPrecision(5))   // logs '5.1235'
console.log(numObj.toPrecision(2))   // logs '5.1'
console.log(numObj.toPrecision(1))   // logs '5'

numObj = 0.000123

console.log(numObj.toPrecision())    // logs '0.000123'
console.log(numObj.toPrecision(5))   // logs '0.00012300'
console.log(numObj.toPrecision(2))   // logs '0.00012'
console.log(numObj.toPrecision(1))   // logs '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)) // logs '1.2e+3'
```

#### valueOf()

In JavaScript, a number can be a primitive value or an object.
The `valueOf()` method is used internally in JavaScript to convert Number objects to primitive values.

#### Converting variables to Numbers

There are 3 JavaScript methods that can be used to convert variables to numbers:

- The `Number()` method
- The `parseInt()` method
- The `parseFloat()` method

These methods are not **number** methods, but **global** JavaScript methods.

##### Number

```js
Number(true);
// 1
Number(false);
// 0
Number("10");
// 10
Number("  10");
// 10
Number("10  ");
// 10
Number(" 10  ");
// 10
Number("10.33");
// 10.33
Number("10,33");
// NaN
Number("10 33");
// NaN
Number("John");
// NaN
Number(new Date("1970-01-01"))
// 0
```

> The `Number()` method returns the number of milliseconds since 1.1.1970.

##### parseInt

`parseInt()` parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

```js
parseInt("-10");
// -10
parseInt("-10.33");
// -10
parseInt("10");
// 10
parseInt("10.33");
// 10
parseInt("10 20 30");
// 10
parseInt("10 years");
// 10
parseInt("years 10");
// NaN

```

##### parseFloat
Spaces are allowed. Only the first number is returned

## Arrays

> It is a common practice to declare arrays with the const keyword.

You can also create an array, and then provide the elements:

```js
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

```
Using Constructor
```js
const cars = new Array("Saab", "Volvo", "BMW");

```

> **Warning:** `new Array(40)` creates 40 undefined elements whereas `new Array(40,1)` creates 2 defined elements     

### Arrays as special type of Object

- `typeof` array == 'object'
- unlike objects arrays use numbered indexing to access its "elements"
- can have different elements of different data types

```js
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

### Looping through array

#### for loop

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

for (let i = 0; i < fLen; i++) {
  console.log(fruits[i])
}
```

#### forEach
The `forEach()` method executes a provided function once for each array element.

```js
// Arrow function
forEach((element) => { /* ... */ })
forEach((element, index) => { /* ... */ })
forEach((element, index, array) => { /* ... */ })

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

for (let i = 0; i < fLen; i++) {
  console.log(fruits[i])
}
```

#### map
- The `map()` method creates a new array by performing a function on each array element.
- The `map()` method does not execute the function for array elements without values.
- The `map()` method does not change the original array.

```js
// Arrow function
map((element) => { /* ... */ })
map((element, index) => { /* ... */ })
map((element, index, array) => { /* ... */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)
```

This example multiplies each array value by 2:

```js
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
```

#### filter
- The `filter()` method creates a new array with array elements that passes a test.

```js
// Arrow function
filter((element) => { /* ... */ } )
filter((element, index) => { /* ... */ } )
filter((element, index, array) => { /* ... */ } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)
```

This example creates a new array from elements with a value larger than 18:

```js
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

#### reduce

- The `reduce()` method runs a function on each array element to produce (reduce it to) a single value.
- The `reduce()` method works from left-to-right in the array. See also `reduceRight()`.
- The `reduce()` method does not reduce the original array.


```js
// Arrow function
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )

reduce((previousValue, currentValue) => { /* ... */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
```

The function is called with the following arguments:

- `previousValue:` the value resulting from the previous call to `callbackFn`. On first call, `initialValue` if specified, otherwise the value of `array[0]`.
- `currentValue`: the value of the current element. On first call, the value of `array[0]` if an `initialValue` was specified, otherwise the value of `array[1]`.
- `currentIndex`: the index position of `currentValue` in the array. On first call, 0 if `initialValue` was specified, otherwise 1.
- array: the array to traverse.
- `initialValue` \[Optional\]
A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.

```js
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
```

#### every
- The `every()` method tests whether all elements in the array pass the test implemented by the provided function. 
- It returns a Boolean value.

```js
// Arrow function
every((element) => { /* ... */ } )
every((element, index) => { /* ... */ } )
every((element, index, array) => { /* ... */ } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)
```

This example check if all array values are larger than 18:

```js
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

#### some
- The `some()` method tests whether at least one element in the array passes the test implemented by the provided function.

```js
// Arrow function
some((element) => { /* ... */ } )
some((element, index) => { /* ... */ } )
some((element, index, array) => { /* ... */ } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)
```
#### find
- The `find()` method returns the first element (**value**) in the provided array that satisfies the provided testing function. 
- If no values satisfy the testing function, `undefined` is returned.

```js
// Arrow function
find((element) => { /* ... */ } )
find((element, index) => { /* ... */ } )
find((element, index, array) => { /* ... */ } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)
```

This example finds (returns the value of) the first element that is larger than 18:

```js
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

#### findIndex
- The `findIndex()` method returns the **index** of the first element in the array that satisfies the provided testing function. 
- Otherwise, it returns -1, indicating that no element passed the test.

```js
// Arrow function
findIndex((element) => { /* ... */ } )
findIndex((element, index) => { /* ... */ } )
findIndex((element, index, array) => { /* ... */ } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

#### Array.from

- The `Array.from()` static method creates a new, shallow-copied Array instance from an array-like or iterable object.

```js
// Arrow function
Array.from(arrayLike, (element) => { /* ... */ } )
Array.from(arrayLike, (element, index) => { /* ... */ } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

> `mapFn` \[Optional\]: Map function to call on every element of the array.

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

#### keys
The `keys()` method returns a new **Array Iterator** object that contains the keys for each index in the array.

```js
const arr = ['a', , 'c'];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

#### entries
The `entries()` method returns a new **Array Iterator** object that contains the key/value pairs for each index in the array.

```js
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
```

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

#### includes
- allows us to check if an element is present in an array (including NaN, unlike indexOf).

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
```

#### indexOf
#### lastIndexOf


### Adding new elements

- `push` add at end
- `indexing` by length add at end
- `unshift` add at start and return new array length
- `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");

fruits[fruits.length] = "Heroin";
```

> **Warning:** Adding elements with high indexes can create undefined "holes" in an array:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
```

**splice:**<br>


```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits)

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
```

### Removing an element

- The `pop()` method removes the last element and returns it
- The `shift()` method removes the first array element and "shifts" all other elements to a lower index.
- Using `delete` leaves undefined holes in the array.
- With clever parameter setting, you can use `splice()` to remove elements without leaving "holes" in the array
  
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop()
// ["Banana", "Orange", "Apple"]

fruits.shift();
// [ 'Orange', 'Apple']

delete fruits[0];
// [ <1 empty item>, 'Apple']

```

### Identifying array

> `typeof` won't tell if variable is array or not, it will return *object* if it were array.

```js
Array.isArray(array_name);
// OR
array_name instanceof Array;
```

### Converting array to string

#### toString()
- converts an array to a string of (comma separated) array values.
- you can't specify the separator
  
#### join()
- converts an array to a string of (separator separated) array values.
- you can specify the separator, default is comma.

### Merging arrays

- The `concat()` method creates a new array by merging (concatenating) existing arrays


```js
const arr1 = ["A", "B"];
const arr2 = ["C"];
const arr3 = ["D", "E"];
const res = arr1.concat(arr2, arr3,"haha");

console.log(res)
// [ 'A', 'B', 'C', 'D', 'E', 'haha' ]
```

### slicing

- The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
- The original array will not be modified.

```js
slice()
slice(start)
slice(start, end)
```

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

console.log(citrus)
// [ 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(fruits)
// [ 'Banana', 'Orange', 'Lemon', 'Apple', 'M
```
> NOTE: The `slice()` method creates a new array.
> The `slice()` method does not remove any elements from the source array.

#### slice returns shallow copy??

```js
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

var t = animals.slice(2,4);
console.log(t);

t[0] = 'aaa';
console.log(t);
console.log(animals);
```

but, If slice method returns shallow array, the animals array should be changed with 
`['ant', 'bison', 'aaa', 'duck', 'elephant']`.

**Why is it shallow copy?**


`slice` does not alter the original array. It returns a shallow copy of elements from the original array.

Elements of the original array are copied into the returned array as follows:

For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.

For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number or boolean in one array do not affect the other array. If a new element is added to either array, the other array is not affected.(source)

In your case the the array consists of strings which on slice would return new strings copied to the array thus is a shallow copy. In order to avoid this use the object form of array.

### Sorting

#### Alphabetic Sort
- The `sort()` method sorts an array alphabetically:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.sort()
console.log(fruits)
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]

```

#### Numeric Sort
- By default, the `sort()` function sorts values as `strings`.
- if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
- You can fix this by providing a compare function.

```js
const points = [40, 100, 1, 5, 25, 10];

// ascending
points.sort(function(a, b){return a - b});
// [ 1, 5, 10, 25, 40, 100 ]

// descending
points.sort(function(a, b){return b - a});
// [ 100, 40, 25, 10, 5, 1 ]
```

##### Compare Function

The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:

```js
function(a, b){return a - b}
```

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

- If the result is negative `a` is sorted before `b`.
- If the result is positive `b` is sorted before `a`.
- If the result is 0 no changes are done with the sort order of the two values.

#### Sorting Object Arrays

```js
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
]

```

**On basis of number property:**<br>
```js
cars.sort(function(a, b){return a.year - b.year});
```

**On basis of string property:**<br>
```js
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
```



### Reversing
- The `reverse()` method reverses the elements in an array.

### Max and Min
- `Math.max.apply(null, [1, 2, 3])` is equivalent to `Math.max(1, 2, 3)`
- `Math.min.apply(null, [1, 2, 3])` is equivalent to `Math.min(1, 2, 3)`
- fastest solution is below method

```js
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
```

## Continue from date