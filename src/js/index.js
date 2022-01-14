'use strict';
import '../css/styles.css';
// import Notiflix from 'notiflix';
import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');
import countrySearch from '../js/countryServise.js';
import articlesOneCountry from '../templates/templatesOneCountry.hbs';
import countryList from '../templates/templatesManyCoutry.hbs';
const DEBOUNCE_DELAY = 300;
var debounce = require('lodash.debounce');
const userList = document.getElementById("search-box");
const nameCountry = document.querySelector('.country-list');
const aboutCountry = document.querySelector('.country-info');

userList.addEventListener('input', debounce(countrySearchInputHandler, DEBOUNCE_DELAY));
function countrySearchInputHandler(e) {
  e.preventDefault();
  clearArticlesContainer();
    const searchQuery = e.target.value;
    countrySearch.fetchArticles(searchQuery).then(data => {
    
      if (data.length > 10) {
          error({
              text: "❌ Too many matches found. Please enter a more specific query!"
          });
      } else if (data.status === 404) {
        error({
          text: "❌ No country has been found. Please enter a more specific query!"
      });
      } else if (data.length === 1) {
          buildListMarkup(data, articlesOneCountry);
      } else if (data.length <= 10) {
          buildListMarkup(data, countryList);
      }
  })
  .catch(Error => {
      Error({
          text: "❌ You must enter query parameters!"
      });
      console.log(Error)
  })
}

function buildListMarkup(countryes, template) {
    const markup = countryes.map(count => template(count)).join();
    nameCountry.innerHTML = markup;
//   nameCountry.insertAdjacentHTML('afterbegin', markup)
}

function clearArticlesContainer() {
  nameCountry.innerHTML = '';
}

// function initialize(countryNames) {
//     const markup = countryNames.map((countryName) => {
//         return `<p>${countryName.name}</p>`
//         }).join('');
//     nameCountry.innerHTML = `${markup}`;
// }

// userList.addEventListener('input', onSearch)


        
// function onSearch(e) {
//     nameCountry.textContent = e.currentTarget.value;
//     if(userList.value === '') {
//     nameCountry.innerHTML = 'Anonymous';
// } else
// { nameCountry.innerHTML = userList.value };
//     fetchCountry(nameCountry.textContent)
//         .then(initialize)
//     .catch(error => console.log(error));
// }

// function fetchCountry() {
//     return fetch('https://restcountries.com/v2/all')
//         .then(response => response.json())
//         .then(data => initialize(data))
//         .catch(error => console.log(error));
// }
// let countries

   