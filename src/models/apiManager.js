import { getRandomPokemon } from "../utils/utils.js";
import  { User }  from "./user.js";



  const mockPages = [
  {
   
    quote: "Believe in your flyness, conquer your shyness.",

    aboutMe: "I am a curious person who enjoys technology, fitness, good food, and learning new things every day."
  },

  {

    quote: "Keep your nose out the sky, keep your heart to God, and keep your face to the rising sun.",

    aboutMe: "I love traveling, meeting new people, discovering new places, and spending quiet mornings with coffee and music."
  },

  {

    quote: "Everything I’m not made me everything I am.",

    aboutMe: "I enjoy coding, hiking, watching movies, and building small projects that make life easier and more interesting."
  }
]





export default class ApiManager {

    constructor() {
      this.currentPageIndex = 0
    }



  async getAllPageData() {
    const usersData = await this.getUsers();
    const pokemonData = await this.getPokemon()   ;                                
    
    const mockPage = mockPages[this.currentPageIndex]

    this.currentPageIndex = this.currentPageIndex + 1

    if (this.currentPageIndex === mockPages.length) {
      this.currentPageIndex = 0
    }

    return {
      mainUser: usersData.mainUser,
      friends: usersData.friends,
      pokemon: pokemonData,
      quote: mockPage.quote,
      aboutMe: mockPage.aboutMe
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
        name : onePokemon.name,
        image : onePokemon.sprites.front_default
      };
    } catch (error) {
      console.error("Error fetching Pokemon:", error)
      throw error
    }
  }



}






