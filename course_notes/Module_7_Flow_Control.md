# Logic and Flow Control

## If Statements
> If Statements are the foundation of all logic in JavaScript

- If you have an `if` within a function you can `return` the statement and stop it from running afterwards, instead of using `else`

## Operators

 - `===` equals
 - `!==` does not equal
 - `<` less than `>` greater than
 - `||` or
 - `&&` and

 ## Truthy and Falsy
The if statement tries to evaluate whatever the condition as true or false, so we don't need to stick to things that are booleans. Things such as empty strings, NaN and undefined are evaluated as *falsy*. 

## BEDMAS

- **B**rackets
- **E**xponents
- **D**ivision 
- **M**ultiplication 
- **A**ddition 
- **S**ubtraction

JS uses the regular order of mathematical operations. 

### Coercion
We can coerce something with a truthy or falsy value into a real boolean that returns `true` or `false` by placing `!` and `!!` in front of it. This is not necessary if you understand the concepts above.

## Ternary
A shorthand if else statement: it takes a condition, what to do if it's true, and what to do if it's false. 

`var name = condition ? 'true' : 'false'`

### Condition Chaining
You can use this for running functions based on wether something is true.

`isAdmin ? showAdminBar() : null`

In the example above we need to include what to do when the condition is false even though we don't want anything to happen. A way to get around this would be to use condition chaining like so:

`isAdmin && showAdminBar()`

If the first item is false, the second item will never run. So the result is the same as the ternary above.

## Other

You can place if statements in a block with `{}`. However if they are a single line you can write them without the curly brackets: `if(isAdmin) showAdminBar()` is correct. Wether you like that or not is up to you. 

## Case Switch

Sometimes easier to read than `if` statements, but they need to contain defined individual cases, not conditions. You must also `break` after each case, and it is best preactice to include a `default` case.

````
function handleKeyDown(e){
    switch(e.key){
        case 'ArrowUp':
            y = y - 1;
            break;
        case 'ArrowDown':
            y = y + 1;
            break;
        default: 
            console.log('not a valid move');
            break;
    }
}
````
 ## Intervals and Timers

 They are methods on the `window` object and take two parametres: the function to be run, and the time in miliseconds of either the timer or interval period.

`setTimeOut`: something happens after a period. 

`setInterval`: something happens every so often. The only gotcha is that it triggers the function only after the time of the interval has ellapsed at the start. 


