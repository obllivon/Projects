import React, { useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=734811c4bcff7fd66d4c7c9fa620ab4c`;
    const seacrhLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setLocation("")
          console.log(data);
        }
    };

    return (
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={seacrhLocation}
            placeholder="Введите название..."
            type="text"
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
          </div>
          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels ">
                {data.weather ? (
                  <p className="bold">{data.main.feels_like.toFixed()}С</p>
                ) : null}
                <p>Чувствуется как</p>
              </div>
              <div className="humidity">
                {data.weather ? (
                  <p className="bold">{data.main.humidity.toFixed()}%</p>
                ) : null}
                <p>Влажность</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()}м/c</p>
                ) : null}
                <p>Скорость ветра</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default App
