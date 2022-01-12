import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const userList = document.getElementById("search-box");
const nameCountry = document.querySelector('.country-list');
const aboutCountry = document.querySelector('.country-info');
userList.addEventListener('input', onSearch)


        
function onSearch(e) {
    userList.textContent = e.currentTarget.value;

    fetchCountry(userList.textContent)
        .then(initialize)
    .catch(error => console.log(error));
}

function fetchCountry() {
    return fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => initialize(data))
        .catch(error => console.log(error));
}
let countries
function initialize(countryNames) {
    const markup = countryNames.map((countryName) => {
            return `<li>${countryName.name}</li>`
        }).join('');
    nameCountry.innerHTML = markup;
}
   