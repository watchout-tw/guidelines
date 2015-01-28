/*
 * Details about functions of the component
 * author: Ly <lyforever62@hotmail.com>
 *
 */

/* Dependencies */
import React from "react/addons";
import "./Button.css";

/* Module */
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