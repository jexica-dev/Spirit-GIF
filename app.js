const DOMAIN = 'http://api.giphy.com/v1/stickers/search'
const API_KEY = 'evsVx9tZ3CipCmZgREMZqaCdKPGn4beP'
const NAME = document.querySelector(`#name`);
const BASE_URL = `${DOMAIN}?api_key=${API_KEY}&q=`;

const button = document.querySelector("#search")

async function getGif() {
  const response = await axios.get(`${BASE_URL}${NAME.value}`)
  showGifData(response.data.data)
}

button.addEventListener('click', getGif)


function showGifData(gifs) {
  gifs.forEach((gif, index) => {
  //append gif to container
    // let gifElements = `<img src="${gif.images.downsized_medium.url}">`
    let gifElements = `
    <div id="gif-${index}">
      <img src="${gif.images.downsized_medium.url}">
    </div>`
    document.querySelector('#gif-container').insertAdjacentHTML('beforeend', gifElements) 
  });
  
  
}
