
const API_KEY = "12a64afadf56f368083d07d304c0db2a";

function onGeoOK(positon){
    const lat = positon.coords.latitude
    const lng = positon.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        });  
}

function onGeoError(){
    alert("can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)