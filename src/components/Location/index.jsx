import React from "react";
import { MdLocationOn } from "react-icons/md";

import {
  CurrentLocationWrapper,
  LocationIconWrapper,
  LocationTextWrapper,
} from "./LocationElements";

const Location = ({ userLocation }) => {
  return (
    <CurrentLocationWrapper>
      <LocationIconWrapper>
        <MdLocationOn />
      </LocationIconWrapper>
      <LocationTextWrapper>{userLocation}</LocationTextWrapper>
    </CurrentLocationWrapper>
  );
};

export default Location;
