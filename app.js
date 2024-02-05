const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000


//..config...
app.use(express.json())

//connect to mongodb

var db = mongoose.connect("mongodb://127.0.0.1:27017/expensemanager")
db.then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})

//require all routes...

const userRoutes = require("./routes/UserRoutes")
const categoryRoutes = require("./routes/CategoryRoutes")


//provinding to server all routes...

app.use("/users",userRoutes)
app.use("/categories",categoryRoutes)

//localhost:4000/emplyees/employee


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    //console.log("server is running on port "+PORT)
})
