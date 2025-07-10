// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cubo.
  // Por ejemplo: 
  // 3 ---> 27
  // 0 ---> 0
  // Tu código:
  num = Math.pow(num, 3)
  console.log(num)
  return (num)
}

module.exports = elevarAlCubo;

elevarAlCubo(3)
elevarAlCubo(0)