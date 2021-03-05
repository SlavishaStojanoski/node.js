// 1 URL core modul 
//kako rezultat vrakja koj podatok e prebaruvan od dadeniot url 

const url = require('url');

const myUrl = 'https://www.youtube.com/results?search_query=node+js+modules+tutorial+';

const urlObject = url.parse(myUrl, true);

const dataOfQuery = urlObject.query

console.log(dataOfQuery.search_query)