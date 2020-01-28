# Looping 

Looping methods do exactly that: they loop over something and run a function.

`array.loopingMethod(function)`

## .forEach
- Looping over an array, running a function for every single item. 
- `forEach` doesn't return any values.

## .map 
- Map takes in data, performs an operation on the data and then returns the altered data. 
- You can chain mapping methods one after the other. 
- Whatever you return from your map function will replace the original data, **however you are not mutating the original array**: you are returning a brand new one.
- This is useful for when you get data in a format that isn't the format you need to work with. 

## Filter and Find
`arrayName.filter(function)` loops over every single item in an array and returns a **new array** with the items that return true, according to the set condition in the function.

`find` is the same, but it returns an **object** with the item in the array that matches a condition. 

### Higher Order Function
A function that returns another function. 

So instead of writing a single function that looks through a student list and finds them by ID, then another that finds them by name, etc, you can create one that works for all properties, like so: 
```
function findByProp(prop, propWeAreLookingFor) {
    return function isStudent(student) {
        return student[prop] === propWeAreLookingFor;
    }
}

const student = student.find(findByProp('id', '565a'));
```

## Reduce
Takes in an array of data and it returns a result or a single value.

It takes two things:
- A  function with two arguments: `accumulator` (the value returned from the last instance of the loop) and a `currentValue` (the value to be added in this loop).
- Whatever you want to start the `accumulator` as. 

The example below loops over each item in the `orders` array and adds the current order' value to the tota.

```
function tallyNumbers( tally, currentOrder ){
    return tally + currentOrder;
}

const all Orders = orders.reduce(tallyNumber, 0);
```

## Other Loops

### For Loop

`for (let i = 0; i <= 7; i++){ something to run 7 times }`

- In the `canvas` element, you can pull out the raw data of each RGB pixel in the image through `ImageData` (four values, red, green, blue and alpha, for each individual pixel). For loops are useful for looping over that kind of data. 

### For Of
- Used for looping over **iterables** (things that have a length). The loop below returns each letter of the string `name`. 
- This loop can handle emojis. 
- Useful for sequencing promises. 
```
const name = 'wed bos';
for( letter of name){ console log(letter) };
```

### For In
- Used for looping over the keys of an object. 

### While Loop
- Takes a condition and runs infinitely until the condition is met. 
- Checks a condition and then runs a certain code.

### Do While Loop
- Does the above in the reverse order, running code and checking a condition after it has been run for the first time.  `do { block } while()`

---
## Additional Notes
`newDate()` created a JS date object, you can pass it a string to convert it into an actual date. You can also add `getTime()` to it to convert it into an unix epoch (the number of miliseconds since 1st January 1970). To create a timestamp out of the current time you just use `Date.now()`.



