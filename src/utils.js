import ClearIcon from "./images/Clear.png";
import LightCloudIcon from "./images/LightCloud.png";
import HeavyCloudIcon from "./images/HeavyCloud.png";
import HeavyRainIcon from "./images/HeavyRain.png";
import ShowerIcon from "./images/Shower.png";
import ThunderstormIcon from "./images/Thunderstorm.png";
import HailIcon from "./images/Hail.png";

export const currentDay = () => {
  const today = new Date();
  const day = today.toLocaleString("default", { day: "numeric" });
  const weekday = today.toLocaleString("default", { weekday: "short" });
  const month = today.toLocaleString("default", { month: "short" });
  const currentDay = `${weekday}, ${day} ${month}`;
  return currentDay;
};

export const weatherIcon = (icon) => {
  let iconToDisplay;
  switch (icon) {
    case "01d":
      iconToDisplay = ClearIcon;
      break;
    case "02d":
      iconToDisplay = LightCloudIcon;
      break;
    case "03d":
      iconToDisplay = HeavyCloudIcon;
      break;
    case "04d":
      iconToDisplay = "http://openweathermap.org/img/wn/04d@4x.png";
      break;
    case "09d":
      iconToDisplay = HeavyRainIcon;
      break;
    case "10d":
      iconToDisplay = ShowerIcon;
      break;
    case "11d":
      iconToDisplay = ThunderstormIcon;
      break;
    case "13d":
      iconToDisplay = HailIcon;
      break;
    case "50d":
      iconToDisplay = "http://openweathermap.org/img/wn/50d@4x.png";
      break;
    default:
      return;
  }
  return iconToDisplay;
};
