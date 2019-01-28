require("dotenv").config();
const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const {getAll, getOne, update, create, deleteOne} = require('./product_table_controller')

const app = express();
const port = process.env.PORT || 3000;


massive(process.env.CONNECTION_STRING)
    .then(dbInstance =>{
        console.log('database connected')
        app.set("db", dbInstance);
    }).catch(err=>{
        console.log(err)
    })



app.use(json())

app.get('/api/products', getAll)
app.get('/api/products/:id', getOne)
app.put('/api/products/:id', update)
app.post('/api/products', create)
app.delete('/api/products/:id', deleteOne)

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})