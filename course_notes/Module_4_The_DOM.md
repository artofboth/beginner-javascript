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


`querySelector` and `querySelectorAll` are used to grab elements, getting passed a selector. 

`querySelectorAll` will give you multiple elements. 
`querySelector` will only ever give you the first one.

JS selectors are the same as CSS ones. 

## Methods
When you select a DOM element, it is actually an object that has a lot of properties and values within it. `console.dir(element)` will show you all the stuff available. 