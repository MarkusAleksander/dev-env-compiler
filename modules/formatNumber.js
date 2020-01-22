/**
 * Extract a numerical value from a string
 * @param {number} num - string containing number to extract
 * @param {any} returnIfNaN - value to return if NaN
 */
export default function formatNumber(num, returnIfNaN) {
    let n = Number(num.replace(/[^0-9.]+/g, ""));

    if (isNaN(n)) {
        return returnIfNaN;
    }
    return n;
}
