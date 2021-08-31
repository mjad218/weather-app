const btn = document.getElementById("generate");  
const zip = document.getElementById("zip");  
const feelings = document.getElementById("feelings");  
const apiKey = "5260038d686b4334ff41dfddc7607c1d" ; 


let displayData = ( err = 0) => {
    let puplishDate = document.getElementById("date"); 
    let content = document.getElementById("content"); 
    let temp = document.getElementById("temp"); 

    if( err == 0) {
        // console.log("Display Started ! "); 
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
            // console.log("Data is Ready to be displayed ! ");
            // console.log(res);
            temp.textContent = "Your city's temperature is " + res.Temperature + " °C"; 
            content.textContent = "And your are feeling : " + res.Feeling; 
            puplishDate.textContent = "Requested on " + res.PublishDate; 
        } ) 
        .catch ( (e) => {console.log(e)} ) ;
    
    } else {

        temp.textContent = "City Not Found!! "; 
        content.textContent = "" ; 
        puplishDate.textContent = ""; 

    }
}

let postData = async (res , feeling) => {

    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    const data = {
        Feeling : feeling , 
        Temperature : res.main.temp, 
        PublishDate : newDate
    }; 
    // console.log("Post Started ! "); 

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
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=metric&appid=${apiKey}` ;

    await fetch(APIURL)
    .then((response) => {
        if (!response.ok) {
            throw new Error("City not found")
        } else {
            return response.json(); 
        }

    })
    .then((response) => {
        // console.log(response); 

        postData(response,feelings.value);
        displayData() ;

        })
    .catch( (e) => {
        // console.log(e); 
        displayData(1) ;

    });

    
    // console.log("Post Done ! "); 


}

btn.addEventListener( "click" , generateData) ; 