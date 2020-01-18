# Scope
> Where are my variables and functions available to me?

## Variable Scoping

### Global Variables
- Available everywhere, when you can access them from any JS running on the page. 
- In the browser the global scope is called the window. `var` variables are attached to the `window` object (so are functions) 
- Using **global scope** isn't a great idea in most use cases.

### Function Scope
- When variables are created inside of a function, theyre only ever available inside of that function, unless it is **explicitly returned**.
- JS looks for variables inside the function, then goes up a scope if they are not found. 

### Block Scoped
Variables created inside if statements and for loops - Think of curly brackets as gates: when a variable is created inside a block, it can't be accessed outside it. 

`var`, `let` and `const` are scoped differently. `var` variables _are not block scoped_, only function scoped.

It's best practice to first choose `const`, then `let`, and avoid `var` for that very reason. 

### Scope Lookup
_Lexical Scoping_ / _Static Scoping_: Means that JS scope lookup happens where the functions are defines, not where they are run.

The program below console logs 'snickers', even though the `dog` si reassined withint `go()`, because it is doing the lookup where `logDog()`is defined. 

````
const dog = 'snickers';

function logDog(){
    console.log(dog);
}

function go(){
    const dog = 'sunny';
    logDog();
}

go();
````

## Function Scoping

Functions are scoped pretty much the same as variables: you can place functions within functions, but that's a bit rare. 

## Hoisting
Allows you to access functions and variables before they have been declared. 

Variable declarations are hoisted, but not the value assigned to them. 

Only regular function declarations are hoisted, not arrow ones etc.

---

# Closures

> A Closure is the ability to access a oarent level scope from a child level scope even after the parent fuction has been terminated.

In the code below, we are able to access variables from the `outer` function even after it is finished and even though those variables are not returned - Unlike what we'd expect from the scoping rules we just learnt 
 
````
function outer(){
    const outerVar = 'Hey I am the outer Var!''
    functio inner(){
        const innerVar = 'Hey I am the inner var!'
        console.log(innerVar);
        console.log(outerVar);
    }
    return inner;
}

const innerFn = outer();
innerFn();

````

We will revisit this over time, as it is a complex concept. 