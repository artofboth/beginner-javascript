# Working with APIs

- **API** = Application Programming Interface. Some way that you can talk to a machine in a standardized procedure. 
- **AJAX** = Asynchronous JavaScript And XML.
- If you're building any type of app, the client (the browser, for example) needs to speak to the server.

## Pulling data from an API
- Head to a URL and it will respond in **JSON** (JavaScript Object Notation), a great way to transport JS objects between servers or/and clients. 
- JSON files are strings (`JSON.parse(data)` will convert it to an actual JS object). 
- Lots of APIs allow you to pull data from their server into your own without any authentication (*wide open*) - [Public APIs](github.com/public-apis/public-apis).
- **Endpoint** =  the URL you need to visit in order to get the data. 
- Your use `fetch` to grab the data from that endpoint. 

- Query Params: First one always start with a `?`, and following ones always have an `&` between them.

## Common Problems

### CORS

- *Cross Origin Resource Sharing*
- *Origins* (domain names) by default are not allowed to share data between them, as it is a security issues.
- APIs have CORS policies, implemented in their server, that allow certain URLs to access that data. 

#### Proxy 
- When you have issues accessing an API because of a CORS problem, you can interface with it through a Proxy.
- **CORS Proxy**: something that makes a request from a server side and hands the data back to you. 
- You can just get one to paste in front of your endpoint URLs: this means you are sending your data through a random server controlled by god knows who, so it can never be used for sensitive data. 

### regeneratorRuntime 
- BABEL takes your JavaScript and translates it from modern JS to code that is understandable to older browsers. 
- By default, it transpiles `async await`, and this is not usually necessary. 
- In your `package.json` you can specify which [browsers you want to support](github.com/browserslist/browserslist) by using `browserslist`.

