import addChangeStyleToElement from "./addChangeStyleToElement";
import addClassToggleToElements from "./addClassToggleToElements";
import addReplaceClassToElement from "./addReplaceClassToElement";
import addMoveElementToLocation from "./addMoveElementToLocation";
import safeLoop from "./safeLoop";

/**
 * Improved version of document.createElement, taking in type and object with options
 * @param {string} elementType - string representing the element type
 * @param {object} options - object of options to add to the element: classes, id, attributes, styles
 */
export default function buildElement(
    elementType,
    { attributes, styles, events },
    { location, rel_pos }
) {
    // * Create The Element
    let el = document.createElement(elementType);

    // * Add extra functionalities
    addChangeStyleToElement([el]);
    addClassToggleToElements([el]);
    addReplaceClassToElement([el]);
    addMoveElementToLocation([el]);

    // * Add any attributes (classes, data attributes)
    if (attributes && typeof attributes === "object") {
        safeLoop(Object.keys(attributes), (scope, idx, attr) => {
            el.setAttribute(attr, attributes[attr]);
        });
    }

    // * Add any styles
    if (styles && typeof styles === "object") {
        safeLoop(Object.keys(styles), (scope, idx, style) => {
            el.changeStyle(style, styles[style]);
        });
    }

    // * Set up any events
    if (events && Array.isArray(events)) {
        safeLoop(events, (scope, idx, eventObj) => {
            safeLoop(Object.keys(eventObj), (scope, idx, event_type) => {
                el.addEventListener(event_type, eventObj[event_type]);
            });
        });
    }

    // * Return new element
    return el;
}
