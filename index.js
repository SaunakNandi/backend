require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/xyz',(req,res)=>{
    res.send(hiteshdotcom)
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login on chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h1>Chai aur code</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})