const fs = require("fs");

// Writing files : 

// Sync - Synchronous call - we don't need callback func
// fs.writeFileSync("./file.txt", "Hey there");

// Asynchronous call - we need callback func
// fs.writeFile("./file.txt", "Hii my name is Amith!", (err, data) => {});

// __________________________________________________________

// Reading files : 

// Sync - Synchronous call
// Syntax fs.readFileSync(Path, encoding);
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// Asynchronous call
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error is : ", err);
//     } else {
//         console.log(result);
//     }
// });

// __________________________________________________________

// Appending files : 

// Sync - Synchronous call
// fs.appendFileSync("./file.txt", ` ${new Date().getTime()}`);
// fs.appendFileSync("./file.txt", `${Date.now()} Hey there \n`);

// __________________________________________________________

// Copying files : 

// Sync - Synchronous call
// fs.cpSync("./contacts.txt", "./file.txt");

// __________________________________________________________

// Deleting a file

// fs.unlinkSync("./script.js");

// __________________________________________________________

// To see the file details

// console.log(fs.statSync("./file.txt"));

console.log(fs)