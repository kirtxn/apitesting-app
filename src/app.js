const express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/productRoutes');
const QueryString = require('qs');

const app = express()

app.use(bodyParser.json())

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'apitesting'
})

db.connect((err,)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Connected to MYSQL database")

})

//const keyword=" OR 1=1"
//const keyword=" OR 1=1#"
//const keyword=" OR 1=1-"
//const keyword=" OR 1=1"
//const keyword=" OR 1=1"
//const user = `'kirtan'${keyword} `
const query1 = 'Select * from users where username = '
//const query = `Select * from users where username = ${keyword} `
const query = `Select * from users where username like ${user} `
//const query = `select * from users UNION Select * from users`
db.query(query,(err,results)=>{
    if(err){
        console.log("Error fetching products:",err)
        // res.status(500).json({error:"An error occured while fetching products"})
        return;
    }
    //console.log(finalQuery)
    console.log(results)
})

// app.use('/products',productRoutes)


    

