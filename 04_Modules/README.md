# Modules in Node.js

#### Modular Programming : Dividing the code base into small modules

### Creating a function in one file and using that function in another file : 
__Step 1 :__ Create a file with .js extension.
```javascript
// math.js file
function sum(a, b) {
    return a + b;
}

module.exports = sum;
```
__Step 2 :__ Create another file with .js extension.
```javascript
// index.js file
const math = require("./math");

console.log(math);
console.log(math(50, 30));

// Output : 
// [Function: sum]
// 80
```

### Exporting multiple function : 
__Method 1 :__
```javascript
// math.js file
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = {
    sum,
    sub
};
```
__Usage of the above written code in another file :__
```javascript
// index.js file
const math = require("./math");
// const {sum, sub} = require("./math");

console.log(math);
console.log(math.sub(50, 30));
// console.log(sum(50, 30));
```

__Method 2 :__
```javascript
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = {
    addFn: sum,
    subFn: sub
};
```

__Usage of the above written code in another file :__
```javascript
// index.js file
const math = require("./math");
// const {addFn, subFn} = require("./math");

console.log(math);
console.log(math.subFn(50, 30));
// console.log(addFn(50, 30));
```

### Exporting individual functions : 
```javascript
exports.sum = (a, b) => a + b;

exports.sub = (a, b) => a - b; 
```

### In-built "fs" libraries : 
```javascript
const fs = require("fs"); 

console.log(fs);
```