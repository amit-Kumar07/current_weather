import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [weather, setWeather] = useState(null);


  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=> {
        const lattitude = position.coords.latitude;
        const longitude = position.coords.longitude

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=73954f2d2277ab056d93fbc61efb4ddf`)
        .then((res)=>res.json())
        .then((data)=>setWeather(data))
      },null)
    }
  })
  return (
    <div>
      {weather ? (<div>
        <h2>Current Weather</h2>
        <p>Temperature: {weather.main?.temp}</p>
          {weather.weather && weather.weather.length > 0 && (
            <p>Condition: {weather.weather[0].description}</p>
          )}
      </div>):(<p>Loading...</p>)}
    </div>
  );
}

export default App;
