
///UI- presentation logic 

export default class Renderer {



    renderMainUser(mainUser){   //אובייקט של משתמש 
    const mainUserContainer = document.getElementById("#main-user-container")
    mainUserContainer.innerHTML = "";
    
    const divImg = document.createElement("div");
    const img = document.createElement("imge");
    img.src = mainUser.image;
    
    const divInfo = document.createElement("div");
    const fullName = document.createElement("p");
    const location = document.createElement("p");
    fullName.textContent = mainUser.firstName + " ," +  mainUser.lastName ;
    location.textContent = mainUser.city + " ," +  mainUser.country ;

    divImg.appendChild(img);
    divInfo.appendChild(fullName);
    divInfo.appendChild(location);
    mainUserContainer.appendChild(divImg);
    mainUserContainer.appendChild(divInfo);

    }



    renderPokemon(pokemon){
        const pokemonContainer = document.getElementById("#pokemon-container")
        pokemon.innerHTML = "";
            
        const divInfo = document.createElement("div");
        const pokemonImg = document.createElement("imge");
        const pokemonName = document.createElement("p");
        pokemonImg.src = mainUser.image;
        pokemonName.textContent = "Favorite Pokemon : " +  pokemon.name ;

        divInfo.appendChild(pokemonImg);
        divInfo.appendChild(pokemonName);
        pokemonContainer.appendChild(divInfo);

    }
    renderQuote(quote){
        const quoteContainer =document.getElementById("#quote")
        quote.innerHTML = "";

        const quoteDiv = document.createElement("div");
        const hederQuote = document.createElement("h3");
        const favoriteQuote = document.createElement("p");
        
        hederQuote.textContent = "Favorite Quote : "
        favoriteQuote.textContent =  quote ;
    
        quoteDiv.appendChild(hederQuote);
        quoteDiv.appendChild(favoriteQuote);
        quoteContainer.appendChild(quoteDiv);
            
    }


    renderAboutMe(aboutMe){
        const aboutMeContainer = document.getElementById("#about")
        aboutMe.innerHTML = "";

        const aboutDiv = document.createElement("div");
        const aboutHeder = document.createElement("h3");
        const aboutText = document.createElement("p");
        
        aboutHeder.textContent = "About Me -  "
        aboutText.textContent =  quote ;
    
        aboutDiv.appendChild(aboutHeder);
        aboutDiv.appendChild(aboutText);
        aboutMeContainer.appendChild(aboutDiv);

            
    }

    renderFriends(friends){ //LIST
        const friendsContainer = document.getElementById("#friends-container")
        friends.innerHTML = "";

        const friendsDiv = document.createElement("div");
        const friendsHeder = document.createElement("h3");
        const friendTable = document.createElement("ul");

        for (const friendInfo of friends){

            const il = document.createElement("il");
            il.textContent = friendInfo[0] + friendInfo[1];

            friendTable.appendChild(il);
        }
        
        friendsDiv.appendChild(friendsHeder)
        friendsDiv.appendChild(friendTable)
        friendsContainer.appendChild(friendsDiv)
    }    


}





