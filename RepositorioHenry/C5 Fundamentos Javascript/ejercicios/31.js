// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:

  num = Math.pow(num, 2)
  console.log(num)
  return num
}

module.exports = elevarAlCuadrado;

elevarAlCuadrado(6)
elevarAlCuadrado(0)