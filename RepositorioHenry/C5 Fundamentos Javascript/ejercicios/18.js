function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log(letra, 'Es vocal')
    return (letra, 'Es vocal');
  } else if (letra != 'a' || letra != 'e' || letra != 'i' || letra != 'o' || letra === 'u' || letra > 1) {
    console.log(letra, 'Dato incorrecto')
    return (letra, 'Dato incorrecto')
  }
}

esVocal('a')
esVocal('e')
esVocal('i')
esVocal('o')
esVocal('u')
esVocal('aaa')





module.exports = esVocal;
