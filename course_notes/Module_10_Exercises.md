# Hard Practice Exercises

## Face Censorship

- Accessing a user's web cam is a security issues, so they need to grant permission: those are **permission based APIs** in the browser, whose operation is tied to the *origin* (a domain name). So we need to use a local host. 
- We can use parcel. 

## Shopping List

Using Parcel:
- `npm install -g parcel-bundler`
- `parcel index.html`

### State
State is a bunch of data that reflects the state of your application: you can use this data to repliate a specific situation within your app. 

### Custom Events
We can create custom events, dispatched from a specific element, that can then be listened to by anything else in the app.

`element.dispatchEvent(new CustomEvent('eventName'))`

### Local Storage
Mini database that allows users of the appplication to return to it on the same browser and pick up where they left off.

**Local storage is text only**. To convert objects to strings, we use `JSON.stringify`, and then `JSON.parse` to conbert it back to an object. 


`e.target` = thing you cliked on. 
`e.currentTarget` = thing you listened for the event on.