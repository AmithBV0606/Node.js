const fs = require("fs");
const os = require("os");

// Sync.... Blocking....
// fs.writeFileSync("./file.txt", "Hello World\n");

// console.log("1");
// const result = fs.readFileSync("./file.txt", "utf-8");
// console.log(result);
// console.log("2");

// Async... Non-Blocking
// fs.writeFile("./contacts.txt", "Amith: +91 6361670056\n", (err) => {});

console.log("1");
fs.readFile("./file.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("ERROR : ", err);
    } else {
        console.log(result);
    }
});
console.log("2");
console.log("3");
console.log("4");

// To know the number of cores present on your machine : 
console.log("Number of Cores : ", os.cpus().length);