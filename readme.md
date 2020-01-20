# Dev Env Setup

This is a Gulp based source code builder for HTML, CSS and JS.

This setup will help compile JS scripts, CSS, HTML and move relevant assets to a production ready folder (prod).

It has compile options for just JS, CSS, HTML or Assets or to watch all files and build on update.

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
