// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:

   num = Math.round(num)
   console.log(num)
   return num
}

module.exports = redondearNumero;

redondearNumero(1.5)
redondearNumero(0.1)
