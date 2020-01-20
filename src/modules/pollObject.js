export default function pollObject(obj, cb, pollInterval = 5, pollLimit = 10) {
    let x = 0;

    let checkDefined = function checkDefined() {
        return typeof obj !== undefined;
    };

    let timeout = function timeout() {
        window.setTimeout(doPoll, pollInterval);
    };

    let doPoll = function doPoll() {
        if (checkDefined) {
            cb();
        } else if (!checkDefined && x++ < pollLimit) {
            timeout();
        }
    };
    timeout();
}
