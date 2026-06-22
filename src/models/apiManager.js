import { getRandomPokemon, toProperCase } from "../utils/utils.js";
import  { User }  from "./user.js";


export default class ApiManager {

    constructor() {
      this.currentPageIndex = 0
    }


  async getAllPageData() {
    try {
      const [usersData, pokemonData,quoteData, aboutMeData]= await Promise.all([
        this.getUsers(),
        this.getPokemon(),
        this.getQuote(),
        this.getAboutMe()
      ])

      return {
        mainUser: usersData.mainUser,
        friends: usersData.friends,
        pokemon: pokemonData,
        quote: quoteData,
        aboutMe: aboutMeData
      }
    }catch (error) {
      console.error("Error getting page data:", error);
      throw error
    }
  }

  async getUsers() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=7")

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json()
      const users = data.results;
      const mainUser = new User({
        firstName: users[0].name.first,
        lastName: users[0].name.last,
        image: users[0].picture.large,
        country: users[0].location.country,
        city: users[0].location.city
      })

      const friends = users.slice(1).map(friend => {
        return new User({
          firstName: friend.name.first,
          lastName: friend.name.last
        })
      })

      return {
        mainUser: mainUser,
        friends: friends
      }

    } catch (error) {
      console.error("Error fetching users:", error)
      throw error
    }
  }

  async getPokemon() {
    try {
      const randomNum = getRandomPokemon();
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNum);

      if (!response.ok) {
        throw new Error("Failed to fetch pokemon");
      }

      const onePokemon = await response.json();

      return {
        name: toProperCase(onePokemon.name),
        image: onePokemon.sprites.front_default
      }
    } catch (error) {
      console.error("Error fetching Pokemon:", error)
      throw error
    }
  }


  async getQuote() {
    try {
      const response = await fetch("https://api.kanye.rest");

      if (!response.ok) {
        throw new Error("Failed to fetch Quote");
      }

      const data = await response.json();

      return data.quote;

    } catch (error) {
      console.error("Error fetching Quote:", error)
      throw error
    }
  }

  async getAboutMe() {
    try {
      const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text");

      if (!response.ok) {
        throw new Error("Failed to fetch about-Me");
      }

      const aboutMe = await response.text();

      return aboutMe;

    } catch (error) {
      console.error("Error fetching about-Me:", error)
      throw error
    }
  }





}






