function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' && array[i].length >= 5) {
      console.log(array[i])
      return array[i]
    }
  }
}

module.exports = obtenerPrimerStringLargo;

obtenerPrimerStringLargo(['hola', 'mundo', 'mi', 'nombre', 'es', 'Miguel'])