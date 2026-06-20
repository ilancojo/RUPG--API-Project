import {
  getMainUser,
  getUserFriends,
  getPokemon,
  getQuote,
  getAboutMe
} from "./models/apiManager.js"

import Renderer from "./view/renderer.js"

const renderer = new Renderer()

renderer.renderMainUser(getMainUser())
renderer.renderFriends(getUserFriends())
renderer.renderPokemon(getPokemon())
renderer.renderQuote(getQuote())
renderer.renderAboutMe(getAboutMe())
