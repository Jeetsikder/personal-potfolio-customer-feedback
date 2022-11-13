"use strict";
const discount = {
  dynamicWebsite: {
    price: 3599,
    offer1: "Number oign Qualf Pages:- 5",
    offer2: "Design Quality:- Professional",
    offer3: "Domain (Free for 1 year):- .in",
    offer4: "Number of sliders:- 6",
    offer5: "Navigation system:- Editable",
    offer6: "All Search Engine Friendly",
    offer7: "Extra Pages (Without form):- Each page Rs.200",
    discount: 30,
  },
  webApplication: {
    price: 4499,
    offer1: "Number of Pages:- 5",
    offer2: "Design Quality:- Creative",
    offer3: "Domain (Free for 1 year):- .in",
    offer4: "Number of sliders:- 8",
    offer5: "Navigation system:- Editable",
    offer6: "All Search Engine Friendly",
    offer7: "Forms:- Multiple<sup>*</sup>",
    offer8: "Extra Pages:- Each page Rs.500",
    discount: 20,
  },
  staticWebsite: {
    price: 3099,
    offer1: "Number of Pages:- 3",
    offer2: "Design Quality:- Basic",
    offer3: "Domain (Free for 1 year):- .tk",
    offer4: "Navigation system:- Bsic",
    offer5: "Extra Pages:- Each page Rs.200",
    discount: 20,
  },
};

const creatNewOffers = () => {
  const url = "https://1ud4og.deta.dev/form";
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ type: "potfolio-website-offer", discount }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    mode: "cors",
  })
    .then((response) => response.text())
    .then((response) => console.log(response));
};
// creatNewOffers();

const updateOffers = () => {
  const key = "kambsbqzrk7os";
  const url =
    "https://1ud4og.deta.dev/form/update/t36tu4w3svx6?type=potfolio-website-offer";
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({ type: "potfolio-website-offer", discount }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch(console.log("Catech"));
};

document.getElementById("update-coupon").addEventListener("click", (e) => {
  e.preventDefault();
  // updateOffers();
  getNewUpdateData();
});
