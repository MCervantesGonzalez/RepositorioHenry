function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if (Number.isInteger(numero) === true) {
    return console.log('Tu numero es entero');
  }
  else {
    return console.log('Tu numero no es entero');
  }
}

esNumeroEntero(2.5);

module.exports = esNumeroEntero;