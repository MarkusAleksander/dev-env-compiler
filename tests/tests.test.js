const formatNumber = require("./modules/formatNumber.js").default;

test("returns 35 from £35", () => {
    expect(formatNumber("£35", null)).toBe(35);
});
