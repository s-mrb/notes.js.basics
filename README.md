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
// x===y false
// x==y  false
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