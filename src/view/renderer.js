
///UI- presentation logic 

export default class Renderer {

    renderPage(pageData) {
    this.renderMainUser(pageData.mainUser)
    this.renderFriends(pageData.friends)
    this.renderPokemon(pageData.pokemon)
    this.renderQuote(pageData.quote)
    this.renderAboutMe(pageData.aboutMe)
    }

renderMainUser(mainUser){  
    const mainUserContainer = document.getElementById("main-user-container")
    mainUserContainer.innerHTML = "";
    
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    img.src = mainUser.image;
    img.classList.add("main-user-img");
    
    
    const divInfo = document.createElement("div");
    const fullName = document.createElement("p");
    const location = document.createElement("p");
    fullName.textContent = mainUser.firstName + " " +  mainUser.lastName ;
    location.textContent = mainUser.city + ", " +  mainUser.country ;

    divImg.appendChild(img);
    divInfo.appendChild(fullName);
    divInfo.appendChild(location);
    mainUserContainer.appendChild(divImg);
    mainUserContainer.appendChild(divInfo);

    }



    renderPokemon(pokemon){
        const pokemonContainer = document.getElementById("pokemon-container")
        pokemonContainer.innerHTML = "";
            
        const divInfo = document.createElement("div");
        const pokemonImg = document.createElement("img");
        const pokemonName = document.createElement("p");
        pokemonImg.src = pokemon.image;
        pokemonName.textContent = "Favorite Pokemon : " +  pokemon.name ;

        divInfo.appendChild(pokemonImg);
        divInfo.appendChild(pokemonName);
        pokemonContainer.appendChild(divInfo);

    }

    renderQuote(quote){
        const quoteContainer =document.getElementById("quote")
        quoteContainer.innerHTML = "";

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
        const aboutMeContainer = document.getElementById("about")
        aboutMeContainer.innerHTML = "";

        const aboutDiv = document.createElement("div");
        const aboutHeder = document.createElement("h3");
        const aboutText = document.createElement("p");
        
        aboutHeder.textContent = "About Me -  "
        aboutText.textContent =  aboutMe ;
    
        aboutDiv.appendChild(aboutHeder);
        aboutDiv.appendChild(aboutText);
        aboutMeContainer.appendChild(aboutDiv);

            
    }

    renderFriends(friends){ //LIST
        const friendsContainer = document.getElementById("friends-container")
        friendsContainer.innerHTML = "";

        const friendsDiv = document.createElement("div");
        const friendsHeder = document.createElement("h3");
        const friendTable = document.createElement("ul");

        friendsHeder.innerText = "Friends" ;

        for (const friendInfo of friends){

            const li = document.createElement("li");
            li.textContent = friendInfo.firstName + " " + friendInfo.lastName;

            friendTable.appendChild(li);
        }

        friendsDiv.appendChild(friendsHeder)
        friendsDiv.appendChild(friendTable)
        friendsContainer.appendChild(friendsDiv)
    }    

    renderMessage(message) {
        const messageContainer = document.getElementById("message-container")
        messageContainer.innerHTML = ""

        const errorMessage = document.createElement("p")
        errorMessage.textContent = message

        messageContainer.appendChild(errorMessage)
    }

    renderSavedPagesDropdown(savedPages) {
        const btnContainer = document.getElementById("btn-container")
        const messageContainer = document.getElementById("message-container")

        const oldDropdownContainer = document.getElementById("saved-pages-container")
        const savedNames = Object.keys(savedPages)
        const dropdownContainer = document.createElement("div")
        const select = document.createElement("select")
        const defaultOption = document.createElement("option")

        // Prevents creating extra dropdowns
        if (oldDropdownContainer !== null) {
            oldDropdownContainer.remove()
        }
        // No saved users = Do not create dropdown
        if (savedNames.length === 0) {
            return
        }

        dropdownContainer.id = "saved-pages-container"
        select.id = "saved-pages-select"
        defaultOption.value = ""
        defaultOption.textContent = "Select saved user"
        select.appendChild(defaultOption)

        for (const fullName of savedNames) {
            const option = document.createElement("option")

            option.value = fullName
            option.textContent = fullName

            select.appendChild(option)
        }
        dropdownContainer.appendChild(select)
        btnContainer.parentNode.insertBefore(dropdownContainer, messageContainer)
    }

}

