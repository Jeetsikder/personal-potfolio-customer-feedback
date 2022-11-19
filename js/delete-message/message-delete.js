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

// INPUT
keyInput.addEventListener("input", () => {
  let key = keyInput.value;
  checkMessageType(key);
});
