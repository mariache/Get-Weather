import axios from "axios";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query: any) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      q: query,
      units: "metric",
      APPID: process.env,
    },
  });

  return data;
};
