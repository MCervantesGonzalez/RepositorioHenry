function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  combinar = (nombre.concat(' ', apellido))
  console.log(combinar)
  return combinar
}

module.exports = combinarNombres;

combinarNombres('Miguel', 'Cervantes')