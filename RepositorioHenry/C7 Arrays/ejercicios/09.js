function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   elementoAleatorio = Math.floor(Math.random() * array.length)
   console.log(array[elementoAleatorio])
   return array[elementoAleatorio]
}

module.exports = obtenerElementoAleatorio;

obtenerElementoAleatorio([0, 1, 2, 3, 4, 5, 6, 7, 8, 9,])