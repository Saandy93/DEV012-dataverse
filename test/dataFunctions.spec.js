import { filterData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterData", () => {
  it("campoMatematicas", () => {
    const filtradoMatematicas = filterData(
      fakeData,
      "mainField",
      "Matemáticas"
    );
    expect(filtradoMatematicas.length).toBe(2);
  });
});
