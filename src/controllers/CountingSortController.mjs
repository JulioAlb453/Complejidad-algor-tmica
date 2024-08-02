import TornilloModel from '../models/TornilloModel.mjs';
import TuercaModel from '../models/TuercaModel.mjs';
export default class CountingSortController {
    countingSort(tuercas, tornillos) {
        const maxTuercaId = Math.max(...tuercas.map(tuerca => tuerca.getId()));
        const maxTornilloId = Math.max(...tornillos.map(tornillo => tornillo.getId()));
        const max = Math.max(maxTuercaId, maxTornilloId);
        
        const countTuercas = new Array(max + 1).fill(0);
        const countTornillos = new Array(max + 1).fill(0);
    
        tuercas.forEach(tuerca => countTuercas[tuerca.getId()]++);
        tornillos.forEach(tornillo => countTornillos[tornillo.getId()]++);
    
        const emparejamientos = [];
    
        for (let i = 0; i <= max; i++) {
            while (countTuercas[i] > 0 && countTornillos[i] > 0) {
                emparejamientos.push(new TuercaModel(i), new TornilloModel(i, i));
                countTuercas[i]--;
                countTornillos[i]--;
            }
        }
    
        return emparejamientos;
    }

    imprimirListas(tuercas, tornillos) {
        console.log("Tuercas:");
        tuercas.forEach(tuerca => console.log(`Tuerca ID: ${tuerca.getId()}`));

        console.log("Tornillos:");
        tornillos.forEach(tornillo => 
            console.log(`Tornillo ID: ${tornillo.getId()}, ID Tuerca: ${tornillo.getIdTuerca()}`)
        );
    }
}
