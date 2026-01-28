import { describe, expect, it } from "vitest";

import { isVersionLessThanOrEqual, toVersionParts } from "../src/index";

describe("toVersionParts", () => {
  it("parses dot-separated numeric parts", () => {
    expect(toVersionParts("1.2.3")).toEqual([1, 2, 3]);
  });

  it("marks invalid or negative segments as -1", () => {
    expect(toVersionParts("1.a.-2")).toEqual([1, -1, -1]);
  });

  it("treats empty or whitespace segments as -1", () => {
    expect(toVersionParts("1..2")).toEqual([1, -1, 2]);
    expect(toVersionParts("1.  .2")).toEqual([1, -1, 2]);
  });
});

describe("isVersionLessThanOrEqual", () => {
  it("returns true for missing version", () => {
    expect(isVersionLessThanOrEqual(null, "1.0.0")).toBe(true);
  });

  it("compares versions with different lengths", () => {
    expect(isVersionLessThanOrEqual("1.2", "1.2.0")).toBe(true);
    expect(isVersionLessThanOrEqual("1.2.1", "1.2")).toBe(false);
  });

  it("treats invalid segments as old", () => {
    expect(isVersionLessThanOrEqual("1.a.0", "1.0.0")).toBe(true);
  });

  it("treats empty segments as old", () => {
    expect(isVersionLessThanOrEqual("1..2", "1.0.0")).toBe(true);
  });
});
