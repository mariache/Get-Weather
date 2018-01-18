var React =require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//         var {location, temp} = this.props;
//         //the same like
//         //var location = this.props.location;
//         //var temp = this.props.temp;
//
//         return (
//             <div>
//                 <h3>It's it {temp} in {location}</h3>
//             </div>
//         )
//     }
// });

    //var WeatherMessage = (props) => {
    //var {location, temp} = props;
var WeatherMessage = ({temp,location})
    return (
        <div>
            <h3>It's it {temp} in {location}</h3>
        </div>
    )
};

module.exports = WeatherMessage;