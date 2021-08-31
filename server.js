const express = require("express"), 
      bodyParser = require('body-parser'), 
      cors = require('cors');

const app = express(); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cors());
app.use(express.static("website"));
const PORT = 3000 ; 

const data = [] ; 

const listening = () => {
    console.log("Server is working \n"); 
}


const server = app.listen( PORT , listening); 


app.get( "/data" , (req , res) =>{

    res.send(data); 
}); 

app.post( "/data" , (req , res) =>{

    data.push(req.body);
    console.log(data); 
}); 

app.post( "/" , (req , res) =>{

    data.push(req.body);
    console.log(data); 
}); 
    