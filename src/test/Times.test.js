import { initializeTimes, updateTimes } from "../components/Times";

const DEFAULT_SLOTS = ["17:00","18:00","19:00","20:00","21:00","22:00"];

describe("initializeTimes", () => {
  it("returns the default slots", () => {
    expect(initializeTimes()).toEqual(DEFAULT_SLOTS);
  });
});

describe("updateTimes", () => {
  it("returns the same default slots for any state/action", () => {
    const custom = ["09:00","10:00"];
    expect(updateTimes(custom, "2025-07-29")).toEqual(DEFAULT_SLOTS);
  });
});
