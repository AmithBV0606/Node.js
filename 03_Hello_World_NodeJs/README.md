# Hello world in Node.js

```javascript
console.log("Hello world from Node.js");
```

### Executable on browser's environment but not on Node environment :
```javascript
Console.log(window);
alert("Hello world");
```
__NOTE__ : All the utilities and function of Js that helps to build UI is removed in Node.js because Node.js is created only for JavaScript to run on server side.

That's why we don't have access for DOM elements, window Object, etc in Node.js

### Starting a Node.js project : 
__Step 1__ : Creating a template for running the project
```bash
npm init
```
__OR__
```bash
# To Skip all the steps to create Package.json file
npm init -y
```
NOTE : init - Initialize

### Package.json file :
    - Package.json is a configuration file of the initialized project.

    - Whenever we install some packages and dependencies, all those thing will be managed inside the Package.json file.