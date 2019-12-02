# The Basics

ctrl + R: clear console.

## Running and Loading JS

- It's worth almost always running your scripts at the end of the closing `<body>` tag, so it can access everything in the DOM.
- `<script>` tags are not self-closing.
- You can also run it in Node.JS it can run on the context of the server, instead of in the browser.

## Variables and Statements

### Statements

A statement is an instruction to the interpreter (computer, browser, etc) to do something. When you're done with your statement, you close it with a semi-colon `;` Unless it is a code block: then you can just close them with a `}`.

### Variable Declarations

- `var` and `let` can be updated, and `const` can't.
- `var` variables are scoped differently than `let` and `const`. `var` variables are _function scoped_ variables (only available inside the parent function), and the others are _block scoped_ variables.
- You only need to declare a variable with `var`, `let`, or `const` once.
- `const` can't be undefined, it'll create an error.

> I use `const` by default, because I don't know if I'll need to update it. If I need to change its value, I'll change it to a `let`.

#### Strict Mode

If you type `use strict;` at the start of your JS code. This ensures that the console will give an error if you don't declare your variable types. This is enforced by JS modules however, so it's not necessary to always type it in.

### Naming conventions

- Should not start with a capital unless they are a class.
- Must start with either an `a-z` letter, an `_`(commonly used by Lodash) , a `$` (jQuery)
- Dashes (`like-this`) are not allowed in JS variables.

---

## JS Code Quality and Formatting

**ES Lint** identifies bad practices. **Prettier** formats it. You can use them simultaneously.

- https://github.com/wesbos/eslint-config-wesbos
- `/* eslint-disable */` comment on the first line to turn it off on your file.

---

## Types

Anytime that you have a value (something that can be assigned to a variable or passes into a function) it is one of **7 Types**.

`typeof` will return you the type.

### Primitive Types

#### Strings: Used for holding text.

What's the difference between `""`, `''` and ` `` `? Quotes and apostrophes are common in normal language, so they need to be escaped within strings, with backticks not so much.

Backticks allow for **multi-line** strings as well: this is very helpgul when you'd like to make HTML.

- `+` **Concatenation** = When one or more strings are combined into one
- `${x}` **Interpolation** = when a variable is placed inside a string.
- `\` **Escaping characters** = indicate that you want to use the actual character in a string.

#### Numbers

Numbers in JS are simple, you can create both foats and integers. You just have to be aware that when you mix strings and numbers with `+` it can create bugs. `Math.round(20.5)` **Helper Methods**

`%` Modulo Operator (gives you the remainder)

Decimal Math doesn't always work! Some decimal numbers cannot be represented with accuracy. This is common with programming languages: http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html

Computers have limits to how much they can calculate: when you go beyond that limit, you'll get a result of `infinity`

`NaN` = 'not a number'

#### Boolean

- Null
- Undefined

### Object

Everything in JavaScript is an object, and objects are used for collections of data and collections of functionality, as below. To access things from this object you'd write `person.first`, `person.last`, etc.

```
const person = {
    first: 'wes',
    last: 'bos',
    age: 100
}
```

Note that the order doesn't matter in an object, if you'd like the order to matter use an array.

### Undefined & Null

`undefined` comes about when a variable has been created but not set. In contrast, `null` is a value of nothing, it has to be explicitly set to `null`. So `undefined` has no value set to it, `null` has a value set to it (nothing)

https://en.wikipedia.org/wiki/Mononymous_person

### Boolean

Can be set or calculated, and it's used for logic.

#### Equality

- `=` is for setting / updating values.
- `===` check that the value of two things **and** their type is equal.
- `==` is _almost always_ bad practice, as it checks **only** the value. so `'10' == 10` will result in `true`. You should use techniques that prevent you from having sloppy code.

### Symbol

Guaranteed unique identifier.
