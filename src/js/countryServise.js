'use strict';

const baseUrl = 'https://restcountries.com/v2/name/${name}';

export default {
    fetchArticles(query) {
    // const requestParams = `${query}`;
        const searchParams = 'name,capital,population,languages,flag'; `https://restcountries.com/v2/name/${name}?fields=${searchParams}`
    return fetch(baseUrl + searchParams).then(res => res.json());
  },
};
// const searchParams = 'name,capital,population,flags,languages'; `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`