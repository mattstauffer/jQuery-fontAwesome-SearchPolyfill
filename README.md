#jQuery fontAwesome Search Polyfill

Uses fontAwesome icons (assumes you have them already configured properly on your site) to mimic the behavior of the Webkit Search Input type.

##Options
* _theme_: (default 'none') In the future, will allow you to choose from pre-defined themes.

##Sample CSS
Here's the CSS we're using:

```
.search-input-wrapper { 
    position: relative; 
}  .search-input-wrapper i, .search-input-wrapper a {
    color: #bbb;
    display: block;
    font-size: 1.2em;
    position: absolute;
    top: -0.15em;
    z-index: 100; }
  .search-input-wrapper .icon-search {
    left: .4em; }
  .search-input-wrapper .icon-remove-sign {
    color: #bbb;
    text-decoration: none;
    right: .4em; }
    .search-input-wrapper .icon-remove-sign:hover {
      color: #999; }
    .search-input-wrapper .icon-remove-sign:active {
      color: #777; }

input[type="search"] {
  border-radius: .3em;
  border: 1px solid #bbb;
  padding: .25em 1.75em .25em 1.75em;
  position: relative; }
  input[type="search"]:focus {
    border-color: #999;
    outline: 0;
    outline: none; }
```