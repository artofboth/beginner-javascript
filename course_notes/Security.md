# Security

## Things to keep in mind

### Don't trust the client
- JavaScript is completely public, so anything you put in your source code is not safe.  As long as the browser can read it, there will be someone that is able to access it. 
     - API Keys 
     - Links to private downloads
     - Prices

### Sanitize your inputs 
- Anytime you are taking data from a user and embedding it into HTML you must first sanitize it, because you are allowing users to run code on your page. 
- DOMPurify is a library you can use for that. 

### Always send data through an HTTPS origin
- This ensures third parties can't see your requests when you pull or push data to and from an API
- HTTPS will ensure it's all encrypted. 
