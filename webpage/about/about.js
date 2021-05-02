/* -------------------------- CARD RANDOM IN ABOUT -------------------------- */

let cardNitesh = document.querySelector(".card-nitesh");
let cardShivang = document.querySelector(".card-shivang");
let cardShubham = document.querySelector(".card-shubham");
let cardKartick = document.querySelector(".card-kartick");
let cardAce = [cardNitesh, cardShivang, cardShubham, cardKartick];

for (let i = 0; i < 4; ++i) {
  let randomNumb = Math.floor((Date.now() * Math.random()) % 4);
  cardAce[i].style.order = randomNumb;
}

let memberNitesh = document.querySelector(".member-nitesh");
let memberShivang = document.querySelector(".member-shivang");
let memberShubham = document.querySelector(".member-shubham");
let memberKartick = document.querySelector(".member-kartick");
let memberAce = [memberNitesh, memberShivang, memberShubham, memberKartick];

for (let i = 0; i < 4; ++i) {
  let randomNumb = Math.floor((Date.now() * Math.random()) % 4);
  memberAce[i].style.order = randomNumb;
}

/* ----------------------------- HAMBURGER MENU ----------------------------- */
let hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", () => {
  document.querySelector(".nav-buttons ").classList.toggle("active");
});
