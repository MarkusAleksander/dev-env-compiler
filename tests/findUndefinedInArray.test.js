/* eslint-disable no-undef */
const findUndefinedInArray = require("./../prod/test/modules/findUndefinedInArray.js")
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
