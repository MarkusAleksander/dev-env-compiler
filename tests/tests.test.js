/* eslint-disable no-undef */
const formatNumber = require("./modules/formatNumber.js").default;

test("returns 35 from '35'", () => {
    expect(formatNumber("35", null)).toBe(35);
});
test("returns 35 from '£35'", () => {
    expect(formatNumber("£35", null)).toBe(35);
});
test("returns 35.04 from '£35.04'", () => {
    expect(formatNumber("£35.04", null)).toBe(35.04);
});
test("returns 35.40 from '£35.40'", () => {
    expect(formatNumber("£35.40", null)).toBe(35.4);
});
test("returns 35.04 from 'the price is £35.04'", () => {
    expect(formatNumber("the price is £35.04", null)).toBe(35.04);
});
test("returns 35.04 from 'the price is £35.04.45.34.67567567'", () => {
    expect(formatNumber("the price is £35.04", null)).toBe(35.04);
});
test("returns null from 'the price is'", () => {
    expect(formatNumber("the price is", null)).toBe(null);
});
test("returns null from undefined", () => {
    expect(formatNumber(undefined, null)).toBe(null);
});
test("returns null from 2", () => {
    expect(formatNumber(2, null)).toBe(null);
});
test("returns 12 from new String('asdas12asdsad')", () => {
    expect(formatNumber(new String("asdas12asdsad"), null)).toBe(12);
});
test("returns null from ['test']", () => {
    expect(formatNumber(["test"], null)).toBe(null);
});
test("returns null from {test:'test'}", () => {
    expect(formatNumber({ test: "test" }, null)).toBe(null);
});
