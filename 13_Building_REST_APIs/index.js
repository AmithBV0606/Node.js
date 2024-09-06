const express = require("express");
const users = require("./FakeData.json");

const app = express();
const port = 8000;

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

// 5) POST /api/users - Create new user.
app.post("/api/users/", (req, res) => {
    // TODO : Create new user
    return res.json({ status: "pending" });
});

// 6) PATCH /api/users/1 - Edit the user with ID 1.
app.patch("/api/users/:id", (req, res) => {
    // TODO : Edit the user with id
    return res.json({ status: "pending" });
});

// 7) DELETE /api/users/1 - Delete the user with ID 1.
app.delete("/api/users/:id", (req, res) => {
    // TODO : Delete the user with id
    return res.json({ status: "pending" });
});

app.listen(port);