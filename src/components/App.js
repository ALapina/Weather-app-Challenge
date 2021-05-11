import React from "react";
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
  return (
    <Main>
      <WeatherInfo />
      {/* <button onClick={geoApi}>Location</button> */}
      <WeatherDetails />
    </Main>
  );
}

export default App;

//1. Вынести элемент локейшн в отдельный компонент
// 2. В нем будем фетчить дату и доставать локацию
// 3. IP? или Geo API?
// 4. Если Geo API - Мы можем выводить алерт что нужно принять его?
// 5. Если название локации длиное - обрезать его и поставить макс символов туда
// 6. ЧТО ПИСАТЬ ПОКА ЮЗЕР НЕ ПРИНЯЛ ГЕО
// 7. ЧТО ДЕЛАТЬ ЕСЛИ ЮЗЕР ОТКАЗАЛСЯ ОТ ГЕО?
// Я думаю нужно IP! И не
// https://developers.google.com/web/fundamentals/native-hardware/user-location
// clearWatch ? решить надо ли использовать и где

// Я думаю поведение будет такое - на старте страницы - ip, но при кнопке найти моё местополодене - гео апи
// ИЛИ ПОКА ЮЗЕР НЕ ПРИНЯЛ - Страницу прогрузки
// При отказе - показываем поп ап который будет говорить что не нашли вашу локацию
// Пример как хэндл гео апи
// https://www.yr.no/en/forecast/daily-table/2-588409/Estonia/Harju/Tallinna%20linn/Tallinn
// Типа по умолчанию ip для города. Если делаем запрос через гео апи можно прям район? хз
// https://www.foreca.com/

// https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API

// https://diveinto.html5doctor.com/geolocation.html

// https://web.dev/geolocation-on-start/
// Always request geolocation permission after a user action, not on page load.
// Clearly indicate that the action will request geolocation permission.
// Assume users won't give you their locations.
// Use a fallback if users don't grant geolocation permission.
