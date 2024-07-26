import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

// setupCounter(document.querySelector("#counter"));

const forms = document.getElementById("forms");
forms.addEventListener("submit", function (event) {
  event.preventDefault();
  const password = event.target.password.value;
  console.log(username, password);
});

// post endpoint fetch
fetchGames();
async function fetchGuestBook() {
  const result = await fetch(`http://localhost:8080/guess`);
  const games = await result.json();
  generateImages(guestBook);
}

// endpoint (fetch)
const response = await fetch("http://localhost:8080/guess", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formValues),
});
