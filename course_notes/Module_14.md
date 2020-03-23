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

## Bundlers

- Parcel, Pika, Webpack, Rollup
- We use bundlers yo ship code to a browser in the most efficient way possible. 

### Developing
1. Go to your terminal and your project folder
2. `npm init` - Create a package.json file 
3. `npm install parcel-bundler --save-dev` - Places parcel under a dev dependency, not needed for the application to run but needed for a developer to work on it. 
4. Add to the scripts section of the .json file: `"start": "parcel index.html"`
5. `npm start`
6. If you get a regenatorRuntime error use `"browserlist": ["last 1 chrome versions"]`
7. If you have other weird errors feel free to delete your `cache` and `dist` folders.

### Building
Once you're done developing you can build a compiled version of your JS file
1. Add `"build": "parcel build index.html"` to your package.json's scripts section
2. `npm run build`
3. This will create a `dist` folder that heavily mjinimizes all our files. 

## NPM Modules
- `npm init`
- `npm install parcel-bundler --save-dev`
- *node modules* folder has a gazillion files inside it, because your tools will have lots of dependencies. This is fine to delete because you can always install it again. 
- `npm i faker date-fns wait-to-js lodash axios`: these are all regular dependencies, and you can install multiple ones by putting a space in between them.
---
## Running a simple server

### VS Code Plugin
 - Extensions > Live Server
 - Install Live Server > Right click file and click Open with Live Server

 ### Browser-Sync 
 - `npm install -g browser-sync`
 - Go into your Modules folder > `broswer-sync start`

