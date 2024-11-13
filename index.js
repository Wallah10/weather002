//city and button

let searchBtn=document.querySelector("#search-icon");

let tempValue=document.querySelector("#temp-value");
let humidValue=document.querySelector("#humid-value");
let windValue=document.querySelector("#wind-value");


let outputResult=()=>{
let inputField=document.querySelector(".city-input")
let inputValueCity=inputField.value;
let myKey='1a9a50982293469389a130017242309'
let searchUrl=`http://api.weatherapi.com/v1/current.json?key=${myKey}&q=${inputValueCity}`
fetch(searchUrl)
.then(res=>res.json())
.then(data=>{
    
    humidValue.textContent=`${data.current.humidity} %`
    tempValue.textContent=`${data.current["temp_c"]} °C`
    windValue.textContent=`${data.current["wind_kph"]} kmh`
})
.catch(error=>{
    inputValueCity=`${error.message}`
})

}
searchBtn.addEventListener("click",outputResult)












