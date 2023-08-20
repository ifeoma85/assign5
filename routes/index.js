const express = require ("express")
const fs = require ('fs')
const bodyParser = require ("body-parser")

const itemsRouter = express.Router()

itemsRouter.use(bodyParseer.json())

// To get all item
itemsRouter.get("/", (req, res)=>{
    const item = fs.readFileSync("./db/items.json")
    res.status(200).send (items)
})

//To get one item
itemsRouter.get("/:id", (req, res)=>{
    const itemsDB = fs.readFileSync("./db/items.json")
    const items = JSON.parse(itemsDB)
    const id = req.params.id
    const foundItem = items.find(item)=>{
        return item.id == parseInt(id)
}
if(foundItem0{
    res.status(404).send(`item not found`)
}
res.status(200).json(foundItem)
)
//to post an item
itemsRouter.post("/", (req, res)=>{
    const itemDB = fs.readFileSync("./db/items.json")
    const items = JSON.parse(itemDB)
    const itemToPost = req.body
    const lastId = items[items.length-1].id
    const newId = lastId + 1;
    const postWithId = {...itemToPost, id:newId}
    items.push(postWithId)
    fs.writeFile("./db/items.json", JSON.stringify(items), (err)=>{
        if(err){
            res.status(500)
        }
        res.status(200).json(postWithId)
    })
})


//To update items
itemsRouter.put("/:id", (req, res)=>{
    const itemsDB = fs.readFileSync("./db/items.json")
    const items = JSON.parse(itemsDB)
    const update = req.body
    const id = req.params.id
    const foundIndex = items.findIndex(item=>item.id == parseInt(id))
    items(foundIndex) = (...items[foundIndex], ...update)
    fs.writeFile("./db/items.json", JSON.stringify(items), (err)=>{
        if(err){
            res.status(500)
        }
    })
})
// To delete an item
const deleteItem = (req, res)=>{
    const itemsDB = fs.readFileSync("./db/items.json")
    const items = JSON.parse(itemsDB)

    const id = req.params.id
    const foundIndex = items.findIndex(item=> item.id == parseInt(id))
    if(foundIndex== -1){
        res.status(404).send(`item with id ${id} not found`)
        return
    }else{items.splice(foundIndex, 1)}

    fs.writeFile("./db/items.json", JSON.stringify(items), (err)=>{
        if (err){
            res.status(500).send("internal server error")
            return
        }
        res.status(200).send(`item with id: ${id} successfully deleted`)
    })
}