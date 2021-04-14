var express = require('express');
var app = express();
var port =process.env.PORT||8900;
const mongo =require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongourl = "mongodb://localhost:27017";
const mongourl = "mongodb+srv://anantkumarsingh:databaseconnection@cluster0.yz58x.mongodb.net/assignment5?retryWrites=true&w=majority";


let db;

app.get('/',(req,res)=>{
    res.send("hi from express and this is my first url")

})



app.get('/Delhi',(req,res)=>{
    db.collection('Delhi').find().toArray((err,result)=>{
       res.send(result) 
    })
   
})
app.get('/bangalore',(req,res)=>{
    db.collection('Bangalore').find().toArray((err,result)=>{
       res.send(result) 
    })
   
})
app.get('/chandigarh',(req,res)=>{
    db.collection('Chandigarh').find().toArray((err,result)=>{
       res.send(result) 
    })
   
})
app.get('/mumbai',(req,res)=>{
    db.collection('Mumbai').find().toArray((err,result)=>{
       res.send(result) 
    })
   
})
app.get('/pune',(req,res)=>{
    db.collection('pune').find().toArray((err,result)=>{
       res.send(result) 
    })
   
})
app.get('/widgit',(req,res)=>{
    db.collection('widgit').find().toArray((err,result)=>{
        res.send(result)
    })
})

   



MongoClient.connect(mongourl,(err,connection)=>{
    if(err) console.log(err);
    db = connection.db('assignment5')
})
app.listen(port,(err)=>{
    if(err) throw err
    console.log(`server is running on port no ${port}`)
})