'use strict';
export default {
    fetchArticles(name) {
   const responseFields = 'name,capital,population,flags,languages';
   return fetch(`https://restcountries.com/v2/name/${name}?fields=${responseFields}`).then(res => res.json())
   },
};
