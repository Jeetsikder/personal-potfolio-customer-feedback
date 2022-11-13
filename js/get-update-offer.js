"use strict";
let fetchDynamic = false;
let fetchWebApps = false;
let fetchStatic = false;
let fetchAndUpdateSucces = true;
// FETCH DATA
let fetchOffers = async () => {
  const url =
    "https://1ud4og.deta.dev/form/get-all?type=potfolio-website-offer";
  const request = await fetch(url);
  //   console.log(request.status);
  if (request.status == 200) {
    // console.log(request.status);
    return request.json();
  } else {
    alert("Fetch data faild pleace reload the page");
  }
};

// FETCH ***DYNAMIC WEBSITE OFFERS***
const dynamicWebsiteDisplayOffers = async () => {
  let response = await fetchOffers();
  let pricing = response?.data[0]?.discount?.dynamicWebsite?.price;
  let offer1 = response?.data[0]?.discount?.dynamicWebsite?.offer1;
  let offer2 = response?.data[0]?.discount?.dynamicWebsite?.offer2;
  let offer3 = response?.data[0]?.discount?.dynamicWebsite?.offer3;
  let offer4 = response?.data[0]?.discount?.dynamicWebsite?.offer4;
  let offer5 = response?.data[0]?.discount?.dynamicWebsite?.offer5;
  let offer6 = response?.data[0]?.discount?.dynamicWebsite?.offer6;
  let offer7 = response?.data[0]?.discount?.dynamicWebsite?.offer7;
  let discount = response?.data[0]?.discount?.dynamicWebsite?.discount;
  let allOffers = [
    pricing,
    offer1,
    offer2,
    offer3,
    offer4,
    offer5,
    offer6,
    offer7,
    discount,
  ];
  let allOfferName = [
    "Price ₹",
    "Offer1",
    "Offer2",
    "Offer3",
    "Offer4",
    "Offer5",
    "Offer6",
    "Offer7",
    "Discount %",
  ];

  for (let i = 0; allOffers.length > i; i++) {
    document.getElementById("dynamicWebsiteOffreBox").innerHTML += `
                    <li
                      class="list-group-item text-black d-inline-flex flex-sm-row flex-column shadow-primary mb-1 rounded-3"
                    >
                     <input
                      type="text"
                      value="${allOfferName[i]}"
                      disabled    
                      class="form-control bg-white fw-bold border-0 text-primary w-25 me-sm-1"
                    />
                      <input
                        id="dynamicWebInput${i}"
                        class="form-control bg-white  fw-bold  border-0 text-black ms-sm-1  w-75"
                        type="text"
                        value="${allOffers[i]}"  
                        disabled      
                      />
                      <button
                        id="dynamicDataEditBtn${i}"
                        class="btn btn-primary fw-lighter fst-italic ms-sm-2 mt-sm-0 mt-2 shadow-primary border border-0 dynamic-offer-update-btn"
                      >
                    Edit 
                      </button>
                  </li>
       `;
  }
  fetchDynamic = true;
  checkDisplay();
};
dynamicWebsiteDisplayOffers();

// FETCH ***WEB APPLICATION OFFERS***
const webApplicationDisplayOffers = async () => {
  let response = await fetchOffers();
  let price = response?.data[0]?.discount.webApplication?.price;
  let offer1 = response?.data[0]?.discount.webApplication?.offer1;
  let offer2 = response?.data[0]?.discount.webApplication?.offer2;
  let offer3 = response?.data[0]?.discount.webApplication?.offer3;
  let offer4 = response?.data[0]?.discount.webApplication?.offer4;
  let offer5 = response?.data[0]?.discount.webApplication?.offer5;
  let offer6 = response?.data[0]?.discount.webApplication?.offer6;
  let offer7 = response?.data[0]?.discount.webApplication?.offer7;
  let offer8 = response?.data[0]?.discount.webApplication?.offer8;
  let discount = response?.data[0]?.discount?.webApplication?.discount;
  let allOffers = [
    price,
    offer1,
    offer2,
    offer3,
    offer4,
    offer5,
    offer6,
    offer7,
    offer8,
    discount,
  ];
  let allOfferName = [
    "Price ₹",
    "Offer1",
    "Offer2",
    "Offer3",
    "Offer4",
    "Offer5",
    "Offer6",
    "Offer7",
    "Offer8",
    "Discount %",
  ];
  for (let i = 0; allOffers.length > i; i++) {
    document.getElementById("webApplicationOffreBox").innerHTML += `
                    <li
                    class="list-group-item text-black d-inline-flex flex-sm-row flex-column shadow-primary mb-1 rounded-3"
                  >
                  <input
                    type="text"
                    value="${allOfferName[i]}"
                    disabled    
                    class="form-control bg-white fw-bold border-0 text-primary w-25 me-sm-1"
                  />
                    <input
                      id="webApplicationInput${i}"
                      class="form-control bg-white  fw-bold  border-0 text-black ms-sm-1  w-75"
                      type="text"
                      value="${allOffers[i]}"  
                      disabled      
                    />
                    <button
                      id="webApplicationDataEditBtn${i}"
                      class="btn btn-primary fw-lighter fst-italic ms-sm-2 mt-sm-0 mt-2 shadow-primary border border-0 dynamic-offer-update-btn"
                    >
                  Edit 
                    </button>
                </li>
    `;
  }
  fetchWebApps = true;
  checkDisplay();
};
webApplicationDisplayOffers();

// FETCH ***STATIC WEBSITE OFFERS***
const staticWebsiteDisplayOffers = async () => {
  let response = await fetchOffers();
  let price = response?.data[0]?.discount?.staticWebsite?.price;
  let offer1 = response?.data[0]?.discount?.staticWebsite?.offer1;
  let offer2 = response?.data[0]?.discount?.staticWebsite?.offer2;
  let offer3 = response?.data[0]?.discount?.staticWebsite?.offer3;
  let offer4 = response?.data[0]?.discount?.staticWebsite?.offer4;
  let offer5 = response?.data[0]?.discount?.staticWebsite?.offer5;
  let discount = response?.data[0]?.discount?.staticWebsite?.discount;
  let allOffers = [price, offer1, offer2, offer3, offer4, offer5, discount];
  let allOfferName = [
    "Price ₹",
    "Offer1",
    "Offer2",
    "Offer3",
    "Offer4",
    "Offer5",
    "Discount %",
  ];

  for (let i = 0; allOffers.length > i; i++) {
    document.getElementById("staticWebSiteOffreBox").innerHTML += `
                   <li
                      class="list-group-item text-black d-inline-flex flex-sm-row flex-column shadow-primary mb-1 rounded-3"
                    >
                    <input
                      type="text"
                      value="${allOfferName[i]}"
                      disabled    
                      class="form-control bg-white fw-bold border-0 text-primary w-25 me-sm-1"
                    />
                      <input
                        id="staticWebsiteInput${i}"
                        class="form-control bg-white  fw-bold  border-0 text-black ms-sm-1  w-75"
                        type="text"
                        value="${allOffers[i]}"  
                        disabled      
                      />
                      <button
                        id="staticWebsiteDataEditBtn${i}"
                        class="btn btn-primary fw-lighter fst-italic ms-sm-2 mt-sm-0 mt-2 shadow-primary border border-0 dynamic-offer-update-btn"
                      >
                    Edit 
                      </button>
                  </li>   
    `;
  }
  fetchStatic = true;
  checkDisplay();
};
staticWebsiteDisplayOffers();

let formId = [];
let formBtnId = [];
let displayUpdateSuccesFull = () => {
  console.log(formId, formBtnId);
  for (let i = 0; formId.length > i; i++) {
    document.getElementById(formId[i]).classList.remove("text-bg-danger");
    document.getElementById(formId[i]).classList.add("bg-success");
    document.getElementById(formId[i]).classList.add("text-white");
    document.getElementById(formId[i]).removeAttribute("disabled");
    document.getElementById(formId[i]).setAttribute("disabled", "");
  }

  for (let i = 0; formBtnId.length > i; i++) {
    document.getElementById(formBtnId[i]).classList.remove("text-bg-warning");
    document.getElementById(formBtnId[i]).classList.add("bg-success");
    document.getElementById(formBtnId[i]).innerHTML = "Done";
  }
  fetchAndUpdateSucces = false;
};
function checkDisplay() {
  if (fetchDynamic && fetchWebApps && fetchStatic && fetchAndUpdateSucces) {
    document.querySelectorAll(" .dynamic-offer-update-btn").forEach((e) => {
      e.addEventListener("click", () => {
        // console.log("Hello");
        e.parentElement.children[1].classList.remove("bg-white");
        e.parentElement.children[1].classList.remove("bg-success");
        e.parentElement.children[1].classList.remove("text-black");
        e.parentElement.children[1].classList.remove("text-white");
        e.parentElement.children[1].classList.add("text-bg-danger");
        e.parentElement.children[1].removeAttribute("disabled");

        e.parentElement.children[2].innerHTML = "Ready";
        e.parentElement.children[2].classList.remove("bg-success");
        e.parentElement.children[2].classList.add("text-bg-warning");
        let inputId = e.parentElement.children[1].id;
        let inputBtnId = e.parentElement.children[2].id;

        formId.push(inputId);
        formBtnId.push(inputBtnId);
      });
    });
  } else {
    console.log("Not Done");
  }
}
