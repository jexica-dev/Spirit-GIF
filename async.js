// Async/Await
// Api Docs : https://developers.giphy.com/docs/api/


// Step 1: Fetch Gif data from Giphy using .then()

// function fetchData(Gif) {
  // Get Gif 
  // const url = ``
// Write code here.
//   axios.get(url)
//     .then((res) => {
//     console.log(res)
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }


// Step 2: Rewrite Step 1 using Try/Catch & Async/Await
// Be sure to comment out your Step 1 function before writing step2.  
async function fetchData() {

  // write code here

  try {
    const url = BASE_URL
    let response = await axios.get(url)
    console.log(response)
    // const gifData = response.data[0]
    // showGifData(gifData)
    return data
  } catch (error) {
    console.log(error)
  } 
}

fetchData();


// Step 3: Create dynamic HTML

function showGifData(data) {
  // console.log(data.name)
  // gif stickers
  let gifElements = `<img src="${data.gif}">`
    
 document.querySelector('#name').insertAdjacentHTML('beforeend', gifElements) 
}

// Step 4

// Step 5
const form = document.querySelector('#name-form')
//console.log(form)
//write eventHandler here

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const textInput = document.querySelector('#name')
  console.log(textInput.value)
  fetchData(textInput.value)
})





