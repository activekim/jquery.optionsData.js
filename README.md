# jquery.optionsData.js
(Test) get default setting from html data attribute including object and array

Usage Examples:
```javascript
$(function() {
  $('#fullpage').each(function(){$(this).fullpage($(this).optionsData(/fullPage/));});
});
```
```html
<div id="fullpage"
	data-full-page-sections-color[0]="#1bbc9b"
	data-full-page-sections-color[1]="#4BBFC3"
	data-full-page-sections-color[2]="#7BAABE"
	data-full-page-sections-color[3]="whitesmoke"
	data-full-page-sections-color[4]="#ccddff"
	data-full-page-anchors[0]="firstPage"
	data-full-page-anchors[1]="secondPage"
	data-full-page-anchors[2]="3rdPage"
	data-full-page-anchors[3]="4thpage"
	data-full-page-anchors[4]="lastPage"
	data-full-page-menu="#menu",
	data-full-page-scrolling-speed="100"
>
```
