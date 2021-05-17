import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";

import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  @media ${({ theme }) => theme.mediaQueries.bellow568} {
    flex-direction: column;
  }
`;

function App() {
  const [currentDayWeatherData, setCurrentDayWeatherData] = useState({});
  const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    findUserLocationByIPAndFetchWeather();
  }, []);

  const findUserLocationByIPAndFetchWeather = async () => {
    // find user location, latitude and longitude by IP
    const responseLocation = await axios
      .get("https://extreme-ip-lookup.com/json/")
      .catch((error) => console.error(error));

    // fetch current location weather data
    const responseWeather = await axios
      .get("https://api.openweathermap.org/data/2.5/onecall", {
        params: {
          lat: responseLocation.data.lat,
          lon: responseLocation.data.lon,
          exclude: "alerts,minutely,hourly",
          units: "metric",
          appid: process.env.REACT_APP_API_KEY,
        },
      })
      .catch((error) => console.error(error));

    setUserLocation(responseLocation.data.city);
    setCurrentDayWeatherData(responseWeather.data.current);
    setWeeklyWeatherData(responseWeather.data.daily);
  };

  return (
    <Main>
      <WeatherInfo
        userLocation={userLocation}
        currentDayWeatherData={currentDayWeatherData}
      />
      <WeatherDetails />
    </Main>
  );
}

export default App;
