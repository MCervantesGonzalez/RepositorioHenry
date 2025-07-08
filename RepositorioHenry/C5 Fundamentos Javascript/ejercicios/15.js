function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  if (num % 2 === 0) {
    return console.log(true)
  } else {
    return console.log(false)
  }
}

esPar(14)
esPar(15)

module.exports = esPar;
