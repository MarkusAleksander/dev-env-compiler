import scrollEventManager from "./../../modules/scrollEventManager.js";

function doSomething() {
    console.log("logger");
}

let storeID = scrollEventManager.addScrollEventListener(doSomething, 20);

window.setTimeout(function() {
    console.log("attempting remove");
    scrollEventManager.removeScrollEventListener(storeID);
}, 4000);
