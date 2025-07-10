function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  let ultimo = array[array.length - 1]
  console.log(ultimo)
  return ultimo

}

module.exports = devolverUltimoElemento;

devolverUltimoElemento(['manzana', 'naranja', 'piña'])

