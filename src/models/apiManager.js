//  import { Pokimon } from "./pokimon";
//   import { User } from "./user";


    const users = [
        {
            firstName : "ilan",//the first is the main 
            lastName : "cojocaru" , 
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-inDIP47m3R6ip87F88yAHVJTx5haz6HToMFpWxItA&s=10",
            country : "israel",
            city : "haifa"},
            
        {   firstName : "eden ",   // friend-1
            lastName : "cojo" , 
            image : "https://resizing.flixster.com/W4x6_f86mlDNOlgYocLXmo7xcoo=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/2255_v9_bb.jpg",
            country : "israel",
            city : "eilat"},

        {   firstName : "sapir ",   // friend-2
            lastName : "benda" , 
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4NJY5ulb5b3invkWHLbTSngvZsDKJS2np1kmrtuOzQ&s=10",
            country : "israel",
            city : "naharia"}
    ]
/**
 * const mockData = {

        mainUser: users[0],

        friends: users.slice(1).map( friend=>{
            return {    firstName :friend.firstName,
                        lastName : friend.lastName
                    }
        }),
        
        pokemon : {name: "pikachu" , image: "https://i.pinimg.com/originals/00/3c/06/003c06d5335a39359cc81083c08f1b82.jpg" },
        
        quote : "this is quote ",

        aboutMe : "about me "
    }
 * 
 * 
 */

    const mockPages = [
  {
    mainUser: {
      firstName: "Ilan",
      lastName: "Cojocaru",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      country: "Israel",
      city: "Haifa"
    },

    friends: [
      { firstName: "Eden", lastName: "Cojo" },
      { firstName: "Sapir", lastName: "Benda" },
      { firstName: "Daniel", lastName: "Levi" },
      { firstName: "Noa", lastName: "Cohen" },
      { firstName: "Amit", lastName: "Mizrahi" },
      { firstName: "Shir", lastName: "David" }
    ],

    pokemon: {
      name: "Pikachu",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },

    quote: "Believe in your flyness, conquer your shyness.",

    aboutMe: "I am a curious person who enjoys technology, fitness, good food, and learning new things every day."
  },

  {
    mainUser: {
      firstName: "Maria",
      lastName: "Norris",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      country: "United States",
      city: "Austin"
    },

    friends: [
      { firstName: "Sandra", lastName: "Vestad" },
      { firstName: "Sheila", lastName: "Curtis" },
      { firstName: "Catalina", lastName: "Fuentes" },
      { firstName: "Torf", lastName: "Edge" },
      { firstName: "Jose", lastName: "Reyes" },
      { firstName: "Emily", lastName: "Stone" }
    ],

    pokemon: {
      name: "Charmander",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },

    quote: "Keep your nose out the sky, keep your heart to God, and keep your face to the rising sun.",

    aboutMe: "I love traveling, meeting new people, discovering new places, and spending quiet mornings with coffee and music."
  },

  {
    mainUser: {
      firstName: "James",
      lastName: "Walker",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      country: "Canada",
      city: "Toronto"
    },

    friends: [
      { firstName: "Liam", lastName: "Brown" },
      { firstName: "Emma", lastName: "Wilson" },
      { firstName: "Olivia", lastName: "Taylor" },
      { firstName: "Noah", lastName: "Anderson" },
      { firstName: "Mia", lastName: "Thomas" },
      { firstName: "Lucas", lastName: "Martin" }
    ],

    pokemon: {
      name: "Squirtle",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },

    quote: "Everything I’m not made me everything I am.",

    aboutMe: "I enjoy coding, hiking, watching movies, and building small projects that make life easier and more interesting."
  }
]

let currentPageIndex = 0

export function getAllPageData() {
  const pageData = mockPages[currentPageIndex]

  currentPageIndex = currentPageIndex + 1

  if (currentPageIndex === mockPages.length) {
    currentPageIndex = 0
  }

  return pageData
}
    



export  function getUsersList(){
        const usersListClone= [...users];
        return usersListClone;
    }

export  function getMainUser(){
        const userObj = mockData.mainUser;
        return userObj;
    }

export  function getUserFriends(){
        const friendsList = mockData.friends;
        return friendsList;
    }

export  function getPokemon(){
        const pokemon = mockData.pokemon;
        return pokemon;
    }

export  function getQuote(){
        const quote = mockData.quote;
        return quote;
    }

export  function getAboutMe(){
        const aboutMe = mockData.aboutMe;
        return aboutMe;
    }

    



