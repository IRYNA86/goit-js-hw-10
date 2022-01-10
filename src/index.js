import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const userList = document.getElementById("search-box");
const nameCountry = document.querySelector('.country-list');
const aboutCountry = document.querySelector('.country-info');

userList.addEventListener("input", () => {
    fetchAllCountries()
    .then((countries) => renderCountryList(countries))
    .catch((error) => console.log(error));
});
function fetchAllCountries() {
  return fetch("https://restcountries.com/v3.1/all").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
function renderCountryList(countries) {
  const markup = countries
    .map((country) => {
      return `<li>
          <p><b>Name</b>: ${official}</p>
          <p><b>Email</b>: ${capital}</p>
          <p><b>Company</b>: ${population}</p>
        </li>`;
    })
    .join("");
  nameCountry.innerHTML = markup;
}