const btn = document.getElementById("generate");  
const zip = document.getElementById("zip");  
const feelings = document.getElementById("feelings");  
const apiKey = "5260038d686b4334ff41dfddc7607c1d" ; 


const generateData = () => {

    const zipCode = zip.value ; 
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}` ;
}

btn.addEventListener( "click" , generateData) ; 