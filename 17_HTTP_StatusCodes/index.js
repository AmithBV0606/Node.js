const express = require("express");
const users = require("./FakeData.json");
const fs = require("fs");

const app = express();
const port = 8000;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false })); // This will work according to the content type in the header.

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

app.get("/api/users", (req, res) => {
    // Sending the header in the request section
    console.log(req.headers);

    // Setting custom headers in response
    res.setHeader("X-myName", "Amith")
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((item) => {
        return (id === item.id);
    });
    if (!user) {
        return res.status(404).json({
            error:"User not found"
        })
    }
    res.json(user);
});

app.post("/api/users/", (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({
            msg: "All fields are required...."
        })
    }
    users.push({
        "id": users.length + 1,
        "first_name": body.first_name,
        "last_name": body.last_name,
        "email": body.email,
        "gender": body.gender,
        "job_title": body.job_title
    });

    fs.writeFile("./FakeData.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "success" });
    });
});

app.patch("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter((item) => {
        return (id === item.id);
    });

    const body = {...req.body, id: id};
    
    users.splice(users.indexOf(user[0]), user.length, body);

    fs.writeFile("./FakeData.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success" });
    });
});

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