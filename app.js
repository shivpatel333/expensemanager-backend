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
const roleRoutes = require("./routes/RoleRoutes")
const subcategoryRoutes = require("./routes/SubcategoryRoutes")
const labelRoutes = require("./routes/LabelRoutes")
const payeeRoutes = require("./routes/PayeeRoutes")
const accountRoutes = require("./routes/AccountRoutes")
const accounttypeRoutes = require("./routes/AccounttypeRoutes")
const currencytypeRoutes = require("./routes/CurrencytypeRoutes")
const transactionRoutes = require("./routes/TransactionRoutes")
const transactiontypeRoutes = require("./routes/TransactiontypeRoutes")


//provinding to server all routes...

app.use("/users",userRoutes)
app.use("/categories",categoryRoutes)
app.use("/roles",roleRoutes)
app.use("/subcategories",subcategoryRoutes)
app.use("/labels",labelRoutes)
app.use("/payees",payeeRoutes)
app.use("/accounts",accountRoutes)
app.use("/accounttypes",accounttypeRoutes)
app.use("/currencytypes",currencytypeRoutes)
app.use("/transactions",transactionRoutes)
app.use("/transactiontypes",transactiontypeRoutes)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    //console.log("server is running on port "+PORT)
})
