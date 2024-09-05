# Getting started with Express js

### Creating http servers using Node.js inbuilt http modules :  
```javascript
const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(req, res){
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
}

const myServer = http.createServer(myHandler);

myServer.listen(3000, () => {
    console.log("Server started")
});
```

### Reason why express framework was introduced : 
    1) The above code is very confusing because everything is written inside a callback.

    2) For every route we've created a switch case.

    3) For every route , we need to define the HTTP methods(GET, POST, DELETE, PATCH, PUT) and handle them seperately.

    4) Even for parsing an url, for using headers we need to import different packages which again will make our app bulky. 