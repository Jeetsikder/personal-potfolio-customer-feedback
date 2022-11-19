"use strict";

// VARIABLE
let keyInput = document.getElementById("keyInput");
let messsageType = document.getElementById("messsageType");
let deleteMessageBtn = document.getElementById("deleteMessageBtn");

// CHECK MESSAGE TYPE
let checkMessageType = async (key) => {
  let url = `https://1ud4og.deta.dev/form/${key}`;
  await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      displyTypeOfMessage(response);
      deleteMessagaFetch(key);
    })
    .catch((err) => {
      messsageType.innerHTML = `Check you key or Internet conection `;
    });
};

// DISPLY TYPE OF MESSAGE
let displyTypeOfMessage = async (type) => {
  let response = await type;
  messsageType.innerHTML = response?.data?.type;
};

// DELETE MESSAGE *** FETCH REQUEST ***
let deleteMessagaFetch = (key) => {
  fetch(`https://1ud4og.deta.dev/form/delete/${key}`, {
    method: "DELETE",
  })
    .then((response) => response.text())
    .then((response) => {
      alert(response);
      keyInput.value = "";
    })
    .catch((err) => {
      alert(err);
    });
};

// INPUT
keyInput.addEventListener("input", () => {
  let key = keyInput.value;
  checkMessageType(key);
});
