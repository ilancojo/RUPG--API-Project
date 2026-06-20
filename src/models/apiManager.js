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

    const mockData = {

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

export function getAllPageData(){

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

    



