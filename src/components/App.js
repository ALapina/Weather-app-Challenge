import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo/";
import WeatherDetails from "./WeatherDetails/";

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
  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(geoApi, []);

  function geoApi() {
    console.log("GeoApi");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log(`GEO API latitude: ${latitude}`);
        // console.log(`GEO API longitude: ${longitude}`);
        reverseGeocodingWithGeoCodeApi(latitude, longitude);
      },
      (error) => {
        console.log(error);
        setErrorMessage(error.message);
      }
    );
  }

  // https://geocode.xyz/${latitude},${longitude}?json=1

  function reverseGeocodingWithGeoCodeApi(latitude, longitude) {
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("User's Location Info: ", response);
        setUserLocation(response.city);
        // console.log(`COUNTRY: ${response.country}`);
        // console.log(`CITY: ${response.city}`);
      })
      .catch((status) => {
        console.log("Request failed.  Returned status of", status);
      });
  }
  // No data available

  // fetch("https://extreme-ip-lookup.com/json/")
  //   .then((res) => res.json())
  //   .then((response) => {
  //     console.log(response);
  //     console.log("IP Country: ", response.country);
  //     console.log(response.city);
  //     setUserLocation(response.city);
  //   });

  return (
    <Main>
      <WeatherInfo userLocation={userLocation} />
      <button onClick={geoApi}>Location</button>
      <WeatherDetails />
    </Main>
  );
}

export default App;
