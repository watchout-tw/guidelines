/*
 * Button
 */

import React from "react/addons";
import "./button.css";

export default React.createClass({
  displayName: "Button",

  render () {
    var {name} = this.props;

    return (
      <a
        className = "btn" >
        { name }
      </a>
    );
  }
});