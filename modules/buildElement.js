import getNestedProperty from "./getNestedProperty.js";
import addClassToggleToElemets from "./addClassToggleToElements.js";

/**
 *  Improved version of document.createElement, taking in type and object with options
 */
export default function buildElement(elementType, options) {
    if (!Element.prototype.toggleClass) {
        addClassToggleToElemets();
    }

    let newElement = document.createElement(elementType);

    // if (typeof options !== "object" || options instanceof Array)
    //     return undefined;

    let classes = getNestedProperty(options, "classes", false);
    let attributes = getNestedProperty(options, "attributes", false);
    let id = getNestedProperty(options, "id", false);

    if (classes.length) {
        classes.forEach((c) => newElement.toggleClass(c));
    }

    if (attributes.length) {
        attributes.forEach((a) => newElement.toggleClass(a));
    }

    if (id) {
        newElement.id = id;
    }

    return newElement;
}
