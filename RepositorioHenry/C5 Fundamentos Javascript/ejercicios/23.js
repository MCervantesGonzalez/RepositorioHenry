function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
  console.log(x % y)
  return (x % y)

}

module.exports = obtenerResto;

obtenerResto(10, 5)
obtenerResto(16, 5)