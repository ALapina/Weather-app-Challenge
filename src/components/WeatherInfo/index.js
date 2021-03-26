import React from "react";

import { MdLocationOn } from "react-icons/md";

import { BsDot } from "react-icons/bs";

// import UserLocation from "../UserLocation";

import { currentDay } from "../../utils";

import WeatherIcon from "../../images/Shower.png";
import {
  WeatherInfoContainer,
  WeatherImgWrap,
  WeatherInfoWrapper,
  Temperature,
  TempDegrees,
  WeatherCondition,
  CurrentDate,
  DotIconWrapper,
  Location,
  LocationIcon,
} from "./WeatherInfoElements";

const WeatherInfo = ({ userLocation }) => {
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
        <CurrentDate>
          Today
          <DotIconWrapper>
            <BsDot />
          </DotIconWrapper>
          {currentDay()}
        </CurrentDate>
        <Location>
          <LocationIcon>
            <MdLocationOn />
          </LocationIcon>
          {userLocation ? userLocation : "No Data Available"}
          {/* <UserLocation /> */}
        </Location>
      </WeatherInfoWrapper>
    </WeatherInfoContainer>
  );
};

export default WeatherInfo;
