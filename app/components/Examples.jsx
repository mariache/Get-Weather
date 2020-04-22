var React = require("react");
var { Link } = require("react-router");

var Examples = props => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Moscow">Moscow, Russia</Link>
        </li>
        <li>
          <Link to="/?location=Auckland">Auckland, NZ</Link>
        </li>
      </ol>
    </div>
  );
};

export default Examples;
