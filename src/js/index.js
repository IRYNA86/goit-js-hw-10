'use strict';
import '../css/styles.css';
import Notiflix from 'notiflix';
import countrySearch from '../js/countryServise.js';
import articlesOneCountry from '../templates/templatesOneCountry.hbs';
import countryList from '../templates/templatesManyCoutry.hbs';
const DEBOUNCE_DELAY = 300;
var debounce = require('lodash.debounce');
const userList = document.getElementById("search-box");
const nameCountry = document.querySelector('.country-list');

userList.addEventListener('input', debounce(countrySearchInputHandler, DEBOUNCE_DELAY));
function countrySearchInputHandler(e) {
  e.preventDefault();
  clearArticlesContainer();
    const searchQuery = e.target.value.trim();
    countrySearch.fetchArticles(searchQuery).then(data => {
    
      if (data.length > 10) {
          {
              Notiflix.Notify.warning("❌ Too many matches found. Please enter a more specific query!")
          };
      } else if (data.status === 404) {
        {
           Notiflix.Notify.warning("❌ No country has been found. Please enter a more specific query!")
      };
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
}

function clearArticlesContainer() {
  nameCountry.innerHTML = '';
}

