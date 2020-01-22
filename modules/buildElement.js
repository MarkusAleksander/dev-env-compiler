import getNestedProperty from "./getNestedProperty.js";
import addClassToggleToElemets from "./addClassToggleToElements.js";

addClassToggleToElemets();

/**
 *  Improved version of document.createElement, taking in type and object with options
 */
export default function buildElement(elementType, options) {
    let newElement = document.createElement(elementType);

    if (typeof options !== "object" || options instanceof Array)
        return undefined;

    let classes = getNestedProperty(options, "classes", false);
    let attributes = getNestedProperty(options, "attributes", false);

    if (classes.length) {
        classes.forEach((c) => newElement.toggleClass(c));
    }

    if (attributes.length) {
        attributes.forEach((a) => newElement.toggleClass(a));
    }

    return newElement;
}
