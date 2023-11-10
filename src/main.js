import { renderItems } from './view.js';
import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';


import data from './data/dataset.js';




const cartas = document.querySelector("#root"); // llamo al id contenedor tarjetas
cartas.innerHTML = renderItems(data); // Renderiza dinamicamente la data por tarjeta

//Dom y evento escucha para el filtro campo de estudio
const selectFiltro = document.querySelector("select[name='filtro']")
selectFiltro.addEventListener("change",(event)=>{ 
 const dataFiltrada = filterData(data,"mainField",event.target.value) 
 cartas.innerHTML = ""; 
 cartas.innerHTML = renderItems(dataFiltrada);
});

const ordenado = document.querySelector("select[name='name']");
ordenado.addEventListener("change",(event)=>{
 const orden = sortData(data,"name",event.target.value);
 cartas.innerHTML = "";
 cartas.innerHTML = renderItems(orden);
 
});

const botonBorrar = document.querySelector("button[data-testid='button-clear']");
botonBorrar.addEventListener ("click" , function () {
cartas.innerHTML = renderItems(data);
//cartas.innerHTML = cartas.innerHTML.replace(renderItems(data));

});


