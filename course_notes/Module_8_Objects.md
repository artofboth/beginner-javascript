# Objects

> Everything in JavaScript is an object. Objects allow us to group together properties and values and they have many uses from storing related data and functionality all the way to creating your own function types. 

- Objects are used for when the order of the properties does not matter. 
- Your store values within keywords inside the object, and they can be of any type. 
- Properties of an object mostly follow the same rules as variables, with some exceptions (property names can include dashes and spaces and number)
- **Comma Dangling**: it's best practice to include a comma after your properties, even if they're not followed by anything. 
- You can nest as many sub-properties as you want in objects within objects. 
- You can access properties `object.property` or `object['property']`- This last one allows you to use variables and to search property names that don't follow variable naming rules. 
- Properties in an object can be changed. You can create a *frozen* version of an object by creating a new variable and using Object.feeze(objectName);

### Methods
Remember: a method is a function that lives inside of an object.  You can set any property inside an object to be a function.

You can declare them as you would other properties (`propertyName: function () {}`) or in the shortened way: `propertyName () {}`

### References vs Values
When you refer to another object through its name, you are no creating a copy of it, you are pointing back to the original object (unlike strings). So if you say for instance `const object2 = object1` and you update a property in `object2`, the change will apply to `object1` also. 

This is valid for arrays, maps and sets as well.

#### Spreading
To copy every property in an object and place it within a new object, we use spreading: `const object2 = { ...object1}`.

You can spread as many objects as you want, merging their contents into a single one, and adding new properties. 

However, this creates a *shallow copy* that goes only one level deep, so if you update properties that are nested within other properties, they will once again alter the original object. 

To make a *deep clone* of an object you can use a library (such as Lodash).

You can use `JSON.stringify(objectName)` to convert your object into a string that can then be converted back into an object through `JSON.parse`. 

---


## Maps

`const myMap = new Map()``

- Maps are useful for storing metadata, referencing objects. 
- Order of keys is guaranteed, unlike objects. 
- A map allows you to put any type into both the key and into the value.  
- You can't put methods inside maps. 
- JSON doesn't handle maps. 


`myMap.set('name', 'julia')`



