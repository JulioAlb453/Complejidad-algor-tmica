export default class QuickSortController {
  tuercas 
  tornillos
  comparar(tuerca, tornillo) {
    if (tuerca.id === tornillo.idTuerca) {
      return 0;
    } else if (tuerca < tornillo) {
      return -1;
    } else {
      return 1;
    }
  }

  quickSort(tuercas, tornillos, low, high) {
    this.tuercas = tuercas
    this.tornillos = tornillos
    if (low < high) {
      let pivotIndex = this.partition(tuercas, tornillos, low, high);
      this.quickSort(tuercas, tornillos, low, pivotIndex - 1);
      this.quickSort(tuercas, tornillos, pivotIndex + 1, high);
    }


  }

  partition(tuercas, tornillos, low, high) {
    let pivot = tornillos[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (
        this.comparar(tuercas[j], pivot) === -1 ||
        this.comparar(tuercas[j], pivot) === 0
      ) {
        [tuercas[i], tuercas[j]] = [tuercas[j], tuercas[i]];
        i++;
      }
    }
    [tuercas[i], tuercas[high]] = [tuercas[high], tuercas[i]];

    pivot = tuercas[i];
    i = low;

    for (let j = low; j < high; j++) {
      if (
        this.comparar(tornillos[j], pivot) === -1 ||
        this.comparar(tornillos[j], pivot) === 0
      ) {
        [tornillos[i], tornillos[j]] = [tornillos[j], tornillos[i]];
        i++;
      }
    }
    [tornillos[i], tornillos[high]] = [tornillos[high], tornillos[i]];

    return i;
  }

  imprimirListas(){
    console.log(JSON.stringify(this.tuercas))
    console.log(JSON.stringify(this.tornillos))
  }

  //  Ejemplo de uso:
  // let tuercas = [4, 3, 2, 1];
  // let tornillos = [1, 2, 3, 4];

  // quickSort(tuercas, tornillos, 0, tuercas.length - 1);
  // console.log(tuercas);
  // console.log(tornillos);
}
