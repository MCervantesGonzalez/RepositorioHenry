function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  texto = str
  simbolo = '!'
  console.log(texto.concat(simbolo))
  return texto.concat(simbolo)
}

module.exports = agregarSimboloExclamacion;

agregarSimboloExclamacion('hello world')
agregarSimboloExclamacion('mi nombre es Miguel')