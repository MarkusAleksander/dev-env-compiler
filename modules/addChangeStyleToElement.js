/**
 *  Extends the Element object with style change functionality
 */
export default function addChangeStyleToElement() {
    /**
     * Change Style on an element
     * @param {string} prop - style property to change
     * @param {string} value - value to change the property to
     */
    Element.prototype.changeStyle = function changeStyle(prop, value) {
        let s = this.style;
        s[prop] = value;
    };
}
