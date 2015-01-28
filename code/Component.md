# Component

## Directory Structure
We use jest to test our components and put all html, css, images in one directory. If there are origin design files, please put in `origins` directory.

```
MyComponentName
+-- __tests__
|   +-- Button-test.js
+-- images
|   +-- Button-background.jpg
+-- origins
|   +-- Button.ai
+-- Button.css 
+-- Button.jsx
+-- Button.md
```

##  Button.md
It describes how component works. Please write as more details as you know.

##  Button.jsx
### Rules
  * seperate to each line if tag contains two more attributes.
  
### Naming Convention about variables
  * component name: PascalCase
  * variables: camelCase

### Example
```
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
```

## Button.css
### Rules
  * Use naming convention of SUITCSS.
  * Variable name start with two dashes and its namespace.
  * Put all variables in `:root` selector.
  

### Example
```
/*
 * Details about styles of the component
 * author: Ly <lyforever62@hotmail.com>
 * 
 */
:root {
  --Button-color: green;
}

.Button {
  color: var(--my-color);
  display: flex;
}
```
