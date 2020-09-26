const express = require('express');
const app= express();

app.get('/', (req, res)=>{
    res.send("node js with express")
})

app.listen(3200, ()=> console.log("port is 3200"));