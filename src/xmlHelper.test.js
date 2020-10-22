import { arrayToXml } from "./xmlHelper";

describe("Xml create function", () => {
  test("it should create xml output", () => {
    const expected = "<1>\n <2>\n  <3>\n   <4>\n    <5>\n     <6>\n     </6>\n    </5>\n   </4>\n  </3>\n </2>\n</1>"
    expect(arrayToXml({ array: ['1', '2', '3', '4', '5', '6'] })).toMatch(expected);
  });

  test("it should create one level nested xml", () => {
    const expected = "<1>\n <2>\n </2>\n</1>"
    expect(arrayToXml({ array: ['1', '2'] })).toMatch(expected);
  })

  test("it should return null for empty array", () => {
    expect(arrayToXml({ array: [] })).toBe(null);
  });
});
