import React, { useState, FC } from "react";

import "./index.css";
import { fetchWeather } from "./api/fetchWeather";
import ReactDOM from "react-dom";

const App: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<string>("");
  const onSearch = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    console.log(weather),
    (
      <div>
        <input
          type="text"
          name=""
          id=""
          className="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={onSearch}
        />
      </div>
    )
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
