import buildElement from "./../modules/buildElement.js";
import onDomReady from "./../modules/onDomReady.js";
import checkDefined from "./../modules/checkDefined.js";

const config = {
    currentFilterShelfSelector: "#controlWrapper",
    isTesting: true,
    selectBoxPlacementTarget: {
        el: ".jdwOptionHolder",
        relPos: "afterbegin",
    },
    selectBoxTarget: {
        el: ".jdwOptionHolder select",
    },
};

function updateFakeSelectBox(fakeSelectBox, content) {
    fakeSelectBox.innerHTML = "<p>Sort: " + content + "</p>";
}

function setupSelectBox(selectBoxPlacementTarget, selectBoxTarget) {
    let fakeSelectBox = document.createElement("div");
    fakeSelectBox.id = "mn_fake_selectbox";
    selectBoxPlacementTarget.insertAdjacentElement(
        config.selectBoxPlacementTarget.relPos,
        fakeSelectBox
    );

    updateFakeSelectBox(
        fakeSelectBox,
        selectBoxTarget.selectedOptions[0].label
    );

    selectBoxTarget.addEventListener("change", function() {
        updateFakeSelectBox(
            fakeSelectBox,
            selectBoxTarget.selectedOptions[0].label
        );
    });
}

function setExpLoaded() {
    window.setTimeout(function() {
        document.querySelector("body").classList.add("plp_var_b_loaded");
    }, 500);
}

function run() {
    if (config.isTesting) {
        document.querySelector("monetatepreview").remove();
    }

    let currentFilterShelf = document.querySelector(
            config.currentFilterShelfSelector
        ),
        selectBoxPlacementTarget = document.querySelector(
            config.selectBoxPlacementTarget.el
        ),
        selectBoxTarget = document.querySelector(config.selectBoxTarget.el);

    if (
        !checkDefined(currentFilterShelf) ||
        !checkDefined(selectBoxPlacementTarget) ||
        !checkDefined(selectBoxTarget)
    )
        return;

    setupSelectBox(selectBoxPlacementTarget, selectBoxTarget);

    // All loaded
    setExpLoaded();
}

onDomReady(run);
