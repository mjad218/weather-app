const express = require("express"), 
      bodyParser = require('body-parser'), 
      cors = require('cors');

const app = express(); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cors());
app.use(express.static("website"));
const PORT = 3000 ; 

const listening = () => {

    console.log("Hey !"); 
}


const server = app.listen( PORT , listening); 


app.get( "/" , (req , res) =>{

res.send("Hey !"); 
} ); 
const apiKey = "5260038d686b4334ff41dfddc7607c1d" ; 
