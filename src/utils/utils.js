export function getRandomPokemon() {
  return Math.floor(Math.random() * 1025) + 1;
}


export function toProperCase(str) {

  return str.charAt(0).toUpperCase() + str.slice(1)

}
