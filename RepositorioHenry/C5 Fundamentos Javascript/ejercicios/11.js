function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:

  const myvarx = x
  const myvary = y

  if (myvarx === myvary) {
    console.log('los numeros', myvarx, 'y', myvary, 'son iguales', true)
    return true
  } else {
    console.log('los numeros', myvarx, 'y', myvary, 'no son iguales', false)
    return false
  }
}

sonIguales(5, 5)
sonIguales(5, 8)

module.exports = sonIguales;