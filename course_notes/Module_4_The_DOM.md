# The DOM

A lot of environments can run JS (browsers, servers, robots, etc). Probably the most popular is the **web browser**. And a great part of using JS in a browser is interacting with elements on the page. 

## DOM = Document Objects Model
When you write HTML and view it in the browser, the browser turns it into something called the DOM.

The DOM is represented in a tree that looks very much like HTML. The core concepts of this document transcend all frameworks. 

**The Navigator** is an object that gives you information about the device, beyond the browser itself. 

**The Window** Object is
everything about the currently open window, including the tabs, scrollbars, etc. 

**The DOM** is everything between your `<html>`tags. Just like the Window object is accessible through the `window` keyword, the DOM is accessible through the `document` keyword. 

JS scripts should be placed at the end of your HTML so they run after the page has been downloaded.

## Selecting Elements

`querySelector` and `querySelectorAll` are used to grab elements, getting passed a selector. _Elements_ are things wrapped in tags `<like so>`

`querySelectorAll` will give you multiple elements. 
`querySelector` will only ever give you the first one.

JS selectors are the same as CSS ones. 

## Methods
When you select a DOM element, it is actually an object that has a lot of properties and values within it. `console.dir(element)` will show you all the stuff available.  There are heaps of **methods** available to access and alter those properties and values. 

## Classes

We can alter classes to elements through `classList`. 

````
const elementName = document.querySelector('.element-class');

elementName.classList.remove('element-class');
````
`toggle` will add a class if it isn't there and remove it if it is there. 

### Attributes

Attributes are anything provided to an element as additional info such as the `src` and `alt` attributes in an `<img>` tag. 

You can access all the attributes in JS. `element.alt = 'Description'` will add an `alt` attribute to the element. This works for standards attributes, whereas `element.setAttribute('attribute', 'attribute content')`. However, you shouldn't go around creating custom attributes like this. 

To use custom attributes you generally create what are called **data attributes**, to attach a piece of meta-data to an element, using `data-yourAttributeName`. You can then use `.dataset` to grab an object of all the data values you've created. 

## Creating HTML
`var element = document.createElement(tagName)` creates an HTML element. You can then set attributes and classes as you would with the techniques above. 

You then place those in the DOM through `appendChild`, which can be called against any node (including elements you've just created in JS). For example, to place it within the `<body>`, you'd write `document.body.appendChild();`It's best practice to start with children and siblings and then do parent elements last, so the DOM has to 'repaint' itself only once. 

Alternatively you can use `element.append()` but browser compatibility is still low. 

`nodeName.insertAdjacentElement('positionName', elementName)` works also. 

**Cloning Nodes** `nodeName.cloneNode();`

## HTML from Strings

`nodeName.innerHTML` canbe used to access the HTML inside an element, but it can also be used to set it with a string within backticks:
`````
nodeName.innerHTML = `<tag> HTML Content </tag>`;
`````
If it is valid HTMl the browser will pass this text as HTML. You can use it with multiple lines and indentation just as you would regular HTML. 

You can then place variables through `${variableName}`

The downside is that **these are not elements**, they are **strings**. That means we can't access them as we would regular elements, you can only do that after they've been placed in the DOM through selecting them as you would any other element. 

To get around that, you can `createRange().createContextualFragment(myHTML)`. From this, we turns the string into DOM elements and they become accessible as such. 

The security pitfall is that if you're grabbing user input through this method, the user can include any HTML tags they like, including `<script>` tags. So this allows for **cross site scripting**, allowing the user to run any JS they want on your page.

> Any time you allow a third party to run JavaScript on your page that is a huge security hole. The only JavaScript that should be running on your page should be JavaScript written by your or authorised parties like Google Analytics.

## Traversing and Removing Nodes
`nodeName.remove()` will remove it. 

_Traversing means going up, down or over_. You can navigate around the DOM by selecting elements and then the things above, below, inside, around, etc. This isn't the best way to select things though as if the structure of the HTML is changed then your selection is ruined. 

### Nodes vs Elements
Everything here is a node, and if it is wrapped in a tag it is also an element, but not the other way around. 





