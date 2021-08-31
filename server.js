const express = require("express"), 
      bodyParser = require('body-parser'), 
      cors = require('cors');

const app = express(); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cors());
app.use(express.static("website"));
const PORT = 3000 ; 

const projectData = {} ; 

const listening = () => {
    console.log("Server is working \n"); 
}


const server = app.listen( PORT , listening); 


app.get( "/data" , (req , res) =>{

    res.send(projectData); 
}); 

app.post( "/data" , (req , res) =>{

    Object.assign(projectData, req.body);
    console.log(projectData); 
}); 

// app.post( "/" , (req , res) =>{

//     projectData.push(req.body);
//     console.log(projectData); 
// }); 
    