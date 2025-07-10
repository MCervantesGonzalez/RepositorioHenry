function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento)
  console.log(array)
  return array
}

module.exports = agregarItemAlFinalDelArray;

agregarItemAlFinalDelArray(['manzana', 'naranja', 'piña'], 'kiwi')