const DOMAIN = 'http://api.giphy.com/v1/stickers/search';
const API_KEY = 'evsVx9tZ3CipCmZgREMZqaCdKPGn4beP'
const NAME = document.querySelector(`#name`)[0].value;
const BASE_URL = `${DOMAIN}?api_key=${API_KEY}&q=${NAME}`;

