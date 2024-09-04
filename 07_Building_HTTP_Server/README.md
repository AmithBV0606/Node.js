# Building HTTP Servers

    Appart from Express.js library, Node.js also has a built in module for creating a HTTP server.

### Creating an HTTP server using built-in "http" module :
```javascript
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    // console.log(req.headers);
    // console.log("Request Received!");

    const log = `A request received on ${req.url} at ${Date.now()}\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Home Page");
                break;

            case "/about":
                res.end("I am Amith B V");
                break;
        
            default:
                res.end("404 Not found")
                break;
        }
    })
});

myServer.listen(3000, () => {
    console.log("Server started")
});
```