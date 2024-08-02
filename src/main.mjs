import SeleccionController from "./controllers/seleccionController.mjs";
import QuickSortController from "./controllers/quickSortController.mjs";
import CountingSortController from "./controllers/CountingSortController.mjs";
import TuercaModel from './models/TuercaModel.mjs'
import TornilloModel from './models/TornilloModel.mjs'

// Función para mezclar una lista (algoritmo de Fisher-Yates)
function mezclar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}


const tuercas= []
for (let i =1; i <= 10; i++){
    tuercas.push(new TuercaModel(i))
}

const tornillos=[]
for (let i = 1; i <= 10; i++) {
    tornillos.push(new TornilloModel(i,i))
}



console.log("Tuercas antes de mezclar:");
tuercas.forEach(tuerca => console.log(`Tuerca ID: ${tuerca.getId()}`));

console.log("Tornillos antes de mezclar:");
tornillos.forEach(tornillo => console.log(`Tornillo ID: ${tornillo.getId()}, ID Tuerca: ${tornillo.getIdTuerca()}`));

// Mezclar las listas
mezclar(tuercas);
mezclar(tornillos);

console.log("Tuercas después de mezclar:"+JSON.stringify(tuercas));


console.log("Tornillos después de mezclar:"+JSON.stringify(tornillos));

const seleccion = new SeleccionController()
const quickSort = new QuickSortController()
const countingSort = new CountingSortController()

console.log("EJECUTANDO EMPAREJAMIENTO");
console.log(JSON.stringify(seleccion.emparejarSeleccion(tuercas, tornillos)))

console.log("FIN EMPAREJAMIENTO");

console.log("EJECUTANDO QUICKSOR");
quickSort.quickSort(tuercas,tornillos,0, tuercas.length - 1)
quickSort.imprimirListas();

console.log("FIN QUICKSOR");

console.log("EJECUTANDO COUNTING SORT");
countingSort.countingSort(tuercas, tornillos)

console.log("FIN COUNTING SORT");

