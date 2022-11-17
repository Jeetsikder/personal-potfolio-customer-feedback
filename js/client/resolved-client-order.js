"use strict";
// GET CLIENT-QUARY
let getClientQuaryWithKey = async (key) => {
  let url = `https://1ud4og.deta.dev/form/${key}`;
  let request = await fetch(url);
  if (request.status == 200) {
    updateClientQuaryWithKey(request.json(), key);
  } else {
    throw new alert("Error Ocared");
  }
};

// UPDATE THE DATA
let updateClientQuaryWithKey = async (clientData, key) => {
  let response = await clientData;
  let details = {};
  let formInput = {
    bankReferance: response?.data?.data?.bankReferance,
    customerEmail: response?.data?.data?.customerEmail,
    customerMessage: response?.data?.data?.customerMessage,
    customerName: response?.data?.data?.customerName,
    customerPhone: response?.data?.data?.customerPhone,
    date: response?.data?.data?.date,
    messageSubject: response?.data?.data?.messageSubject,
    grandTotal: response?.data?.data?.grandTotal,
    viewed: true,
  };
  details["dynamic_website"] = {
    price: response?.data?.data?.dynamic_website?.price,
    product_name: response?.data?.data?.dynamic_website?.product_name,
    quantity: response?.data?.data?.dynamic_website?.quantity,
  };
  details["static_webite"] = {
    price: response?.data?.data?.static_webite?.price,
    product_name: response?.data?.data?.static_webite?.product_name,
    quantity: response?.data?.data?.static_webite?.quantity,
  };
  details["web_application"] = {
    price: response?.data?.data?.web_application?.price,
    product_name: response?.data?.data?.web_application?.product_name,
    quantity: response?.data?.data?.web_application?.quantity,
  };
  details = { ...details, ...formInput };
  //   updateVIEWEDinClientData(details, key);
  viewedCardAddStyling(key);
};

// POST REQUEST FOR UPDATE CLIENT DATA
let updateVIEWEDinClientData = (data, key) => {
  let url = `https://1ud4og.deta.dev/form/update/${key}`;
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({ type: "request-from-client", data }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((response) => {
      alert(response);
    })
    .catch((err) => {
      alert(`Error message ${err}`);
    });
};

// GET RESOLVED BTN
let addVIEWEDinClientData = () => {
  document.querySelectorAll(" .resolved").forEach((e, i) => {
    e.addEventListener("click", () => {
      getClientQuaryWithKey(e.id);
    });
  });
};

// "VIEWED DATA" ADD STYLIING
let viewedCardAddStyling = (key) => {
  let resolvedBtn = document.getElementById(key);
  let spinner = resolvedBtn.parentElement.children[0].children[1];
  let dubbleTick = resolvedBtn.parentElement.children[2];

  resolvedBtn.classList.add("d-none");
  spinner.classList.add("d-none");
  dubbleTick.classList.remove("d-none");
  dubbleTick.classList.add("d-block");
};
