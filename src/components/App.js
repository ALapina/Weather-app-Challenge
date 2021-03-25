import React from "react";
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
  return (
    <Main>
      <WeatherInfo />
      <WeatherDetails />
    </Main>
  );
}

export default App;
