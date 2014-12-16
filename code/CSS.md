# CSS

**目錄**

* [註解](#css-comments)
* [格式](#css-format)
  * [宣告排序](#css-order)
  * [例外](#css-exception)
* [實際範例](#css-example)

<a name="css-comments"></a>
## 註解

好的註解非常重要。花點時間描述元件如何構成，如何運作，有那些限制。不要團隊中的其他人猜測不常用或不明顯的程式碼目的。

註解風格應該要簡單且和程式庫一致。

* 在主題之前註解在新的一行。
* 每行長度最大值必須合理，例如： 80行寬。
* 自由地使用註解將 CSS 程式碼分成不同區塊。
* 保持註解縮排一致還有句首字母大寫。
* 用數行註解作為獨立宣告的文件參考。

提示： 設定你的編輯器使用快速鍵以提供你產生以上的註解模式。

範例：

```css
/**
 * 使用 Doxygen-style 註解格式簡短的描述。
 *
 * 長的敘述第一句要從這裡開始，並且包括這行的段落。
 *
 * 給予更多解釋和文件內容是理想的長敘述內容。包括HTML、網址或其他必要或有用資訊。
 *
 * TODO: 這裏條列日後要完成的工作。必須在80字以內，並且每行用兩個空格縮排。
 *
 * @tag 這是命名為tag的標籤
 *
 * 1. 提供聲明目的有幫助的描述。
 * 2. 其他聲明或任何這份註解能夠參考的聲明。
 *
 */

/* 主題註解區塊
   ========================================================================== */

/* 基本註解 */
```
<a name="css-format"></a>
## 格式

程式碼必須確保：容易閱讀、清楚地註解、減少錯誤發生機會、產生有意義的差異比較。

* 使用多選擇器時保持一行一個選擇器。
* 左大括號前使用一個空格。
* 每條宣告自成一行。
* 每個宣告使用第一層縮排。
* 每個宣告的冒號後面使用一個空格。
* 使用小寫和簡寫的 hex 值，例如: `#aaa`。
* 保持單引號或雙引號的一致。盡量使用雙引號，例如：`content: ""`。
* 選擇器中的屬性值要使用引號，例如： `input[type="checkbox"]`。
* _Where allowed_, avoid specifying units for zero-values, e.g., `margin: 0`.
* 每個逗號後面保持一個空格。
* 每個宣告後面必須要有分號。
* 右大括號必須和規則集起始的字母在同一個縱行。
* 每個規則集必須用一個空行分隔。

```css
.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: #fff;
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  color: #333;
  display: block;
  font-family: helvetica, arial, sans-serif;
}

.selector-a,
.selector-b {
  padding: 10px;
}
```
<a name="css-order"></a>
### 宣告排序

使用字母排序除非有其他需求。

```css
.selector {
  background: #000;
  border: 10px solid #333;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-family: sans-serif;
  font-size: 16px;
  text-align: right;
  width: 100%;
}
```
<a name="css-exception"></a>
### 例外

單一宣告的區塊使用一行格式。在左大括號後面和右大括號前面使用空格。

```css
.selector-1 { width: 10%; }
.selector-2 { width: 20%; }
.selector-3 { width: 30%; }
```

逗號分隔得值如果很長，像是 gradient 或 shadow，要重新排成多行來增進可讀性和增加有用的差異比較。

```css
.selector {
  background-image:
    linear-gradient(#fff, #ccc),
    linear-gradient(#f3c, #4ec);
  box-shadow:
    1px 1px 1px #000,
    2px 2px 1px 1px #ccc inset;
}
```
<a name="css-example"></a>
## 實際範例

混合不同慣例的範例。

```css
/** @define Grid; use strict */

/**
 * Column layout with horizontal scroll.
 *
 * This creates a single row of full-height, non-wrapping columns that can
 * be browsed horizontally within their parent.
 *
 * Example HTML:
 *
 * <div class="Grid">
 *   <div class="Grid-cell Grid-cell--3"></div>
 *   <div class="Grid-cell Grid-cell--3"></div>
 *   <div class="Grid-cell Grid-cell--3"></div>
 * </div>
 */

/**
 * Grid container
 *
 * Must only contain `.Grid-cell` children.
 *
 * 1. Remove inter-cell whitespace
 * 2. Prevent inline-block cells wrapping
 */

.Grid {
  font-size: 0; /* 1 */
  height: 100%;
  white-space: nowrap; /* 2 */
}

/**
 * Grid cells
 *
 * No explicit width by default. Extend with `.Grid-cell--n` classes.
 *
 * 1. Reset font-size inherited from `.Grid`
 * 2. Set the inter-cell spacing
 * 3. Reset white-space inherited from `.Grid`
 */

.Grid-cell {
  border: 2px solid #333;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1rem; /* 1 */
  height: 100%;
  overflow: hidden;
  padding: 0 10px; /* 2 */
  position: relative;
  vertical-align: top;
  white-space: normal; /* 3 */
}

/* Cell states */

.Grid-cell.is-animating {
  background-color: #fffdec;
}

/* Cell dimension modifiers
   ========================================================================== */

.Grid-cell--1 { width: 10%; }
.Grid-cell--2 { width: 20%; }
.Grid-cell--3 { width: 30%; }
.Grid-cell--4 { width: 40%; }
.Grid-cell--5 { width: 50%; }

/* Cell modifiers
   ========================================================================== */

.Grid-cell--detail,
.Grid-cell--important {
  border-width: 4px;
}
```