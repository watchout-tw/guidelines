# 元件 Component

## 目錄結構 Directory Structure
我們使用 Jest 來測試元件並且將相關的 html、css、圖片放在同一個目錄之中。目錄要以元件名稱來命名並且遵守 PascalCase 命名原則。若有原始設計檔案，請放在`origins`目錄下。

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
請描述元件如何運作。盡量寫下你所知道的細節。

It describes how component works. Please write as more details as you know.

##  Button.jsx
### 規則 Rules
  * 若是屬性超過兩個以字母排序的方式將他們分置在每一行。
  
  
  * seperate to each line if tag contains two more attributes and by alphabetical order.
  
### 變數命名原則 Naming convention about variables
  * 元件名稱：**PascalCase**，首字母要大寫。
  * 變數：**camelCase**，首字母要小寫。
  
  
  * component name: **PascalCase**
  * variables: **camelCase**

### 範例 Example
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
### 規則 Rules
  * 使用 **SUITCSS** 命名規範。
  * 變數名稱開頭要包含兩個 **-** 和 **元件名稱**。
  * 將所有變數放在 `:root` 選擇器中。
  * 請使用有意義的顏色名字或 hwb 取代十六進位碼。
  
  
  * Use naming convention of **SUITCSS**.
  * Variable name start with two dashes and its namespace.
  * Put all variables in `:root` selector.
  * Use meaningful or hwb color instead of HEX code.
  

### 範例 Example
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
  color: var(--Button-color);
  display: flex;
}
```
