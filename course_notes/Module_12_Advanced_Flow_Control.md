# Advances Flow Control

- [What The Heck is the Event Loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) - Phillip Roberts


## Asynchronicity
JS is a *single-threated language*, which means that only one thing can be run at a time. 

The **call stack** are tasks JS itself needs to run, and the **Web API** stores tasks that we are listening for, timers, etc. When something triggers those tasks, they get placed in the **callback queue**.

All callback functions are queued up, so they are run after other functionaliy. 

We don't want to stop our application from running when we are waiing for data to be fetched. 

## Promises
Callback functions are great, but it's really hard to coordinate multiple events. If you need to do one thing after another, you need to nest the callbacks within each other, because they all depend on the previous callback being run.

The solution to this are **promises**: IOUs for things that will happen in the future. Like an order number you get when you order a pizza.

```
function makePizza(){
    return new Promise( function(resolve, reject){
        resolve('Made a pizza');
    });
```

- Promises are **returned** immediately, but **resolved** at a later point.
- Each promise is either **resolved** or **rejected**. The logic to how the promise is returned is always inside the promise's body.
- The function above doesn't give you a pizza, it gives you a promise of a pizza. To get the pizza:

```
makePizza().then(function(pizza){
    cosole.log(pizza);
})
```

- You can chain as many `.then`as you like instead of nesting callbacks within each other. This runs them sequentially.
- You can also run them concurrently by having a mega-promise: `Promise.all()`that takes in an array of promises, and will only be resolved when all sub-promises have been resolved themselves.

```
dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

dinnerPromise.then(function {
    console.log(pizzas)
})
```
- `Promise.race()` allows you to resolve whatever sub-promise is resolved first. 


