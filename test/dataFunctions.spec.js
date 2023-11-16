import { filterData } from "../src/dataFunctions.js";
import { sortData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
import { dataSort as fakeDataa } from "./data.js";

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

describe("sortData", () => {
  it("alfabetico", () => {
    const ordenDesc = sortData(
      fakeDataa,
      "name",
    );
    const names = [...ordenDesc];
    const namesOrdenado = names.sort();
    expect(namesOrdenado).toEqual(names);
  });
});

//const arrayOriginal = [...ordenAsc];
//const arrayOrdenado = arrayOriginal.sort();

//expect(arrayOrdenado).toEqual(arrayOriginal);
//function sortData(data, sortBy,sortOrder) {}

//function filterData(data, filterBy, value)