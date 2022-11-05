const express = require("express");
const app = express()
const router = require("./routers/router")
app.use(express.urlencoded({extended:false}))

app.use(express.json());
app.use(express.static('uploads'))

app.set('view engine','hbs')

app.use("/",router)

app.listen(2000,()=>{
    console.log("listening on server 2000....")
})