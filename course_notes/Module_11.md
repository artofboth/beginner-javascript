# Prototypes

This is the basis of object-oriented programming: creating instances of an object.

## New Keyword

Using `new`, we are actually creating an object: an instance of the *constructor* that comes with all the methods relevant to the constructor. 

We can use lteral syntax (`{}`, `[]`) to create arrays and objects instead of the keyword `new`. 

```
function Pizza(type){
    console.log(`making a ${type} pizza!`)
}

const mushroomPizza() = new Pizza(mushroom);
```

## This Keyword
*The thing to the left of the dot if you're calling a method. The instance of an object that a function is bound to.*

If you use an arrow function, `this` will be equal to whatever it was at a higher function, it does not change. You can use it for accessing the value of `this` from a function nested within another function, **inheriting whatever its value was at a higher level**.

Using `this` within an object allows your to store data (properties) and functionality (methods) about that instance:
```
function Pizza(toppings =[], customer){
    this.customer = customer;
    this.toppings = toppings;
}
```

## Prototypal Methods
Adding functionality to a class. 

If you add a function within a constructor function, it will be created every single time you create an instance object. This isn't necessary: the data for each instance will be different, but the functionality is the same for all, so there is no need to re-create it every time. 

**We can add methods to the prototype**

`Pizza.prototype.eat = function(){}`

`mushroomPizza.eat()`

You can alter these methods and they will apply to every single instance. 

## Bind, Call and Apply
All these change the scope of what `this` is equal to, inside of a function. 

### Bind
`bind` will bind (duh) whatever we want to bind `this` to. This is useful when youw ant to use a method of an object with another object. 

`const sayHi = person.sayHi.bind(jenna)`

For example, you can bind querySelector to the document and create a function that replaces it, so you don't need to type it every time:

`cost $ = document.querySelector.bind(document)`

You can also use it to prep a function that has pre-loaded arguments. 

### Call
`call` does the same as `bind` but runs the function immediately. Use `bind` if you want to bind a function and call it later, and `call` if you want to run it immediately. 

### Apply
Identical to `call` but accepts a single array of arguments instead. 

---

## Other Notes
### Polyfilling
If an older browser does not yet support certain functionality, you can hard code a function that replicates that functionality and activate it conditionally. 



