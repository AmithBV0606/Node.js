const express = require("express");
const users = require("./FakeData.json");
const fs = require("fs");

const app = express();
const port = 8000;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false })); // converts the form data into object and puts that object into the request's body.

// app.use((req, res, next) => {
//     console.log("Hello from middleware 1");
//     // Here the middleware didn't end the response nor did it call the next function.
// });

// Make can change the request and the response objects.
app.use((req, res, next) => {
    // res.json({ msg: "Hello from middleware 1" });
    console.log("Hello from middleware 1");
    req.myUserName = "Amith B V";
    next();
});

app.use((req, res, next) => {
    console.log("Hello from middleware 2", req.myUserName);
    // res.end("Hey!!");
    next();
});

app.use((req, res, next) => {
    fs.appendFile("log.txt", `${Date.now()} : ${req.method} : ${req.path}\n`, (err, data) => {
        next();
    })
});


// Routes

// 1) GET /users - List all users and render using HTML document.
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => {
            return `<li>${user.first_name}</li>`
        }).join("")}
    </ul>
    `;
    res.send(html);
});

// REST API

// 2) GET /api/users - List all users in JSON format.(For mobiles devices)
app.get("/api/users", (req, res) => {
    return res.json(users);
});

// 3) GET /api/users/1 - Get the user with ID 1.
// 4) GET /api/users/2 - Get the user with ID 2.
app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter((item) => {
        return (id === item.id);
    });
    res.json(user);
});
// Note : can use find method instead of filter.

// Since we cannot send Post, Patch and Delete request from browser we use postman.

// 5) POST /api/users - Create new user.
app.post("/api/users/", (req, res) => {
    const body = req.body;
    // console.log(body);
    users.push({
        "id": users.length + 1,
        "first_name": body.first_name,
        "last_name": body.last_name,
        "email": body.email,
        "gender": body.gender,
        "job_title": body.job_title
    });

    fs.writeFile("./FakeData.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success" });
    });
});

// 6) PATCH /api/users/1 - Edit the user with ID 1.
app.patch("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter((item) => {
        return (id === item.id);
    });

    const body = {...req.body, id: id};
    
    // Updating the JSON data
    users.splice(users.indexOf(user[0]), user.length, body);

    fs.writeFile("./FakeData.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success" });
    });
});

// 7) DELETE /api/users/1 - Delete the user with ID 1.
app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter((item) => {
        return (id !== item.id);
    });

    fs.writeFile("./FakeData.json", JSON.stringify(user), (err, data) => {
        return res.json({ status: "success" });
    });
});

app.listen(port);