import ParseNumber from "../../src/helpers/ParseNumber";

describe("ParseNumber()", () => {
  it("should return price", () => {
    expect(ParseNumber.price("1", "35")).toBe("1.35");
  });

  it("should return price with fixed", () => {
    expect(ParseNumber.price("1", "3")).toBe("1.30");
  });

  it("should return price even without decimal", () => {
    expect(ParseNumber.price("1")).toBe("1.00");
  });

  it("should return price even without whole", () => {
    expect(ParseNumber.price("", "3")).toBe("0.30");
  });
});
