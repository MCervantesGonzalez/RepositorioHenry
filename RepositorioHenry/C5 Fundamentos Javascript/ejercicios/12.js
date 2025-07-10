function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  const mystr1 = str1
  const mystr2 = str2

  if (mystr1.length === mystr2.length) {
    console.log('las dos palabras tienen la misma longitud', true)
    return true
  } else {
    console.log('no tienen la misma longitud', false)
    return false
  }
}

module.exports = tienenMismaLongitud;

tienenMismaLongitud('SoyHenry', 'Henrysoy')
tienenMismaLongitud('hi', 'there')