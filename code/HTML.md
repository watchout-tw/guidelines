# HTML

**目錄**

* [格式](#html-format)
  * [例外](#html-format-exception)
* [屬性排序](#html-attrs)
* [命名](#html-naming)
* [實際範例](#html-example)

<a name="html-format"></a>
## 格式

* 標籤(tag)及屬性(attribute)名字永遠使用小寫。
* 每一行只寫一個 block-level 的元素。
* 每個巢狀的 block-level 元素必須使用縮排。
* 使用無給值得數用 (例如: `checked` 而不是 `checked="checked"`)。
* 屬性值要用雙引號。
* 忽略 `link`、`style`和`script` 的 `type` 屬性。
* 要使用關閉標籤。

(每行長度最大值必須合理，例如： 80行寬。)

範例:

```html
<div class="Tweet">
  <a href="{{url}}">
    <img src="{{avatar}}" alt="">
  </a>
  <p>{{text}}</p>
  <button disabled>Reply</button>
</div>
```
<a name="html-format-exception"></a>
### 例外

元素擁有多個屬性必須重新安排成一行一個屬性，能增進可讀性還有產生有用的差異比較。

範例:

```html
<a class="{{class}}"
 data-action="{{action}}"
 data-id="{{id}}"
 href="{{url}}">
  <span>{{text}}</span>
</a>
```


<a name="html-attrs"></a>
## 屬性排序

HTML 屬性應該使用字母排序。

範例：

```html
<a class="{{class}}" data-name="{{name}}" href="{{url}}" id="{{id}}">{{text}}</a>
```


<a name="html-naming"></a>
## 命名

命名很困難但是很重要。這是在開發可維護程式庫時，關鍵的一部分。不要害怕重新命名元件。

* HTML的類別必須使用清楚，有意義且適當的名字。名字必須同時在HTML 和 CSS 檔案中提供充足資訊。
* 類別名稱要避免 _有系統_ 使用縮寫。不要讓事情難以理解。
* Avoid _systematic_ use of abbreviated class names. Don't make things
  difficult to understand.

壞的示範：

```html
<div class="cb s-scr"></div>
```

```css
.cb {
  background: #000;
}

.cb.s-scr {
  overflow: auto;
}
```

好的範例：

```html
<div class="ColumnBody is-scrollable"></div>
```

```css
.ColumnBody {
    background: #000;
}

.ColumnBody.is-scrollable {
    overflow: auto;
}
```

<a name="html-example"></a>
## 實際範例

一個混和不同慣例的範例。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
    <script src="main.js"></script>
  </head>
  <body>
    <article class="Post" id="1234">
      <time class="Post-timestamp">{{date}}</time>
      <a data-analytics-action="{{action}}"
       data-analytics-category="{{category}}"
       data-id="1234"
       href="{{url}}">{{text}}</a>
      <ul>
        <li>
          <a href="{{url}}">{{text}}</a>
          <img src="{{src}}" alt="">
        </li>
        <li>
          <a href="{{url}}">{{text}}</a>
        </li>
      </ul>

      <a class="u-linkComplex" href="{{url}}">
        <span class="u-linkComplex-target">{{text}}</span>
        {{text}}
      </a>

      <input value="text" readonly>
    </article>
  </body>
</html>
```
