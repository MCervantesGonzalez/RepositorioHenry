function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  console.log('El tipo de dato es:', (typeof (valor)))

  return 'El tipo de dato es:', (typeof (valor))

}

esTipoDato('Miguel');
esTipoDato(5);
esTipoDato(true);
esTipoDato({});

module.exports = esTipoDato;