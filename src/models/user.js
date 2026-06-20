
export class User{

    constructor (firstName , lastName ,picture =null  ,country =null ,city =null){

        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.country = country;
        this.city = city ;

    }
       
/**
    //FOR MANAGER

    const userObj = { 
        mainUser: {},
        friends: []
    }

   getUsersObj(){
        const usersCloneObject = {...userObj};
        return usersCloneObject;
    }

    getMainUser(){
        const userObj = userObj.mainUser;
        return userObj;
    }

    getUserFriends(){
        const friendsList = userObj.friends;
        return friendsList;
    }

 */
 
} 



