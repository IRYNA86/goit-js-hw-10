import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const userList = document.getElementById("search-box");
const nameCountry = document.querySelector('.country-list');
const aboutCountry = document.querySelector('.country-info');
userList.addEventListener('input', (e) => {
    userList.textContent = e.currentTarget.value;
    
})
console.log(userList);
let countriess;
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
    countriess = countriesData
        .map((countries) => {
                    console.log(`${countries.name}`);
    })
   
}
    