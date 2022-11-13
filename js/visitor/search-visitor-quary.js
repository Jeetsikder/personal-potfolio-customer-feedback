"use strict";
const searchVisitorQuary = document.getElementById("searchVisitorQuary");
searchVisitorQuary.addEventListener("input", () => {
  let inputVal = searchVisitorQuary.value.toLowerCase().trim();
  let visiorQuaryCard = document.getElementsByClassName("visior-quary-card");
  Array.from(visiorQuaryCard).forEach((e) => {
    let visitorCardTxt = e.getElementsByTagName("div")[0].innerText;
    // console.log(visitorCardTxt);
    if (visitorCardTxt.toLowerCase().includes(inputVal)) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
});
