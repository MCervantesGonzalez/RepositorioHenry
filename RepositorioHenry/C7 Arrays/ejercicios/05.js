function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento)
  console.log(array)
  return array
}

module.exports = agregarItemAlComienzoDelArray;

agregarItemAlComienzoDelArray(['manzana', 'naranja', 'piña'], 'kiwi')