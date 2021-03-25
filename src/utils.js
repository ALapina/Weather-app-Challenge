export const currentDay = () => {
  const today = new Date();
  const day = today.toLocaleString("default", { day: "numeric" });
  const weekday = today.toLocaleString("default", { weekday: "short" });
  const month = today.toLocaleString("default", { month: "short" });
  const currentDay = `${weekday}, ${day} ${month}`;
  return currentDay;
};
