# jquery.optionsData.js
(Test) get default setting from html data attribute including object and array

Usage Examples:
```javascript
$(function() {
    $('#fullpage').each(function() {
        $(this).fullpage($(this).optionsData(/fullPage/));
    });
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
Usage Example 2
```javascript
$(function() {
    $('.slider').each(function() {
        $(this).slick($(this).optionsData(/slick/));
    });
});
```
```html
<div class="slider" 
    data-slick-slides-to-show="3" 
    data-slick-slides-to-scroll="1" 
    data-slick-dots="true" 
    data-slick-infinite="false" 
    data-slick-css-ease="linear" 
    data-slick-autoplay="true"
    data-slick-autoplay-speed="1"
    data-slick-speed="1000"
    data-slick-center-mode="true"
    data-slick-initial-slide="1"
    data-slick-responsive[0].breakpoint="600"
    data-slick-responsive[0].settings.slides-to-show="1"
>
```
