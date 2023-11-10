//En el archivo dataFunctions.js define las siguientes funciones:
//una función sortBy que tiene 3 parámetros (data, sortBy, sortOrder) y devuelve el arreglo ordenado
// una función filterBy que tiene 3 parámetros (data, filterBy, value) y devuelve el arreglo

// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//llamo la data para hacer filtrado
/*export const mainField = (data) => {
  let camposEstudio = ["Matemáticas","Filosofía","Ciencia de la Computación","Composición Musical","Física","Actuación","Astronomía","Astrofísica","Química"]
  let camposFiltrados = camposEstudio.forEach();
  return camposFiltrados;
}; */

 export function filterData(data,camposEstudio,camposFiltrados) {
  let tarjetasFiltradas = data.filter(tarjeta => tarjeta.facts[camposEstudio].includes(camposFiltrados));
  return tarjetasFiltradas;
};
//function sortData(data, sortBy, sortOrder)
export function sortData(data, alfabetico, abecedario) {
   if (abecedario === "Asc") {
    return data.sort((a, b) => a[alfabetico].localeCompare(b[alfabetico]));
  } else if (abecedario === "Desc") {
    return data.sort((a, b) => b[alfabetico].localeCompare(a[alfabetico]));
  } else {
    return data; // Orden
  }
};

//function sortData(data, sortBy,sortOrder) {}

//function filterData(data, filterBy, value) {
//return data.filter(item => item[filterBy] === value);
//}

export const anotherExample = () => {
  return [];
};


function tenRun(nums) {

}