// Import cookies data from assets/data/cookies.js
import { cookies } from "../data/cookies.js";

// Select div which to append cookies data
let container = document.querySelector(".slider-container");

// Loop over cookies data and append new divs accordingly
for (let i = 0; i < cookies.length; i++) {
  // Create new div
  let div = document.createElement("div");
  // Add class card
  div.classList.add("card");

  // Add individual cookie details in div
  div.innerHTML = `
  <img src=${cookies[i].image}>
  <div class="content">
    <h4>${cookies[i].name}</h4>
    <p>${cookies[i].description}</p>
  </div>
  `;

  // Append div to .slider-container
  container.append(div);
}
