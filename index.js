const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")


app.use(cors())
app.use(bodyParser())
app.get("/22",(req,res)=>{
  res.send("berjalan")
  fs.writeFileSync('data.json',JSON.stringify({nama:"udin"}))
})

app.listen(3000,()=>{
  console.log("server jalan")
})


