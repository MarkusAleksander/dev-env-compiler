// * Import modules - all unnecessary modules will be removed automatically

// * Extending Document API
import addClassToggleToElements from "./../modules/addClassToggleToElements.js";
import addMoveElementToLocation from "./../modules/addMoveElementToLocation.js";
import addChangeStyleToElement from "./../modules/addChangeStyleToElement.js";

// * Checker Functions
import checkDefined from "./../modules/checkDefined.js";
import checkElementIsInView from "./../modules/checkElementIsInView.js";
import pollFunction from "./../modules/pollFunction.js";
import selectorExists from "./../modules/selectorExists.js";

// * General Purpose Functions
import formatNumber from "./../modules/formatNumber.js";
import getNestedProperty from "./../modules/getNestedProperty.js";
import getScrollProgress from "./../modules/getScrollProgress.js";
import onDomReady from "./../modules/onDomReady.js";

// * Plugins
// * Uncomment as required
// import countdownTimer from "./../modules/countdownTimer.js";

// * Polyfills
import polyfillNodeListForEach from "./../modules/polyfillNodeListForEach.js";

// * Begin coding...

onDomReady(someFunction);

function someFunction() {
    let x = "£2.50";

    let num = formatNumber(x);

    console.log(`num is: ${num}`);
}
