"use strict";

var React = require("react/addons");
require("./button.css");

module.exports = React.createClass({
  displayName: "Button",

  render () {
    return this._render(this.props, this.state);
  },

  _render (props, state) {

    return (
      <a
        className = "btn" >
        { props.name }
      </a>
    );
  }

});

