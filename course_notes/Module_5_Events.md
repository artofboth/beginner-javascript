# Events
Things in the DOM will emit events when they are interacted with. 

## Event Listeners
We can attach _event listeners_ to all elements to listen to those events. The process is: 
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

## 