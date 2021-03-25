import React from "react";

import { MdLocationOn } from "react-icons/md";

import { BsDot } from "react-icons/bs";

import WeatherIcon from "../../images/Shower.png";
import {
  WeatherInfoContainer,
  WeatherImgWrap,
  WeatherInfoWrapper,
  Temperature,
  TempDegrees,
  WeatherCondition,
  Date,
  DotIconWrapper,
  Location,
  LocationIcon,
} from "./WeatherInfoElements";

const WeatherInfo = () => {
  return (
    <WeatherInfoContainer>
      <WeatherImgWrap>
        <img src={WeatherIcon} alt="weather" />
      </WeatherImgWrap>
      <WeatherInfoWrapper>
        <Temperature>
          15
          <TempDegrees>&deg;C</TempDegrees>
        </Temperature>
        <WeatherCondition>Shower</WeatherCondition>
        <Date>
          Today
          <DotIconWrapper>
            <BsDot />
          </DotIconWrapper>
          Fri 5 Jun
        </Date>
        <Location>
          <LocationIcon>
            <MdLocationOn />
          </LocationIcon>
          Helsinki
        </Location>
      </WeatherInfoWrapper>
    </WeatherInfoContainer>
  );
};

export default WeatherInfo;
