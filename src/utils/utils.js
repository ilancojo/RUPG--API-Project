export function getRandomPokemon() {
  return Math.floor(Math.random() * 1025) + 1;
}


export function toProperCase(str) {

  const newStr = toUpperCase(str[0]) + str.slice(1); 

  return newStr;
}
