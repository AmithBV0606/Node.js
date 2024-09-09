# Connecting NodeJs with MongoDB

### We can connect NodeJs with MoggoDB using a library called "Mongoose" :
    Mongoose is an Elegant MongoDB object modeling for Node.js.

    Mongoose provides a straight-forward, schema-based solution to model your application data. 
    
    It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

## The flow of mongoose goes like this :

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
mongoose.connect('mongodb://127.0.0.1:27017/myapp');
```