var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function () {
//         return(
//             <div>
//                 <Nav/>
//                 <h2>Get weather react app</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return(
        <div>
            <Nav/>
            <h2>Get weather react app</h2>
            {props.children}
        </div>
    );
}

module.exports = Main;