// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:

  num = Math.ceil(num)
  console.log(num)
  return num

}

module.exports = redondearHaciaArriba;

redondearHaciaArriba(2.5)
redondearHaciaArriba(0.1)