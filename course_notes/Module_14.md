# Modules

A way to structure and organize your JS so that you can share your functionality and data accross multiple files and projects. 

- Modules have their own scope (just like functions). So you can't use variables from a module in another file directly (unles you export them), but you can use them within the module's own functions which in turn can be used by other modules. 
- Modules can hold anything (functionality, data, config)
- You can only use modules while working on a server.
- Each .js file is a module, and if you want to surface functionality from one file to another you first export it and then import it.



## File Architecture
Your generally only have a single `<script>` in your HTML that is your entry point into all your JavaScript code. 

We then add an attribute to our script tag: `type = "module"`.




- `util.js`
- `scripts.js`
- `handlers.js`

---
## Running a simple server

### VS Code Plugin
 - Extensions > Live Server
 - Install Live Server > Right click file and click Open with Live Server

 ### Browser-Sync 
 - `npm install -g browser-sync`
 - Go into your Modules folder > `broswer-sync start`

