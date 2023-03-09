//import express 
const express= require('express');

//create new express app and save that as "app"
const app = express();

//server configuration
const PORT = 8080;

//create route for the app

app.get('/',(req,res)=>{
    res.send('Hello Rushi Good Morning');
});

//make the server listen to request
app.listen(PORT,()=>{
    console.log('Server running at: http://localhost:${PORT}/');
});