const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('client'))
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/styles.css'))
})

app.get('/js', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/main.js'))
})

app.listen(4000, console.log("App running on 4000"))