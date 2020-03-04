# Advances Flow Control

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
    const pizzaPromise = new Promise( function(resolve, reject){
        resolve('Made a pizza');
    });
    return pizzaPromise;
```

- Promises are **returned** immediately, but **resolved** at a later point.
- Each promise is either resolved or rejected.
- The function above doesn't give you a pizza, it gives you a promise of a pizza. To get the pizza:

```
makePizza().then(function(pizza){
    cosole.log(pizza);
})
```




### Event Loop
Philip Roberts: what the hell is the event loop anyway?

