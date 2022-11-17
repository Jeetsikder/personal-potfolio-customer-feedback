"use strict";

const searchClientQuary = document.getElementById("searchClientQuary");
searchClientQuary.addEventListener("input", () => {
  let inputVal = searchClientQuary.value.toLowerCase().trim();
  let clientQuaryCard = document.getElementsByClassName("client-quary-card");
  Array.from(clientQuaryCard).forEach((e) => {
    let clientQuaryCardTxt = e.getElementsByTagName("div")[0].innerText;
    if (clientQuaryCardTxt.toLocaleLowerCase().trim().includes(inputVal)) {
      e.classList.remove("d-none");
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
});
