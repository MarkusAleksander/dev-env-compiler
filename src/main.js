import buildElement from "./../modules/buildElement.js";
import onDomReady from "./../modules/onDomReady.js";
import checkDefined from "./../modules/checkDefined.js";

const config = {
    currentFilterShelfSelector: "#controlWrapper",
    placementTarget: {
        el: ".site-canvas",
        relPos: "beforeend",
    },
    isTesting: true,
    selectBoxPlacementTarget: {
        el: ".jdwOptionHolder",
        relPos: "afterbegin",
    },
    selectBoxTarget: {
        el: ".jdwOptionHolder select",
    },
};

function insertShelf(placementTarget, currentFilterShelf, newfilterShelf) {
    placementTarget.insertAdjacentElement(
        config.placementTarget.relPos,
        newfilterShelf
    );
    newfilterShelf.insertAdjacentElement("afterbegin", currentFilterShelf);
}

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
        document.querySelector("body").classList.add("plp_var_a_loaded");
    }, 500);
}

function run() {
    if (config.isTesting) {
        document.querySelector("monetatepreview").remove();
    }

    let newfilterShelf = buildElement("div", { id: "mn_filter_shelf" }),
        currentFilterShelf = document.querySelector(
            config.currentFilterShelfSelector
        ),
        placementTarget = document.querySelector(config.placementTarget.el),
        selectBoxPlacementTarget = document.querySelector(
            config.selectBoxPlacementTarget.el
        ),
        selectBoxTarget = document.querySelector(config.selectBoxTarget.el);

    if (
        !checkDefined(placementTarget) ||
        !checkDefined(currentFilterShelf) ||
        !checkDefined(selectBoxPlacementTarget) ||
        !checkDefined(selectBoxTarget)
    )
        return;

    insertShelf(placementTarget, currentFilterShelf, newfilterShelf);

    setupSelectBox(selectBoxPlacementTarget, selectBoxTarget);

    // All loaded
    setExpLoaded();
}

onDomReady(run);
