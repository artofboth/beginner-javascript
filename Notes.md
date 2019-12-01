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

> I use `const` by default, because I don't know if I'll need to update it. If I need to change its value, I'll change it to a `let`.

#### Strict Mode

If you type `use strict;` at the start of your JS code. This ensures that the console will give an error if you don't declare your variable types. This is enforced by JS modules however, so it's not necessary to always type it in.

### Naming conventions

- Should not start with a capital unless they are a class.
- Must start with either an `a-z` letter, an `_`(commonly used by Lodash) , a `$` (jQuery)
- Dashes (`like-this`) are not allowed in JS variables.

  ***

## JS Code Quality and Formatting

**ES Lint** identifies bad practices. **Prettier** formats it. You can use them simultaneously.

- https://github.com/wesbos/eslint-config-wesbos

## Types
