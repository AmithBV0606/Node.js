# Connecting NodeJs with MongoDB

### We can connect NodeJs with MoggoDB using a library called "Mongoose" :
    Mongoose is an Elegant MongoDB object modeling for Node.js.

    Mongoose provides a straight-forward, schema-based solution to model your application data. 
    
    It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

## The flow of mongoose goes like this :

### Starting a MongoDB server locally : Open terminal write the following command : 
```bash
mongosh
```
__NOTE :__ This will start an instance of mongoDB on your local machine
```bash
# Output for the above command : 
Current Mongosh Log ID: 66def43694f530f5b2117b7a
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4
Using MongoDB:          7.0.5
Using Mongosh:          2.2.4
mongosh 2.3.1 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-09-05T20:49:49.355+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------
```

### Defining your schema
    Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
```javascript
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
```
### Creating a model
    To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
```javascript
const Blog = mongoose.model('Blog', blogSchema);
// ready to go!
```
__NOTE :__ Creating model helps us to perform CRUD operation.

### You can connect to MongoDB with the mongoose.connect() method :
```javascript
mongoose.connect('mongodb://127.0.0.1:27017/?');
```
__NOTE :__ Whatever the name given in the place of "?", a database will be created in that name.