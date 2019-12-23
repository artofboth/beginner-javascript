# Events
Things in the DOM will emit events when they are interacted with. 

## Event Listeners
We can attach _event listeners_ to all elements to listen to those events.

It takes three arguments: the event it's listening for, the function to run when the event happens, and an options object.

The process is: 
- Get something (select an element from the DOM)
- Listen for something ( an event)
- Do something (call a function)

```
const elementName = document.querySelector('.class');

elementName.addEventListener('typeOfEvent', callBackFunction, )`
```

A _callback function_ is just a regular function passed to a method, called at a later point in time. Instead of us calling the function directly we provide a reference to it and the browser will call it for us when it is needed. 

Your callback function block can be placed inside the parametres, it doesn't have to be a separate thing, like below: 
`````
button.addEventListener('click', function(){
    console.log('it works');
});
`````
To remove an event listener you reference the event and the function name once again: `button.removeEventListener`('click', functionName)`. Anonymous functions that are not stored in variables cannot be removed. 

_Binding_ means taking a function and listening for a specific click against an element. 

### Listening to multiple elements

Selecting multiple elements give you a Node List, and you must loop over each element in this list and attach event listeners to them individually. 

`.forEach`is a method that will run a function for each item in our Node List. The function takes a parametre that references each individual item. 

````
const elements = document.querySelectorAll('.class');

elements.forEach(function(singleElement){
    function block;
});
`````

The function doesn't have to be anonymous, you can have it outside your loop using the parametre to reference each individual element in the Node List.

````

const elements = document.querySelectorAll('.class');

function attachListener(singleElement){
    singleElement.addEventListener('click', functionName)
}

elements.forEach(attachListener);
````

---

## Event Object 

If we have a single function handling the clicking of multiple buttons, how do we know which button is getting clicked? 

The _event object_ is an object filled with information and methods about the event. To access this object we modify the callback function to take a parametrer: `function handleEvent(event)`.

You can access anything avout the element via `event.target`. 

`event.currentTarget` – the element that fired the event listener, as opposed to the specific element you clicked (a `<button>` vs the `<strong>` tag on text inside the button)

### Propagation
When you interact with a small element in the page, you are also interacting with all the things it is nested in: the `<div>`, the `<body>`, the `<html>`, the window, the browser, all the way to the OS. So a click in a button _bubbles up_ all the way to the OS. 

Your can stop it with a method on the event: `event.stopPropagation()`. 

### Capture
An interaction such as a click actually goes through every single DOM node until reaching the lowest thing (such as button). So you can do the opposite of stopping propagation through `capture` in the options object in the event listener. 

`{ capture: true }`

## This vs e.currentTarget
`this` is a special word in JS: if you have a callback function and you'd like to reference the element it was called against, you can use `this`. It is always equal to **whatever is to the left of the dot** on the `addEventListener`. 

However it can be confusing because it references something else when usign arrow functions, it is recommended to use `e.currentTarget` as a _safer_ way to reference your element.

## Prevent Default

A few elements in HTML have default functionality. To prevent it from happening, use `event.preventDefault()`
