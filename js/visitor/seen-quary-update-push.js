"use strict";

// PATCH VISITOR QUARY
let patchVisitorQuary = async (key) => {
  let getData = `https://1ud4og.deta.dev/form/${key}`;
  console.log(key);
  let response = await fetch(getData);
  if (response.status == 200) {
    // return response.json();
    updateVisitorQuary(response.json(), key);
  } else {
    throw new alert("Error Ocared ");
  }
};

let updateVisitorQuary = async (visiorData, key) => {
  let response = await visiorData;
  //   INDIVIDUAL VISITOR QUARYS INFO
  let data = {
    customerEmail: response?.data?.data?.customerEmail,
    customerMessage: response?.data?.data?.customerMessage,
    customerName: response?.data?.data?.customerName,
    customerPhone: response?.data?.data?.customerPhone,
    date: response?.data?.data?.date,
    messageSubject: response?.data?.data?.messageSubject,
    viewed: true,
  };
  let url = `https://1ud4og.deta.dev/form/update/${key}`;
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({ type: "request-from-visitor", data }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((check) => check.json())
    .then((check) => console.log(check))
    .catch((check) => {
      console.log(check.status);
    });
};

let visitorQuarySeenUpdate = () => {
  const visiorQuarySeenBtn = document.querySelectorAll(
    " .visior-quary-seen-btn"
  );
  visiorQuarySeenBtn.forEach((e) => {
    e.addEventListener("click", () => {
      // SEN ID TO FUNCTION FOR UPDATE FORM
      let elementId = e.parentElement.children[1].id;

      //PATCH THE MESSAGE HAS SEEN/RESOLVED
      patchVisitorQuary(elementId);

      //   RUN TIME ADD STYLYING TO CARD
      //   HIDE SPINNER
      e.parentElement.children[0].children[1].classList.add("d-none");
      //   HIDE RESOLVED BTN
      e.classList.add("d-none");
      //   DISPLY BLOCK ***DUBLE TICK ICON**
      e.parentElement.children[2].classList.remove("d-none");
      e.parentElement.children[2].classList.add("d-block");

      //   UPDATE TOTAL SEEN AND TOTAL LEFT ***COUNT***
      let totalSeenMessage = document.getElementById("totalSeenMessage");
      let totalUnseenMessages = document.getElementById("totalUnseenMessages");
      totalSeenMessage.innerHTML = `<small class="text-white">${
        new Number(totalSeenMessage.innerText) + 1
      }</small>`;
      totalUnseenMessages.innerHTML = `<small class="text-white">${
        new Number(totalUnseenMessages.innerText) - 1
      }</small>`;

      new Number(totalUnseenMessages.innerText) < 1
        ? totalUnseenMessages.parentElement.classList.add("d-none")
        : "";
    });
  });
};
