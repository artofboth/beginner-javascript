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

## 

---
## Additional Notes
`newDate()` created a JS date object, you can pass it a string to convert it into an actual date. You can also add `getTime()` to it to convert it into an unix epoch (the number of miliseconds since 1st January 1970). To create a timestamp out of the current time you just use `Date.now()`.



