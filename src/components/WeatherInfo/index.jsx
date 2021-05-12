import React from "react";
import { BsDot } from "react-icons/bs";
import { currentDay, weatherIcon } from "../../utils";

import {
  WeatherInfoContainer,
  WeatherImgWrap,
  WeatherInfoWrapper,
  Temperature,
  TempDegrees,
  WeatherCondition,
  CurrentDate,
  DotIconWrapper,
} from "./WeatherInfoElements";

import Location from "../Location";

const WeatherInfo = ({ userLocation, currentDayWeatherData }) => {
  const currentWeather = currentDayWeatherData.weather;
  let icon;
  let condition;
  let temperature = Math.round(currentDayWeatherData.temp);

  currentWeather &&
    currentWeather.forEach((weatherEl) => {
      icon = weatherEl.icon;
      condition = weatherEl.main;
    });

  const displayWeatherIcon = () => {
    if (!weatherIcon(icon)) {
      return <div></div>;
    }
    return <img src={weatherIcon(icon)} alt="weather icon" />;
  };

  return (
    <WeatherInfoContainer>
      <WeatherImgWrap>{displayWeatherIcon()}</WeatherImgWrap>
      <WeatherInfoWrapper>
        <Temperature>
          {temperature || ""}
          <TempDegrees>&deg;C</TempDegrees>
        </Temperature>
        <WeatherCondition>{condition}</WeatherCondition>
        <CurrentDate>
          Today
          <DotIconWrapper>
            <BsDot />
          </DotIconWrapper>
          {currentDay()}
        </CurrentDate>
        <Location userLocation={userLocation} />
      </WeatherInfoWrapper>
    </WeatherInfoContainer>
  );
};

export default WeatherInfo;
