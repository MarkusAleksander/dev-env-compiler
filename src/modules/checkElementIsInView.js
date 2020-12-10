import checkDefined from "./checkDefined.js";

/**
 * Check if an element is in view, by default checks if partly in view. Set false to check fully in view
 * @param {element} el 
 * @param {boolean} is_part_view
 */
export default function checkIsInVIew(el, is_part_view = true) {
    if (!checkDefined(el) || !el.nodeType) return false;

    const rect = el.getBoundingClientRect();

    // * no offset parent if element is hidden
    if (!el.offsetParent) return false;

    let t = Math.floor(rect.top),
        l = Math.floor(rect.left),
        r = Math.floor(rect.right),
        b = Math.floor(rect.bottom);

    if (is_part_view) {
        return (
            (t < (window.innerHeight ||
                document.documentElement.clientHeight))
            &&
            (b > 0)
            &&
            (l < ((window.innerWidth ||
                document.documentElement.clientWidth)))
            &&
            (r > 0)
        );
    } else {
        return (
            t >= 0 &&
            l >= 0 &&
            b <=
            (window.innerHeight ||
                document.documentElement.clientHeight) &&
            r <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}