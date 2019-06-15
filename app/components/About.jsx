var React = require("react");

var About = props => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather app built on React. I have built this app to touch
        React in action
      </p>
      <p>Here are some of the tols I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the
          JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open
          Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

export default About;
