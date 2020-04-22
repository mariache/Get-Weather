var React = require("react");

var WeatherMessage = ({ temp, location }) => {
  return (
    <div>
      <h3 className="text-center">
        It's it {temp} ℃ in {location} now
      </h3>
    </div>
  );
};

export default WeatherMessage;
