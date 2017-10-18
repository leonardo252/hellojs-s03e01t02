// index.js
const knex = require("./db").knex
const express = require("express")
const app = express()

app.get("/pessoa/list", (req, res) => {
  knex("pessoa").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    console.log(err)
    res.status(500).send(err)
  })
})

app.listen(3000, _ => console.log('All subsystems - [ONLINE]'))

// ja ja mexemos nisso