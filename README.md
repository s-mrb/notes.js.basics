# Index

- [Index](#index)
- [Content](#content)
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
  - [Dates](#dates)
    - [Getters and Setters left](#getters-and-setters-left)
  - [Math](#math)
    - [Random](#random)
    - [Some Methods](#some-methods)
  - [Boolean](#boolean)
  - [Ternary](#ternary)
  - [Switch](#switch)
    - [Strict Comparison](#strict-comparison)
  - [Loops](#loops)
    - [for in](#for-in)
    - [for of](#for-of)
    - [`for ... in` vs `for ... of`](#for--in-vs-for--of)
    - [while](#while)
    - [do while](#do-while)
    - [Scope](#scope)
  - [label](#label)
    - [continue](#continue)
    - [break](#break)
  - [Iterable](#iterable)
  - [Sets](#sets)
  - [Maps](#maps)
  - [Maps vs Objects](#maps-vs-objects)
  - [Data Types](#data-types)
    - [null vs undefined](#null-vs-undefined)
  - [JS Type Conversion](#js-type-conversion)
    - [Strings to Numbers](#strings-to-numbers)
    - [Numbers to Strings](#numbers-to-strings)
    - [Dates to Numbers](#dates-to-numbers)
    - [Numbers to Dates](#numbers-to-dates)
    - [Booleans to Numbers](#booleans-to-numbers)
    - [Numbers to Booleans](#numbers-to-booleans)
  - [Bitwise](#bitwise)
  - [RegEx](#regex)
    - [Patterns](#patterns)
      - [Brackets](#brackets)
      - [Metacharacters](#metacharacters)
      - [Quantifier](#quantifier)
    - [Modifiers](#modifiers)
    - [Using the RegExp Object](#using-the-regexp-object)
      - [test](#test)
      - [exec()](#exec)
  - [Scoping](#scoping)
  - [Hoisting](#hoisting-1)
  - [Strict Mode](#strict-mode)
  - [Detailed Concepts](#detailed-concepts)
    - [`iterables` vs `enumerables`](#iterables-vs-enumerables)
      - [You may ask how should I remember it? - Easy!](#you-may-ask-how-should-i-remember-it---easy)
  - [Continue from this](#continue-from-this)

---
---

# Content
## Syntax

- All JavaScript identifiers are case sensitive.
- `//` for single line comment and `/**/` for multiple line comment

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Variables

### Ways to declare variable

4 Ways to Declare a JavaScript Variable:
- `var`
- `let`
- `const`
- using nothing (won't work in strict mode)


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
  only if re-declaration is also in `var`, otherwise *Syntax Error*.
- You cannot re-declare a variable declared with `let` or `const`.
- Since JavaScript treats a dollar sign as a letter, identifiers containing `$` are valid variable names.
- Since JavaScript treats underscore as a letter, identifiers containing `_` are valid variable names.

```js
var a = 5
var a
console.log(a)
// 5
```

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Order of Evaluation

- left to right of assignment operator

```js
let x = "5" + 2 + 3; 
// 523

let y = 2 + 3 + "5";
// 55
```

<p align="center"><a href="#index">back to index<a/></p>

---
---

## let

- The `let` keyword was introduced in ES6 (2015).
- Variables defined with `let` cannot be Redeclared.
- Variables defined with `let` must be Declared before use.
- Variables defined with `let` have Block Scope.

### Block Scope

```js
{
  let x = 2;
}
// x can NOT be used here
```

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


<p align="center"><a href="#index">back to index<a/></p>

---
---

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

<p align="center"><a href="#index">back to index<a/></p>

---
---

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

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Functions

Nothing here yet

<p align="center"><a href="#index">back to index<a/></p>

---
---

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

<p align="center"><a href="#index">back to index<a/></p>

---
---

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

<p align="center"><a href="#index">back to index<a/></p>

---
---

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

<p align="center"><a href="#index">back to index<a/></p>

---
---

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

// OR

function isArray(myArray) {
  return myArray.constructor === Array;
}

// OR

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
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

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Dates

```js
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```

- JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
- JavaScript counts months from 0 to 11
- Specifying a month/day higher than max possible, will not result in an error but add the overflow to the next year/month:
- You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
- One and two digit years will be interpreted as 19xx:
- `new Date(milliseconds)` creates a new date object as zero time plus milliseconds
- `Date.parse()` returns the number of milliseconds between the date and January 1, 1970


```js
const d = new Date(9, 11, 24);
// 1909 ...

const d = new Date("October 13, 2014 11:13:00");
// date object

```

> **NOTE:** Always view warning or search for them to make your dates correct on each platform/browsers.

### Getters and Setters left

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Math

- Unlike other objects, the Math object has no constructor.
- The Math object is static.
- All methods and properties can be used without creating a Math object first.

### Random

> `Math.random()` always returns a number lower than 1.

```js
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
```

**A Proper Random Function:**<br>
```js
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
```

### Some Methods

- `Math.trunc(x)` Returns the integer part of x
- `Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive)

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Boolean

**Everything With a "Value" is True: Boolean(x)=true**
```js
100

3.14

-15

"Hello"

"false"

7 + 1 + 3.14
```

**Everything Without a "Value" is False: Boolean(x)=false**

```js
0
-0
""
undefined
null
NaN
```

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Ternary

```js
variablename = (condition) ? value1:value2 
```


<p align="center"><a href="#index">back to index<a/></p>

---
---

## Switch

- The `default` case does not have to be the last case in a switch block

```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

### Strict Comparison

- Switch cases use **strict** comparison (===)  .


<p align="center"><a href="#index">back to index<a/></p>

---
---

## Loops

### for in

The **`for...in` statement** iterates over all **enumerable** properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

```js
for (key in object) {
  // code block to be executed
}
```

```js
for (variable in array) {
  code
}
```

### for of

- The JavaScript `for of` statement loops through the values of an **iterable** object.
- It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

```js
for (variable of iterable) {
  // code block to be executed
}
```

```js
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```

### `for ... in` vs `for ... of`

I found a complete answer at [Iterators and Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html) (Although it is for TypeScript, this is the same for JavaScript too)

Both `for..of` and `for..in` statements iterate over lists; the values
iterated on are different though, `for..in` returns a list of keys on
the object being iterated, whereas `for..of` returns a list of values
of the numeric properties of the object being iterated.

Here is an example that demonstrates this distinction:

```js
let list = [4, 5, 6];

    for (let i in list) {
       console.log(i); // "0", "1", "2",
    }
    
    for (let i of list) {
       console.log(i); // "4", "5", "6"
    }
```

Another distinction is that `for..in` operates on any object; it serves
as a way to inspect properties on this object. `for..of` on the other
hand, is mainly interested in values of iterable objects. Built-in
objects like `Map` and `Set` implement `Symbol.iterator` property allowing
access to stored values.

```js
 let pets = new Set(["Cat", "Dog", "Hamster"]);
    pets["species"] = "mammals";
    
    for (let pet in pets) {
       console.log(pet); // "species"
    }
    
    for (let pet of pets) {
        console.log(pet); // "Cat", "Dog", "Hamster"
    }
```


### while

```js
while (condition) {
  // code block to be executed
}
```

### do while

```js
do {
  // code block to be executed
}
while (condition);
```

### Scope

```js
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
```

```js
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5
```

<p align="center"><a href="#index">back to index<a/></p>

---
---

## label
The labeled statement can be used with `break` or `continue` statements. It is prefixing a statement with an identifier which you can refer to.

### continue
```js
let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
```

### break

```js
let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         break loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Notice the difference with the previous continue example
```


<p align="center"><a href="#index">back to index<a/></p>

---
---


## Iterable

- Iterables are iterable objects (like Arrays).
- Iterables can be accessed with simple and efficient code.
- Iterables can be iterated over with `for..of` loops

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Sets

- A JavaScript Set is a collection of unique values.
- Each value can only occur once in a Set.
- If you add equal elements, only the first will be saved.

```js
// Create a Set
const letters1 = new Set(["a","b","c"]);

// Create a Set
const letters2 = new Set();

// Add Values to the Set
letters2.add("a");
letters2.add("b");
letters2.add("c");
```

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Maps

- A Map holds key-value pairs where the keys can be any datatype.
- A Map remembers the original insertion order of the keys.
- The `map_name.set(key, value)` method can also be used to change existing Map values
- The `map_name.get(key)` method gets the value of a key in a Map
- `map_name.size` property returns the number of elements in a Map
- `map_name.delete(key)`
- `map_name.has(key)` method returns true if a key exists in a Map


```js
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
```



<p align="center"><a href="#index">back to index<a/></p>

---
---


## Maps vs Objects

|          |     **Object**     |  **Map** |
|----------|:-------------|:------|
| **Iterable** |  Not directly iterable | 	Directly iterable |
| **Size** |    Do not have a size property   |   Have a size property |
| **Key Types** | Keys must be Strings (or Symbols) |    	Keys can be any datatype |
| **Key Order** | Keys are not well ordered | Keys are ordered by insertion |
| **Defaults** | Have default keys | 	Do not have default keys |


<p align="center"><a href="#index">back to index<a/></p>

---
---


## Data Types

```js
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```

### null vs undefined

`undefined` and `null` are equal in value but different in type:

```js
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
```

<p align="center"><a href="#index">back to index<a/></p>

---
---


## JS Type Conversion

### Strings to Numbers

- `Number()`
- `parseFloat()`
- `parseInt()`
- unary `+`

```js
Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN


let y = "5";      // y is a string
let x = + y;      // x is a number

y = "John";   // y is a string
x = + y;      // x is a number (NaN)
```

### Numbers to Strings

- global method `String(number)`
- Number method `number.toString()`
- `toExponential()`
- `toFixed()`
- `toPrecision()`

### Dates to Numbers
### Numbers to Dates
### Booleans to Numbers
### Numbers to Booleans

<p align="center"><a href="#index">back to index<a/></p>

---
---



## Bitwise

|   **Operator**       |     **Name**     |  **Description** |
|----------|:-------------|:------|
| &    | 	AND	                  |  Sets each bit to 1 if both bits are 1  |
| \|    | 	OR	                  |  Sets each bit to 1 if one of two bits is 1  |
| ^    | 	XOR	                  |  Sets each bit to 1 if only one of two bits is 1  |
| ~    | 	NOT	                  |  Inverts all the bits  |
| <<   | 	Zero fill left shift	|  Shifts left by pushing zeros in from the right and let the leftmost bits fall off  |
| >>   | 	Signed right shift	  |  Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off  |
| >>>  |  Zero fill right shift	|  Shifts right by pushing zeros in from the left, and let the rightmost bits fall off   |                   


<p align="center"><a href="#index">back to index<a/></p>

---
---


## RegEx

- A regular expression is a sequence of characters that forms a search pattern.
- The search pattern can be used for text search and text replace operations.

```js
// Syntax
/pattern/modifiers;

// eg
/w3schools/i;
```

In JavaScript, regular expressions are often used with the two string methods:
- `search()`
- `replace()`


### Patterns

#### Brackets

**Brackets** are used to find a range of characters:



| **Expression** |	**Description**	|
|--------------|:-----------------|
| `[abc]`	       |  Find any of the characters between the brackets	 |
| `[0-9]`	       |  Find any of the digits between the brackets	 |
| `(x|y)`	       |  	Find any of the alternatives separated with \| |


#### Metacharacters

**Metacharacters** are characters with a special meaning:

| **Metacharacter** |	**Description**	|
|--------------|:-----------------|
| `\d`	       |  Find a digit	 |
| `\s`	       |  Find a whitespace character	 |
| `\b`	       |  	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b \| |
| `\uxxxx` |  Find the Unicode character specified by the hexadecimal number xxxx |

#### Quantifier

**Quantifiers** define quantities:

| **Quantifier** |	**Description**	|
|--------------|:-----------------|
| `n+`	       |  Matches any string that contains **at least one** n	 |
| `n*`	       |  Matches any string that contains **zero or more** occurrences of n	 |
| `n?`	       |  Matches any string that contains **zero or one** occurrences of n |



### Modifiers

| **Modifier** |	**Description**	|
|--------------|:-----------------|
| `i`	       |  Perform case-insensitive matching	 |
| `g`	       |  Perform a global match (find all matches rather than stopping after the first match)	 |
| `m`	       |  Perform multiline matching |


### Using the RegExp Object

The following example searches a string for the character "e":

```js
/e/.test("The best things in life are free!");
/e/.exec("The best things in life are free!");
```

#### test
- The `test()` method is a RegExp expression method.
- It searches a string for a pattern, and **returns true or false**, depending on the result.

#### exec()

- The `exec()` method is a RegExp expression method.
- It searches a string for a specified pattern, and **returns the found text** as an object.
- If no match is found, it returns an empty (null) object.


<p align="center"><a href="#index">back to index<a/></p>

---
---

## Scoping

- Variables declared with `var`, `let` and `const` are quite similar when declared inside a function. They all have **Function** Scope
- Variables declared with `var`, `let` and `const` are quite similar when declared outside a block. They all have **Global** Scope
- If you assign a value to a variable that has not been declared, it will automatically become a **GLOBAL** variable.

```js
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
```

- Global variables defined with the `var` keyword belong to the window object
- Global variables defined with the `let` keyword do not belong to the window object


<p align="center"><a href="#index">back to index<a/></p>

---
---


## Hoisting

- Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
- hoisting of `var/function/function*` is different than that of `let/const/class`, `let/const/class` are hoisted but they can't be used before they are declared.
- to read complex details of hoisting - [stackoverflow](https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-hoisted)

```js
// declaration i.e. var a is moved to top
// and initialized with undefined by default

console.log(a)
// undefined

a = 5 
console.log(a)
// 5

var a 

```

- Initialization is not hoisted:

```js
// declaration i.e. var a is moved to top
// and initialized with undefined by default

console.log(a)
// undefined
// Does it make sense that a is undefined in the last example?
// This is because only the declaration (var a), not the initialization (=5) is hoisted to the top.

var a = 5

```

<p align="center"><a href="#index">back to index<a/></p>

---
---


## Strict Mode

- The purpose of `"use strict"` is to indicate that the code should be executed in "strict mode".
- With strict mode, you can not, for example, use undeclared variables.
- Deleting a variable (or object or function) is not allowed.
- Duplicating a parameter name is not allowed.
- Octal numeric literals are not allowed.
- Octal escape characters are not allowed
- The word eval cannot be used as a variable
- The word arguments cannot be used as a variable
- The with statement is not allowed
- For security reasons, eval() is not allowed to create variables in the scope from which it was called
- Writing to a read-only property is not allowed

```js
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error
```

- Declared inside a function, it has local scope (only the code inside the function is in strict mode):
```js
x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}
```

- Writing to a get-only property is not allowed:
```js
"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error
```

- The this keyword in functions behaves differently in strict mode. The this keyword refers to the object that called the function. If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

```js
"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();
```

<p align="center"><a href="#index">back to index<a/></p>

---
---

##  Detailed Concepts

### `iterables` vs `enumerables`

There are a few things that stand out one from another.

A bit about Iterable:
- Iterable objects are a generalization of arrays. That's a concept that allows us to make any object useable in a `for..of` the loop;
- The iterable is an interface that specifies that an object can be accessible if it implements a method who is key is [symbol.iterator] [link][1].

A bit about Enumerable:
- It simply means that the property will show up if you iterate over the object using `for..in` loop or `Object.keys`;
- An enumerable property in JavaScript means that a property can be viewed if it is iterated using the `for…in` loop or `Object.keys()` method. All the properties which are created by simple assignment or property initializer are enumerable by default.


1. Enumerable [`for in`] looking at the properties that are inside of the object, not the values [only where `enumerable: true` - by default for all props];
2. Iterable [`for of`] looking at the values;


A bit more in-depth:

> Iterator is another object that is attached to the array, and it tells other function how to access all the different values inside of it.
there are array, string, NodeList, Sets, Maps they have built-in iterators, but the object does not have it.

The object is not iterable by default, but you can implement it.

So you can use 
- `for .. of` for `[array, Map, Set, String]` to iterate over values;
- `for .. in` for an array to iterate over a key;
- `for .. in` for objects to  enumerate its (object's) properties;
- looping over [NodeList][2].

Please, take a look at the example either here or using a provided link for a sandbox.
Sandbox [link][3] for the same example.

```js
let arr = ['value1', 'value2', 'value3'];

let obj = {
  propName1: 'propValue1',
  propName2: 'propValue2',
  propName3: 'propValue3'
};

console.log('=====================WORKING WITH ARRAYS===================');
console.log('For Of ')
for (const value of arr) {
  console.log('value: ', value);
}

console.log('For In');
for (const key in arr) {
  console.log('key: ', key, ' value: ', arr[key]);
}

console.log('=====================WORKING WITH OBJECTS===================');
console.log('For In:');
for (const prop in obj) {
  console.log('prop: ', prop, 'value: ', obj[prop]);
}

Object.defineProperty(obj, "definedPropEnFalse", {
  value: 'value of definedPropEnFalse',
  enumerable: false,
});

Object.defineProperty(obj, "definedPropEnTrue", {
  value: 'value of definedPropEnTrue',
  enumerable: true,
});

console.log('For In for Objects with enumerables:');
for (const prop in obj) {
  console.log('prop: ', prop, 'value: ', obj[prop]);
}

console.log('For In for Objects with Object.keys and forEach:');
Object.keys(obj).forEach(e => console.log(`key=${e}  value=${obj[e]}`));


console.log('=====================WORKING WITH STRINGS===================');
let str = "Go Over A String"
console.log('Using For Of for String:');
for (const char of str) {
  console.log(char);
}


console.log('=====================WORKING WITH Sets===================');
console.log("Looping over a Set");
let testSet = new Set();
testSet.add('Hello');
testSet.add('Hope');
testSet.add('You are getting it xD');

for (const setItem of testSet) {
  console.log(setItem);
}


console.log('=====================WORKING WITH Maps===================');
console.log('Iterate over Map using For of')
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const [key, value] of myMap.entries()) {
  console.log(key, value);
}
```
___
#### You may ask how should I remember it? - Easy!

A mnemonic: 
- '**o**'f -> not '**o**'bjects; 
- '**i**'n -> not '**i**'terables.

Another mnemonic:
- `for..in..keys` === **foreign keys** === use `for...in` for keys;
- `for...of` for **values**.

`in` gives you index.

Taken from [this post's comment](https://stackoverflow.com/a/29286412/6901693)
___

If an object isn’t technically an array but represents a collection (list, set) of something, then `for..of` is a great syntax to loop over it.


  [1]: https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4
  [2]: https://stackoverflow.com/questions/56990500/javascript-iterate-through-nodelist
  [3]: https://jsfiddle.net/UtmostCreator/7wp4jLon/

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Continue from this