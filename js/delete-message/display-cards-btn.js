"use strict";

const displayDeleteMessageCard = document.getElementById(
  "displayDeleteMessageCard"
);
const displayUndefinedOfferUpdate = document.getElementById(
  "displayUndefinedOfferUpdate"
);

// CARD *** DELETE MESSAGE ***
const deleteMessageCard = document.getElementById("deleteMessageCard");

// CARD *** UNDEFINED OFFER UPDATE ***
const UndefinedTimeOffersCard = document.getElementById(
  "UndefinedTimeOffersCard"
);

// DISPLAY DELETE MESSAGE CARD
let displaydeleteMessage = () => {
  deleteMessageCard.classList.remove("d-none");
  deleteMessageCard.classList.add("d-block");
  // HIDE UNDEFINED OFFER
  UndefinedTimeOffersCard.classList.remove("d-block");
  UndefinedTimeOffersCard.classList.add("d-none");
};

// DISPLY UNDEFINED OFFER CARD
let displayUndefinedOffer = () => {
  UndefinedTimeOffersCard.classList.remove("d-none");
  UndefinedTimeOffersCard.classList.add("d-block");
  // HIDE MESSAGE DELETE
  deleteMessageCard.classList.remove("d-block");
  deleteMessageCard.classList.add("d-none");
};

displayDeleteMessageCard.addEventListener("click", () => {
  displaydeleteMessage();
});

displayUndefinedOfferUpdate.addEventListener("click", () => {
  displayUndefinedOffer();
});
