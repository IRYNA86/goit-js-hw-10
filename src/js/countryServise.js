'use strict';

// const baseUrl = 'https://restcountries.com/v2/name/${name}';

export default {
    fetchArticles(name) {
    // // const requestParams = `${query}`;
    //     const searchParams = 'name,capital,population,languages,flag'; `https://restcountries.com/v2/name/${name}?fields=${searchParams}`
    // return fetch(baseUrl + searchParams).then(res => res.json());
    // const languages = Object.values(languages);
    const responseFields = 'name,capital,population,flags,languages';
   return fetch(`https://restcountries.com/v2/name/${name}?fields=${responseFields}`).then(res => res.json())
   console.log(res.json()); 
  },
};
// const searchParams = 'name,capital,population,flags,languages'; `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`