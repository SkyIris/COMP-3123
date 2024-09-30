const express = require('express')

const SERVER_PORT = 8089
var app = express()
app.use(express.static('public'));

const routes = require("./routes.js");

//Static middleware
app.use("/test", express.static("./public"))
app.use(express.json())
//app.use(express.text())
//https://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({extended: true}))


//http://localhost:8089/index
// app.get("/index", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })

//http://localhost:8089/
//user is getting

app.get("/hello", (req, res) => {
    res.status(201).send("Hello Express JS")
    res.end()
})

//http://localhost:8089/user
//Query Parameter
app.get("/user", (req, res) =>{
    //res.json(req.query)
    response = {
        first_name: req.query.first_name || "Pritesh",
        last_name: req.query.last_name || "Patel"
       
    };



    res.json(response)
    
})


//http://localhost:8089/user/Akeen/Zhong
//Path Parameter
app.post("/user/:firstname/:lastname", (req, res) => {
    //res.json(req.params)
    const {firstname, lastname} = req.params
    res.send(`first name: ${firstname}` + ` last name: ${lastname}`)
})



app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})