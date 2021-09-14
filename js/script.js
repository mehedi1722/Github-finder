// SELECT DOM ELEMENTS 
const SearchInput = document.getElementById('Search_input')
const SearchButton = document.getElementById('Search_button')
const ui = new UI()

// ADD EVENTLISTNER
SearchButton.addEventListener('click', SearchUser)

// EVENTS FUNCTIONS 
function SearchUser( e ) {
    e.preventDefault();
    let SearchValue = SearchInput.value;

    if(SearchValue != "") {
        fetch(`https://api.github.com/users/${SearchValue}`)
        .then( respons => respons.json())
        .then( data => {
            if( data.message == "Not Found") {
                ui.alert('There is no user in this name', 'User-not-find')
            } else {
                ui.DisplayProfile(data);
            }
        })
    } else {
        ui.alert('Give an Username to find', 'empty_input')
    }
}