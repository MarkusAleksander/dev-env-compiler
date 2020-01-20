export default function formatNumber(num, returnIfNaN) {
    let n = Number(num.replace(/[^0-9.]+/g, ""));

    if (isNaN(n)) {
        return returnIfNaN;
    }
    return n;
}
