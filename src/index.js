"use strict"
console.clear()

import express from "express"

const app = express()

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
