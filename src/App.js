
import React, {useState} from "react";
import axios from 'axios'
import { Container } from "@mui/material";
import './index.css'




function App() {
  //const apikey = APIKEY;
  //const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apikey}`;
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Greenville</p>
          </div>
          <div className="temp">
            <h1>60</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
