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

// More Cookies feature
let cards = document.querySelectorAll(".card");

let showMore = document.querySelector(".show-more");
let showLess = document.querySelector(".show-less");

showMore.addEventListener("click", () => {
  console.log("Show More!");
});

showLess.addEventListener("click", () => {
  console.log("Show Less!");
});

for (let i = 0; i < cards.length; i++) {
  if (i > 5) {
    cards[i].classList.add("display");
  }
}