const express  = require("express")

const app = express()

const port = 3000

app.get('/',(req,res) => {
    res.send("Hello world")
})
app.get('/about',(req,res) =>{
    res.send("Hello from usama khan")
})
app.listen(port, () => {
    console.log( `Example app listneing on port ${port}`)
})
 














/* app.get('/',function(req,res){
     res.send("Hello world")
 })
get 
post
nom init -y 
start ka path set krna hai 
npm i express    installl the express library 

 */
