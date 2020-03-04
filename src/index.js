import "bootstrap/dist/css/bootstrap.css";
// import jokes from "./jokes";
// import { doc } from "prettier";

// 3. JS Event Handling, HTML5 and inline SVG
document.querySelector("#svgImage").addEventListener("click", event => {
  event.preventDefault();
  let name = event.target["parentElement"].id;
  let output = name[0].toUpperCase() + name.substring(1);
  alert(output);
});

// 2. Small Application to display a quote of the hour
const fetchFromApi = (apiUrl, callback) => {
  fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      callback(data);
    });
};

var quoteButton = document.querySelector("#quoteBtn");
quoteButton.addEventListener("click", e => {
  e.preventDefault();
  fetchFromApi(
    "https://studypoints.info/jokes/api/jokes/period/hour",
    updateHourlyQuote
  );
});

const updateHourlyQuote = data => {
  document.querySelector("#quoteDiv").innerHTML = data.joke;
};

setInterval(() => {
  fetchFromApi(
    "https://studypoints.info/jokes/api/jokes/period/hour",
    updateHourlyQuote
  );
}, 1000 * 60 * 60);

/* 
const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

// 1. ES6 Classes and Single Page Applications - No fetch()
var firstDiv = document.createElement("div");
firstDiv.setAttribute("id", "fd");
document.body.append(firstDiv);
var secondDiv = document.createElement("div");
secondDiv.setAttribute("id", "sd");
document.body.append(secondDiv);

// ADD JOKE
var jokeInput = document.createElement("input");
jokeInput.setAttribute("id", "jokeInput");
jokeInput.setAttribute("type", "text");
jokeInput.setAttribute("placeholder", "Add joke");
firstDiv.append(jokeInput);

const addJoke = () => {
  let joke = document.querySelector("#jokeInput").value;
  if (typeof joke === "undefined" || joke === "") {
    alert("Please enter a joke first!");
  } else {
    jokes.addJoke(joke);
    document.querySelector("#jokeInput").value = "";
  }
};

var addJokeBtn = document.createElement("button");
addJokeBtn.setAttribute("id", "addJokeBtn");
addJokeBtn.innerText = "Add Joke";
addJokeBtn.addEventListener("click", addJoke);
firstDiv.append(addJokeBtn);

// GET JOKE BY ID
var idInput = document.createElement("input");
idInput.setAttribute("id", "idInput");
idInput.setAttribute("type", "number");
idInput.setAttribute("placeholder", "Get specific joke");
secondDiv.append(idInput);

const getSpecificJoke = () => {
  let paragraph = document.querySelector("#jokes");
  let inputValue = document.querySelector("#idInput").value;
  let output = jokes.getJokeById(inputValue);
  if (typeof output === "undefined" || output === "")
    paragraph.innerText = "Joke with id: " + inputValue + " was not found!";
  else paragraph.innerText = output;
};

var specificJokeBtn = document.createElement("button");
specificJokeBtn.setAttribute("id", "jokeBtn");
specificJokeBtn.innerText = "Get Joke";
specificJokeBtn.addEventListener("click", getSpecificJoke);
secondDiv.append(specificJokeBtn);
*/



// WEBPACK FOOTER //
// ./src/index.js