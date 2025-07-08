function obtenerSaludo(nombre) {
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:
  saludo = 'Hola '
  simbolo = '!'
  console.log(saludo.concat(nombre), simbolo)
  return saludo.concat(nombre, simbolo)

}

module.exports = obtenerSaludo;

obtenerSaludo('Miguel')