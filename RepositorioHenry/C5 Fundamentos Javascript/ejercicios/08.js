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
    console.log('Tu numero es entero')
    return true
  }
  else {
    console.log('Tu numero no es entero')
    return false
  }
}

module.exports = esNumeroEntero;

esNumeroEntero(24);
esNumeroEntero(-1212);
esNumeroEntero(121.212);