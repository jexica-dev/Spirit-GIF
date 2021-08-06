async function fetchData() {
  try {
    const url = BASE_URL;
    let response = await axios.get(url);
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData();

function showGifData(data) {
  let gifElements = `<img src="${data.gif}">`;

  document.querySelector("#name").insertAdjacentHTML("beforeend", gifElements);
}

const form = document.querySelector("#name-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const textInput = document.querySelector("#name");
  console.log(textInput.value);
  fetchData(textInput.value);
});
