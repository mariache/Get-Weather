export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  code: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherError {
  code: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
