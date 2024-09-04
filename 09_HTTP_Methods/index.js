const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `A request received on ${req.url} at ${Date.now()} Method: ${req.method}\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                if (req.method === "GET") {
                    res.end("Home Page");                    
                }
                break;

            case "/about":
                const username = myUrl.query.myName;
                const id = myUrl.query.id;
                res.end(`I am ${username} and my id is ${id}`);
                break;

            case "/search":
                const searchResult = myUrl.query.search_query;
                res.end("Here are your results for " + searchResult);
                break; 

            case "/signup":
                if (req.method === "GET") {
                    res.end("This is a Signup form!");
                } else if (req.method === "POST") {
                    // DB query
                    res.end("Success")
                }
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