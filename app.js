const express = require ('express')

const itemsRoute = require ("./routes/items.js")


const express = require ("express")
const fs = require ('fs')

const web = express()
const PORT = 8000

app.use("/items", itemsRoute)

app.listen(PORT, ()=>{
    console.log('app has started running at http://localhost:$(PORT)')
})

//Request handling and response
server.use("view engine", "ejs")
server.use("views", "views")

server.get("/", (req.res)=>{
    res.status(200).render("index")
})

res.JSON({item})

//getting data from url
const id = req.params.id
