const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

const items = require("./routes/api/items");
const app = express();

//Bodyparser Middleware, tells the system that you want json to be used
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// to connect, must use mongoDB link, since it is promise-based, we can call .then()
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//mounts the specified Middleware function or functions at the specified path
// we are saying that by default, route to our inner /api/items for handling HTTP requests
// that is where the router is located, but we will also but items.js, which exports Router.
app.use("/api/items", items);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  // Set Static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

 });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on PORT PLACEHOLDER"));
