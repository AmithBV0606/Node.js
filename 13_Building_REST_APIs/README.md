# Building REST API's using Node.js and Express.js

### Task : Create a fake JSON file with the user data and using the following Routes perform the CRUD operation on the user data

1) __GET /users__ - List all users and render using HTML document.

2) __GET /api/users__ - List all users in JSON format.(For mobiles)

3) __GET /api/users/1__ - Get the user with ID 1.

4) __GET /api/users/2__ - Get the user with ID 2.
    - Dynamic Path Parameters 
    - Example : GET /api/users/:id
    - :id -> Variable | Dynamic

5) __POST /api/users__ - Create new user.

6) __PATCH /api/users/1__ - Edit the user with ID 1.

7) __DELETE /api/users/1__ - Delete the user with ID 1.

### Good practices : Grouping all the methods with same path
```javascript
app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = parseInt(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        return res.json(({ status: "Pending" }));
    })
```