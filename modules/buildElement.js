/**
 * Improved version of document.createElement, taking in type and object with options
 * @param {string} elementType - string representing the element type
 * @param {object} options - object of options to add to the element: classes, id, attributes, styles, location
 */
export default function buildElement(elementType, options) {
    // * Create The Element
    let newElement = document.createElement(elementType);

    // * Add any classes
    if (options.classes && Array.isArray(options.classes)) {
        options.classList.forEach((c) => newElement.classList.add(c));
    }

    // * Add any attributes
    if (options.attributes && Array.isArray(options.attributes)) {
        options.attributes.forEach((a) =>
            newElement.setAttribute(a.attribute, a.value)
        );
    }

    // * Add an ID
    if (options.id) {
        newElement.id = options.id;
    }

    // * Add extra functionality
    newElement.changeStyle = function changeStyle(prop, value) {
        // * Change a style property
        let s = this.style;
        s[prop] = value;
    };

    newElement.toggleClass = function toggleClass(className, condition) {
        // * Toggle a class
        let cl = this.classList;
        let cd = condition !== undefined ? condition : true;
        cl.contains(className) && cd ? cl.remove(className) : cl.add(className);
    };

    newElement.replaceClass = function replaceClass(
        oldClassName,
        newClassName
    ) {
        // * Replace classname
        let cl = this.classList;
        cl.remove(oldClassName);
        cl.add(newClassName);
    };

    // * Add any styles
    if (options.styles && Array.isArray(options.styles)) {
        options.styles.forEach((s) => newElement.changeStyle(s.prop, s.value));
    }

    // * Insert at location if specified
    if (options.location) {
        let loc = options.location;
        if (loc.relPos && loc.relElement) {
            loc.relElement.insertAdjacentElement(loc.relPos, newElement);
        }
    }

    // * Return new element
    return newElement;
}
