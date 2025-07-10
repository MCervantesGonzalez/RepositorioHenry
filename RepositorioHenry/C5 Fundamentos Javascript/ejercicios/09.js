function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  const myvar = valor;
  if (myvar == null || myvar == undefined) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}
esNuloOIndefinido(null)
esNuloOIndefinido(undefined)
esNuloOIndefinido(22)
esNuloOIndefinido('holamundo')


module.exports = esNuloOIndefinido;