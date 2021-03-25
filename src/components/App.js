import React from "react";
import WeatherInfo from "./WeatherInfo/index";
import WeatherDetails from "./WeatherDetails/index";

import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  @media (max-width: 568px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <Main>
      <WeatherInfo />
      <WeatherDetails />
    </Main>
  );
}

export default App;
