const API_KEY = `ed2bdb0cb932e1a2e40bf8e52137bdda`
const form = document. querySelector("form")
const search = document. querySelector("#search")
const weather = document. querySelector("#weather")

const getWeather = async(city)=>{
    
    weather.innerHTML=`<h2>Loading</h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data)=>{
    if(data.cod=="404"){
        weather.innerHTML=`<h2>City not Found</h2>`
        return;
    }
    weather.innerHTML=`
      <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="404" />
      </div>
      <div>
        <h1>${data.main.temp}°C</h1>
        <h2>${data.weather[0].main}</h2>
        <h3>Feels Like " ${data.main.feels_like}°C</h3>
        <h3>Humidity : ${data.main.humidity}</h3>
      </div>`
}

form.addEventListener(
    "submit",
    function(event){
        console.log(search.value)
        getWeather(search.value)
        event.preventDefault();
    }
)