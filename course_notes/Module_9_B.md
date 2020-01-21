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