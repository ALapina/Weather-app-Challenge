import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";

import {
  CurrentLocationWrapper,
  LocationIconWrapper,
  LocationTextWrapper,
} from "./LocationElements";

const Location = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    findUserLocationByIP();
  }, []);

  // find user location by IP
  const findUserLocationByIP = async () => {
    const response = await axios
      .get("https://extreme-ip-lookup.com/json/")
      .catch((error) => console.error(error));
    setUserLocation(response.data.city);
  };

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
