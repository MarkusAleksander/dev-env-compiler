/* eslint-disable no-undef */
const formatNumber = require("./modules/formatNumber.js").default;

test("formatNumber returns 35 from '35'", () => {
    expect(formatNumber("35", null)).toBe(35);
});
test("formatNumber returns 35 from '£35'", () => {
    expect(formatNumber("£35", null)).toBe(35);
});
test("formatNumber returns 35.04 from '£35.04'", () => {
    expect(formatNumber("£35.04", null)).toBe(35.04);
});
test("formatNumber returns 35.40 from '£35.40'", () => {
    expect(formatNumber("£35.40", null)).toBe(35.4);
});
test("formatNumber returns 35.04 from 'the price is £35.04'", () => {
    expect(formatNumber("the price is £35.04", null)).toBe(35.04);
});
test("formatNumber returns 35.04 from 'the price is £35.04.45.34.67567567'", () => {
    expect(formatNumber("the price is £35.04", null)).toBe(35.04);
});
test("formatNumber returns null from 'the price is'", () => {
    expect(formatNumber("the price is", null)).toBe(null);
});
test("formatNumber returns null from undefined", () => {
    expect(formatNumber(undefined, null)).toBe(null);
});
test("formatNumber returns null from 2", () => {
    expect(formatNumber(2, null)).toBe(null);
});
test("formatNumber returns 12 from new String('asdas12asdsad')", () => {
    expect(formatNumber(new String("asdas12asdsad"), null)).toBe(12);
});
test("formatNumber returns null from ['test']", () => {
    expect(formatNumber(["test"], null)).toBe(null);
});
test("formatNumber returns null from {test:'test'}", () => {
    expect(formatNumber({ test: "test" }, null)).toBe(null);
});

const checkDefined = require("./modules/checkDefined.js").default;

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

const findUndefinedInArray = require("./modules/findUndefinedInArray.js")
    .default;

test("findUndefinedInArray returns false from [1,2,3]", () => {
    expect(findUndefinedInArray([1, 2, 3])).toBe(false);
});
test("findUndefinedInArray returns true from [1,undefined,3]", () => {
    expect(findUndefinedInArray([1, undefined, 3])).toBe(true);
});
test("findUndefinedInArray returns true from [1,null,3]", () => {
    expect(findUndefinedInArray([1, null, 3])).toBe(true);
});
test("findUndefinedInArray returns true from []", () => {
    expect(findUndefinedInArray([])).toBe(true);
});
test("findUndefinedInArray returns true from 1", () => {
    expect(findUndefinedInArray(1)).toBe(true);
});
test("findUndefinedInArray returns true from {}", () => {
    expect(findUndefinedInArray({})).toBe(true);
});

const getNestedProperty = require("./modules/getNestedProperty.js").default;

test("getNestedProperty return true from { 'test': true }, 'test', false", () => {
    expect(getNestedProperty({ test: true }, "test", false)).toBe(true);
});
test("getNestedProperty return true from { 'lvl1': { 'lvl2': true} }, 'lvl1.lvl2', false", () => {
    expect(
        getNestedProperty({ lvl1: { lvl2: true } }, "lvl1.lvl2", false)
    ).toBe(true);
});
test("getNestedProperty return true from { 'lvl1': { 'lvl2': [true]} }, 'lvl1.lvl2.0', false", () => {
    expect(
        getNestedProperty({ lvl1: { lvl2: [true] } }, "lvl1.lvl2.0", false)
    ).toBe(true);
});
test("getNestedProperty return true from { 'lvl1': { 'lvl2': [1, {'lvl4': true}]} }, 'lvl1.lvl2.1.lvl4', false", () => {
    expect(
        getNestedProperty(
            { lvl1: { lvl2: [1, { lvl4: true }] } },
            "lvl1.lvl2.1.lvl4",
            false
        )
    ).toBe(true);
});
test("getNestedProperty return true from [[2,[{test: [true]},3]], 1], '0.1.0.test.0', false", () => {
    expect(
        getNestedProperty([[1, [{ test: [true] }]]], "0.1.0.test.0", false)
    ).toBe(true);
});
test("getNestedProperty return false from { 'lvl1': { 'lvl2': [1, {'lvl4': true}]} }, 'lvl1.lvl2.0.lvl4', false", () => {
    expect(
        getNestedProperty(
            { lvl1: { lvl2: [1, { lvl4: true }] } },
            "lvl1.lvl2.0.lvl4",
            false
        )
    ).toBe(false);
});

test("getNestedProperty return false from {test: false}, '', false", () => {
    expect(getNestedProperty({ test: false }, "", false)).toBe(false);
});
