const axios = require('axios');
const cheerio = require('cheerio');


const url = 'https://google.com';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    
    // CSS selector to target the links
    const linkSelector = 'a';
    
    const links = [];
    
    $(linkSelector).each((index, element) => {
      const href = $(element).attr('href');
      links.push(href);
    });
    
    console.log('List of links:');
    console.log(links);
  })
  .catch(error => {
    console.log('Error:', error);
  });
