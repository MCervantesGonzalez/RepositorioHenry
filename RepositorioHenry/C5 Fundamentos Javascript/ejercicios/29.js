function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  area = (base * altura / 2)
  console.log(area)
  return area
}

module.exports = areaDelTriangulo;

areaDelTriangulo(10, 5)
areaDelTriangulo(0, 10)