

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
        friends: users.slice(1),
        
        pokemon : {name: "pickchu " , img: "https://www.ebay.com/itm/263267872314" },
        
        quote : "this is quate ",
        aboutMe : "about be "
    }



export  function getUsersList(){
        const usersListClone= {...users};
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






