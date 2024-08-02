export default class SeleccionController{
    comparar(tuerca, tornillo) {
        if (tuerca.id === tornillo.idTuerca) {
            return 0;
        } else if (tuerca < tornillo) {
            return -1;
        } else {
            return 1;
        }
    }
    
    emparejarSeleccion(tuercas, tornillos) {
        let emparejamientos = [];
        let usados = new Array(tornillos.length).fill(false);
    
        for (let i = 0; i < tuercas.length; i++) {
            for (let j = 0; j < tornillos.length; j++) {
                if (!usados[j] && this.comparar(tuercas[i], tornillos[j]) === 0) {
                    emparejamientos.push([tuercas[i], tornillos[j]]);
                    usados[j] = true;
                    break;
                }
            }
        }
    
        return emparejamientos;
    }

    imprimirListas() {
        tuercas.forEach((tuerca) => console.log(`Tuerca ID: ${tuerca.getId()}`));
        tornillos.forEach((tornillo) =>
          console.log(
            `Tornillo ID: ${tornillo.getId()}, ID Tuerca: ${tornillo.getIdTuerca()}`
          )
        );
        
      }
    
    // let emparejamientos = emparejarSeleccion(tuercas, tornillos);
    // console.log(emparejamientos);
}



