# DOCUMENT IS OUTDATED - I will reupdate this in time
# Dev Env Setup

This is a Gulp based source code builder for HTML, CSS and JS.

This setup will help compile JS scripts, CSS, HTML and move relevant assets to a production ready folder (prod).

It has compile options for just JS, CSS, HTML or Assets or to watch all files and build on update.

## Requirements

-   Install gulp-cli - `npm install gulp-cli -g`
-   Run `npm install` to download dependencies

## Uses

-   For JS, there is Babel, Rollup and Terser
-   For CSS, there is Autoprefixer, PostCSS
-   HTML and Assets just get copied across
-   Prettier is installed (todo - include in build)

## Commands

-   `gulp javascript` for javascript only files
-   `gulp css` for css only files
-   `gulp html` for html only files
-   `gulp assets` for assets only files
-   `gulp watch` to watch for changes on all files

## JS Modules

-   Custom Countdown Timer (personally built)
-   Format Number (extract numerical values from text - useful for getting numbers from accountancy values)
-   Get nested property (search through an object and return a custom value if not found)
-   Fire on Dom Ready
-   Poll for an object and if found, call passed function
-   Check selector exists
-   More to come!

### TODOs

-   Write better docs
-   List out installed plugins

## Module List

## Extending Document API

-   addClassToggleToElements

Add a class toggle function to the Element prototype so that classes can be toggled on the elements directly.
e.g.

```js
// Begin
addClassToggleToElements();

// Example Usage
let el = document.querySelector("#id");
el.toggleClass("reveal");
```

-   addMoveElementToLocation

Add a "Move Element To Location" function to the Element prototype so that elements can be given a location to 'go to'.
e.g.

```js
// Begin
addMoveElementToLocation();

// Example usage
let target = document.querySelector("header");
let elToMove = document.querySelector("nav");

elToMove.moveElementToLocation(target, "afterend");
```

-   addChangeStyleToElement

Add a Change Style function to the Element prototype so that elements can have their style changed directly.
e.g

```js
// Begin
addChangeStyleToElement();

// Example Usage
let el = document.querySelector("p");
el.changeStyle("color", "red");
```

## Checker Functions

-   checkDefined
-   checkElementIsInView
-   pollFunction
-   selectorExists

## General Purpose Functions

-   formatNumber
-   getNestedProperty
-   getScrollProgress
-   onDomReady

## Plugins

-   countdownTimer

## Polyfills

-   polyfillNodeListForEach
