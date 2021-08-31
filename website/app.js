const btn = document.getElementById("generate");  
const zip = document.getElementById("zip");  
const feelings = document.getElementById("feelings");  
const apiKey = "5260038d686b4334ff41dfddc7607c1d" ; 


let displayData = () => {

    console.log("Display Started ! "); 
    fetch("/data" , {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        },
      }    
    ).then( (res) => {
        return res.json();
    })
    .then( (res) => {
        console.log("Data is Ready to be displayed ! ");
        console.log(res);
        let puplishDate = document.getElementById("date"); 
        let content = document.getElementById("content"); 
        let temp = document.getElementById("temp"); 

        temp.textContent = "Your city's temperature is " + res[res.length - 1].Temperature; 
        content.textContent = "And your are feeling : " + res[res.length - 1].Feeling; 
        puplishDate.textContent = "Requested on " + res[res.length - 1].PublishDate; 
    } ) 
    .catch ( (e) => {console.log(e)} ) ;
}

let postData = async (res , feeling) => {

    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    const data = {
        Feeling : feeling , 
        Temperature : res.main.temp, 
        PublishDate : newDate
    }; 
    console.log("Post Started ! "); 

    let responsePost = await fetch("/data" , {
        method: 'POST', 
        mode: 'cors', 
        headers: {
            'Accept' : '*/*', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }    
    ); 

}


const generateData = async () => {

    const zipCode = zip.value; 
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}` ;
    await fetch(APIURL)
    .then( (response) => {
        return response.json(); 
    })
    .then((response) => {
        postData(response,feelings.value);
        })
    .catch( (e) => {
        console.log(e); 
    }) ;
    console.log("Post Done ! "); 

    displayData() ;

}

btn.addEventListener( "click" , generateData) ; 