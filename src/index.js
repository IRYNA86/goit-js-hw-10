import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const userList = document.getElementById("search-box");
const nameCountry = document.querySelector('.country-list');
const aboutCountry = document.querySelector('.country-info');
userList.addEventListener('input', (e) => {
    // fetchCountries()
    //     .then((countriesData) => initialize(countriesData))
    // .catch((error) => console.log(error));
    nameCountry.textContent = e.currentTarget.value;
    
})
console.log(userList);

// function fetchCountries(){
fetch("https://restcountries.com/v2/all")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        initialize(data);
    })
    .catch(function (err) {
        console.log('Error', err);
    })
function initialize(countriesData) {
    console.log(countriesData);
        const options = countriesData.map((country) => {
        return `<li class="list-item new">${country.name}</li>`;
    })
        .join("");
    nameCountry.innerHTML = options;
    console.log(options);
              }
   

   