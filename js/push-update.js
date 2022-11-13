"use strict";

// let discount = {
//   dynamicWebsite: {
//     price: 0,
//     offer1: "",
//     offer2: "",
//     offer3: "",
//     offer4: "",
//     offer5: "",
//     offer6: "",
//     offer7: "",
//     discount: 0,
//   },
//   webApplication: {
//     price: 4499,
//     offer1: "Number of Pages:- 5",
//     offer2: "Design Quality:- Creative",
//     offer3: "Domain (Free for 1 year):- .in",
//     offer4: "Number of sliders:- 8",
//     offer5: "Navigation system:- Editable",
//     offer6: "All Search Engine Friendly",
//     offer7: "Forms:- Multiple<sup>*</sup>",
//     offer8: "Extra Pages:- Each page Rs.500",
//     discount: 20,
//   },
//   staticWebsite: {
//     price: 3099,
//     offer1: "Number of Pages:- 3",
//     offer2: "Design Quality:- Basic",
//     offer3: "Domain (Free for 1 year):- .tk",
//     offer4: "Navigation system:- Bsic",
//     offer5: "Extra Pages:- Each page Rs.200",
//     discount: 20,
//   },
// };

// OFFER LIST FOR DINAMIC WEB APPLICATION & STATIC WEBSITE
let discount = {};
let offerListForDynamic = [];
let offerListForWebAppliction = [];
let offerListForSatic = [];

// GET POST REQUEST
let sendDataToSever = (discount) => {
  let url = "https://1ud4og.deta.dev/form/update/r1v75odyaaa4";
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({ type: "potfolio-website-offer", discount }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json)
    .then((response) => {
      console.log(response);
    })
    .catch(console.log("Catch"));
};
// GET NEW UPDATE
let getNewUpdateData = () => {
  // FOR LOOP FOR DINAMIC WEBSITE ***FORM DATA***
  for (let i = 0; 8 >= i; i++) {
    offerListForDynamic[i] = document.getElementById(
      `dynamicWebInput${i}`
    ).value;
  }

  // FOR LOOP FOR WEB APPLICATION
  for (let i = 0; 9 >= i; i++) {
    offerListForWebAppliction[i] = document.getElementById(
      `webApplicationInput${i}`
    ).value;
  }

  //   FOR LOOP FOR STATIC WEBSTE
  for (let i = 0; 6 >= i; i++) {
    offerListForSatic[i] = document.getElementById(
      `staticWebsiteInput${i}`
    ).value;
  }
  //   UPDATE NEW OFFER LIST
  discount = {
    dynamicWebsite: {
      price: offerListForDynamic[0],
      offer1: offerListForDynamic[1],
      offer2: offerListForDynamic[2],
      offer3: offerListForDynamic[3],
      offer4: offerListForDynamic[4],
      offer5: offerListForDynamic[5],
      offer6: offerListForDynamic[6],
      offer7: offerListForDynamic[7],
      discount: offerListForDynamic[8],
    },
    webApplication: {
      price: offerListForWebAppliction[0],
      offer1: offerListForWebAppliction[1],
      offer2: offerListForWebAppliction[2],
      offer3: offerListForWebAppliction[3],
      offer4: offerListForWebAppliction[4],
      offer5: offerListForWebAppliction[5],
      offer6: offerListForWebAppliction[6],
      offer7: offerListForWebAppliction[7],
      discount: offerListForWebAppliction[8],
    },
    staticWebsite: {
      price: offerListForSatic[0],
      offer1: offerListForSatic[1],
      offer2: offerListForSatic[2],
      offer3: offerListForSatic[3],
      offer4: offerListForSatic[4],
      offer5: offerListForSatic[5],
      discount: offerListForSatic[8],
    },
  };
  sendDataToSever(discount);
};

document.getElementById("update-coupon").addEventListener("click", (e) => {
  e.preventDefault();
  getNewUpdateData();
  displayUpdateSuccesFull();
});
