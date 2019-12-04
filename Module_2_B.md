# Functions

**JS functions are values in themselves, and can be used accordingly.**

## Different ways to declare functions

### Standard

```
function inchToCm(inches) {
    const cm = inches * 2.54;
    return cm;
};
```

### Function Expression

Storing an _anonymous function_ as value in a variable.

```
const inchtoCm = function(inches) {
    return inches * 2.54;
};
```

### Arrow Function

```
const inchtoCm = (inches) => {
    return inches * 2.54;
};
```

### Implicit Return

```
const inchtoCm = (inches) => inches * 2.54;
```

If you have only a single parameter, you can remove the parenthesis.

```
const inchtoCm = inches => inches * 2.54;
```

### IIFE: _Immediatelly Invoked Functional Expression_

A way to run an anonymous function immediatelly when it is created.

```
(function(){
    console.log('Running this Function');
}) ();
```

### Returning Objects

```
function makeABaby(first, last){
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }

    return baby;
}
```

```
const makeABaby = (first, last) => {
    return {
        name: `${first} ${last}`,
        age: 0
    }
}
```

```
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
```

### Methods

_A method is simply a function that lives insite of an object._ `console.log()`: `log` is a function that li

### Callback Functions

Something that will happen when something is done, such as clicking a button.

```

function handleclick(){
    console.log('Message');
}

button.addEventListener('click', handleClick)
```

```
button.addEventListener('click', function(){
        console.log('Message');
})
```

or after a timeout: the below will run `functionName` after 1000 miliseconds (one second). You can do it as above by either calling a function you declared beforehand

```
setTimeOut(functionName, 1000);
```

Or declaring it directly within `setTimeOut` as an anonymous function

```
setTimeOut(function(){
    console.log('Message');
}, 1000);
```

Or an arrow function

```
setTimeOut(()=> { console.log('Message') }, 100));
```

---

**Hoisting** - A fuction declared with the function keyword, is _hoisted_ by JS to the top of the file, so it doesn't care about the order of the document. You can call it even before it's declaration.

Curly Brackets `{}` mean either a block of code or the creation of an object

Parenthesis `()` always run first in JS.

---
