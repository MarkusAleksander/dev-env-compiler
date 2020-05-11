/* eslint-disable no-undef */
const checkDefined = require("./../prod/test/modules/checkDefined.js").default;

test("checkDefined returns true from 1", () => {
    expect(checkDefined(1)).toBe(true);
});
test("checkDefined returns false from undefined", () => {
    expect(checkDefined(undefined)).toBe(false);
});
test("checkDefined returns false from null", () => {
    expect(checkDefined(null)).toBe(false);
});
test("checkDefined returns true from {}", () => {
    expect(checkDefined({})).toBe(true);
});
test("checkDefined returns true from []", () => {
    expect(checkDefined([])).toBe(true);
});
