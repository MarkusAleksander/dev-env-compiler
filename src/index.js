import onDomReady from "./modules/onDomReady.js";
import getNestedProperty from "./modules/getNestedProperty.js";
import formatNumber from "./modules/formatNumber.js";
import pollObject from "./modules/pollObject.js";
import selectorExists from "./modules/selectorExists.js";

function ready() {
    let d = document.querySelector("#some-id");

    if (!selectorExists(d)) return;

    let num = formatNumber(d);
}

onDomReady(ready);
