// Import cookies data from assets/data/cookies.js
import {
  cookies
} from "../data/cookies.js";

// ============================================
// Display Cookies Feature
// ============================================

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
    <h4 class="cookie-name">${cookies[i].name}</h4>
    <p>${cookies[i].description}</p>
  </div>
  `;

  // ============================================
  // Pop-up Feature
  // ============================================

  div.addEventListener("click", (event) => {
    //Select all elements
    let modal = document.getElementById("myModal"),
      span = document.getElementsByClassName("close")[0],
      h = document.getElementById("modalH"),
      p = document.getElementById("modalP");

    //Set name and description for modal
    h.innerHTML = `${cookies[i].name}`;
    p.innerHTML = `${cookies[i].description}`;

    //Makes div visible
    modal.style.display = "block";

    //Close modal by clicking X
    span.onclick = function () {
      modal.style.display = "none";
    }

    //Close modal by clicking outside the modal window
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });

  // Append div to .slider-container
  container.append(div);
}

// ============================================
// More / Less Cookies Feature
// ============================================

let cards = document.querySelectorAll(".card");
let showMore = document.querySelector(".show-more");
let showLess = document.querySelector(".show-less");

// Default number of cookies shown
let showNumber = 6;

// Show default number of cookies
showCookies(cards);

// Show More button event listener
showMore.addEventListener("click", () => {
  // Validation for maximum number of cookies to be shown
  if (showNumber < cards.length) {
    showNumber += 6;
    showCookies(cards);
  } else {
    showNumber = cards.length;
  }
});

showLess.addEventListener("click", () => {
  // Validation for minimum number of cookies to be shown
  if (showNumber > 6) {
    showNumber -= 6;
    hideCookies(cards);
  } else {
    showNumber = 6;
  }
});

// Display "showNumber" number of cookies
function showCookies(cards) {
  for (let i = 0; i < showNumber; i++) {
    cards[i].classList.add("display");
  }
};

// Hide "showNumber" number of cookies
function hideCookies(cards) {
  for (let i = showNumber; i < cards.length; i++) {
    cards[i].classList.remove("display");
  }
};

// ============================================
// Search Feature
// ============================================

let input = document.getElementById("searchbar");
let cookieName = document.querySelectorAll(".cookie-name");

input.addEventListener("keyup", search);

function search() {
  // Capture searched term
  let searchTerm = input.value.toUpperCase();

  if (searchTerm.length === 0) {
    // Search term empty validation
    hideCookies(cards);
    showNumber = 6;
    showCookies(cards);
  } else {
    for (let i = 0; i < cards.length; i++) {
      // FInd if the searched term exists in the list of cookie names
      if (cookieName[i].textContent.toUpperCase().indexOf(searchTerm) > -1) {
        cards[i].classList.add("display");
      } else {
        cards[i].classList.remove("display");
      }
    }
  }
}
