const express = require("express");
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 4000;

// there is need of middleware to parse json request body
app.use(express.json());  // -> express.json is a middleware

// import routes for todo api

const todoRoutes = require("./routes/todos");

// mount the routes
app.use("/api/v1", todoRoutes);

// Start Sever
app.listen(PORT, () => {
     console.log(`Server is started at ${PORT}`);
});

// connect to database
const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req,res) => {
     res.send("<h1>This is Home Page </h1>");
})