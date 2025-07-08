function retornarPerimetro(lado) {
   // La función recibe un argumento llamado lado el cual es un numero.
   // Retornar el perimetro de un cuadrado.
   // Por ejemplo: 
   // 2 ---> 8
   // 0 ---> 0
   // Tu código:
   perimetro = (lado * 4)
   console.log(perimetro)
   return perimetro

}

module.exports = retornarPerimetro;

retornarPerimetro(2)
retornarPerimetro(0)