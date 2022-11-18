"use strict";
// GATE CLIENT QUARY
const getClientQuary = async () => {
  let response = await fetch(
    "https://1ud4og.deta.dev/form/get-all?type=request-from-client"
  );
  if (response.status == 200) {
    return response.json();
  } else {
    throw new alert("Data not Fatch Succesfully");
  }
};

// NEW MESSAGE PLAYAUDIO FUNCTION
let newMessageAlertTone = () => {
  let song = new Audio("audio/new-message-alert.mp3");
  let check = true;
  // LOGIC FOR PLAY ONLY ONE TIME THE SOUND
  check === true ? song.play() : "";
  check = false;
};
let cheNewMessageAlertTone = true;

// DISPLY CLIENT QUARY
const displayClientOrderInfo = async () => {
  let response = await getClientQuary();
  //   console.log(response?.data[0].data);
  let sl = response?.data.sort((a, b) => {
    let date1 = new Date(a.date).getTime();
    let date2 = new Date(b.date).getTime();
    return date1 - date2;
  });

  sl = sl.reverse();
  document.getElementById("totalQuary").innerText = sl.length;
  let seenMessage = 0;
  let unseenMessage = 0;
  let sixPlusMessage;
  for (let i = 0; sl.length > i; i++) {
    // DATA FOR CLIENT-PERSONAL INFO
    let customerName = sl[i]?.data?.customerName;
    let customerEmail = sl[i]?.data?.customerEmail;
    let customerPhone = sl[i]?.data?.customerPhone;
    let key = sl[i]?.key;
    let bankReferance = sl[i]?.data?.bankReferance;
    let customerMessage = sl[i]?.data?.customerMessage;
    let messageSubject = sl[i]?.data?.messageSubject;
    let date = sl[i]?.data?.date;
    let grandTotal = sl[i]?.data?.grandTotal;
    let viewed = sl[i]?.data?.viewed == undefined ? false : sl[i]?.data?.viewed;
    viewed == true ? seenMessage++ : "";
    viewed == false ? unseenMessage++ : "";
    sixPlusMessage = i + 1 - 6;
    // \\DATA FOR CLIENT-PERSONAL INFO

    // DATA FOR ORDER-INFO
    // DYNAMIC-WEBSITE
    let dynamic_product_name = sl[i]?.data?.dynamic_website?.product_name;
    let dynamic_quantity = sl[i]?.data?.dynamic_website?.quantity;
    let dynamic_price = sl[i]?.data?.dynamic_website?.price;
    // console.log(Number(dynamic_quantity));

    // STATIC-WEBSITE
    let static_product_name = sl[i]?.data?.static_webite?.product_name;
    let static_quantity = sl[i]?.data?.static_webite?.quantity;
    let static_price = sl[i]?.data?.static_webite?.price;
    // console.log(Number(static_quantity));

    // WEB-APPLICATION
    let web_application_product_name =
      sl[i]?.data?.web_application?.product_name;
    let web_application_quantity = sl[i]?.data?.web_application?.quantity;
    let web_application_price = sl[i]?.data?.web_application?.price;

    // CHECK NEW MESSAGE
    viewed === false ? (cheNewMessageAlertTone = false) : "";

    // ADD INFORMATION TO DOM
    document.getElementById("clientQuaryBox").innerHTML += `
    <!-- ***CARD***  -->
    <div id=${i + 1} class="col-lg-4 col-sm-6 col-11 client-quary-card ${
      i >= 6 ? "d-none quary-hide" : ""
    }">
      <!-- CARD BODY -->
      <div class="card quary-card">
        <!-- CARD NAVIGATION BTN -->
        <div class="card-header border-bottom-0 quary-card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item Contact-Ifo">
              <a
                class="nav-link fst-italic fw-bold active"
                aria-current="true"
                >Contact Ifo</a
              >
            </li>
            <li class="nav-item Order-Itm">
              <a class="nav-link fst-italic fw-bold">Order Itm</a>
            </li>
            <li class="nav-item Payment-History">
              <a class="nav-link fst-italic fw-bold"
                >Payment History</a
              >
            </li>
          </ul>
        </div>
        <!-- //CARD NAVIGATION BTN -->

        <!-- CARD BODY -->
        <div
          class="card-body text-white quary-card-body ps-4 m-1 mt-0 rounded-3"
        >
          <!-- CARD HEADER -->
          <div class="client-card-header d-flex justify-content-between">
            <div
              class="brand-icon d-inline-flex align-items-center justify-content-center"
            >
              <img src="/img/favicon-32x32.png" class="me-2" alt="" />
              <div
                class="spinner-grow text-primary d-inline-flex ${
                  viewed === true ? "d-none" : "d-block"
                }"
                role="status"
              >
                <span class="text-white fw-bold" style="font-size: small"
                  >UnResolved</span
                >
              </div>
            </div>
            <button
              class="btn btn-primary fw-bold resolved ${
                viewed === true ? "d-none" : "d-block"
              }"
              id="${key}"
              style="font-size: small"
            >
              Resolved
            </button>
            <div class="msg-seen ${
              viewed === true ? "d-block" : "d-none"
            }" style="color: greenyellow">
              <i class="ri-check-double-line" style="font-size: 1.6rem"></i>
            </div>
          </div>
          <!-- //CARD HEADER -->

          <!-- CLIENT INFORMATION -->
          <div id="clientInfo${i}"  class="">
            <h5 class="card-title text-primary fw-bold fst-italic">
             ${customerName}
            </h5>
            <div class="quary-list text-white">
              <ul class="list-unstyled">
                <li class="my-1">
                  <span class="fw-bold">Email:-</span>
                  ${customerEmail}
                </li>
                <li class="my-1">
                  <span class="fw-bold">Phone No:-</span> ${customerPhone}
                </li>
                <li class="my-1">
                  <span class="fw-bold">Id:-</span> ${key}
                </li>
                <li class="my-1">
                  <span class="fw-bold">Bank Referance:-</span> ${bankReferance}
                </li>
                <li class="my-1">
                  <span class="fw-bold">Subject:-</span> ${messageSubject}
                </li>
                <li class="my-1">
                  Message:-
                  <i
                    class="ri-arrow-down-fill ms-2"
                    style="color: greenyellow; font-size: 1.3rem"
                  ></i>
                  <ul
                    class="list-unstyled rounded-3 my-2 px-3 py-1 over-flow-msg"
                  >
                    <li>
                     ${customerMessage}
                    </li>
                  </ul>
                </li>
              </ul>
              <ul
                class="list-unstyled d-flex justify-content-between fw-bold text-white-50"
              >
                <li>${new Date(date).toLocaleTimeString()}</li>
                <li>${new Date(date).toLocaleDateString()}</li>
              </ul>
            </div>
            <a href="tel: +91${customerPhone}" target="blank" class="btn btn-primary fw-bold fst-italic d-grid"
              >Call Client</a
            >
          </div>
          <!-- //CLIENT INFORMATION -->

          <!-- CLIENT ORDER INFORMATION -->
          <div id="clientOrderInfo${i}" class="d-none">
            <header class="d-inline-flex flex-column">
              <h3
                class="heading fw-bold fst-italic text-primary border-bottom"
              >
                Order INO
              </h3>
              <p
                class="d-inline-flex align-items-center justify-content-center"
              >
                Order Info bellow in the Table
                <i
                  class="ri-arrow-down-fill ms-2"
                  style="color: greenyellow; font-size: 1.3rem"
                ></i>
              </p>
            </header>

            <!-- ORDER LIST -->
            <table class="table text-white" style="font-size: smaller">
              <thead class="text-primary">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <!-- DYNAMIC -->
                <tr class="${Number(dynamic_quantity) != 0 ? "" : "d-none"}">
                  <th>Dynamic</th>
                  <th>${dynamic_price}</th>
                  <th>${dynamic_quantity}</th>
                  <th>${Number(dynamic_price) * Number(dynamic_quantity)}</th>
                </tr>
                <!-- //DYNAMIC -->
                <!-- WEBAPPS -->
                <tr class="${
                  Number(web_application_quantity) != 0 ? "" : "d-none"
                }">
                  <th>WEBAPPS</th>
                  <th>${web_application_price}</th>
                  <th>${web_application_quantity}</th>
                  <th>${
                    Number(web_application_price) *
                    Number(web_application_quantity)
                  }</th>
                </tr>
                <!-- //WEBAPPS -->
                <!-- STATIC WEBSITE -->
                <tr class="${Number(static_quantity) != 0 ? "" : "d-none"}">
                  <th>Static</th>
                  <th>${static_price}</th>
                  <th>${static_quantity}</th>
                  <th>${Number(static_price) * Number(static_quantity)}</th>
                </tr>
                <!-- //STATIC WEBSITE -->
              </tbody>
              <tfoot class="text-bg-warning">
                <tr class="rounded-3">
                  <th>Grand total</th>
                  <th></th>
                  <th></th>
                  <th>${grandTotal}</th>
                </tr>
              </tfoot>
            </table>
            <!-- //ORDER LIST -->
          </div>
          <!-- //CLIENT ORDER INFORMATION -->

          <!-- PAYMENT RECORD -->
          <div id="paymentRecord${i}" class="d-none mt-4">
            <header>
              <h4 class="fw-bold fst-italic text-light">Payment Record</h4>
            </header>
            <table class="table text-white" style="font-size: smaller">
              <thead class="text-primary">
                <tr>
                  <th>Grand</th>
                  <th>Pay</th>

                  <th>Date</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody class="">
                <tr>
                  <th>19095</th>
                  <th>-</th>
                  <th style="font-size: 10px">11/15/2022</th>
                  <th>19095</th>
                </tr>
              </tbody>
              <tfoot class="text-bg-danger">
                <tr>
                  <th>Payment Left</th>
                  <th></th>
                  <th></th>
                  <th>2233</th>
                </tr>
              </tfoot>
            </table>
            <header>
              <h5 class="fw-bold fst-italic text-light">
                Bank Referance No
              </h5>
            </header>

            <!-- PAYMENT ID RECORD  -->
            <table class="table text-white" style="font-size: smaller">
              <thead>
                <tr>
                  <th>Sl-No</th>
                  <th>Bank-ID</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th style="font-size: 10px">JUPITER1244325</th>
                  <th>11/15/2022</th>
                </tr>
              </tbody>
            </table>
            <!-- //PAYMENT ID RECORD  -->
          </div>
          <!-- //PAYMENT ORDER RECORD -->
        </div>
        <!-- //CARD BODY -->
      </div>
    </div>
    <!-- //***CARD***  -->

    `;
    let lotOfMessageFoClient = document.getElementById("lotOfMessageFoClient");
    if (i > 6) {
      lotOfMessageFoClient.innerHTML = `<button id="showHideQuarybtn" onclick="displayHideMessageForClient(this)" type="button" class="btn btn-primary position-relative mt-0 mb-4">
                                  See all
                                  <span id="unseenMessageId"
                                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                  >
                                  <span class="visually">+</span>
                                  </span>
                          </button>`;
      document.getElementById("unseenMessageId").innerHTML = sixPlusMessage;
    }
  }

  cardNavigationBtn();
  addVIEWEDinClientData();
  document.getElementById("totalSeenMessage").innerHTML = seenMessage;
  document.getElementById("totalUnseenMessages").innerHTML = unseenMessage;

  // PLAY ALEART MESSAGE
  cheNewMessageAlertTone === false ? newMessageAlertTone() : "";
};
displayClientOrderInfo();

// CARD NAVBAR
let cardNavigationBtn = () => {
  // NAV-BAR CONTROL FOR "CLIENT-INFO"
  let ContactIfo = document.querySelectorAll(" .Contact-Ifo");
  ContactIfo.forEach((e, i) => {
    e.addEventListener("click", () => {
      // GET CARD PARTS ID
      let clientInfo = document.getElementById(`clientInfo${i}`);
      let clientOrderInfo = document.getElementById(`clientOrderInfo${i}`);
      let paymentRecord = document.getElementById(`paymentRecord${i}`);

      // ADD NAV-BAR ACTIVE CLASS TO "ORDER ITEM"
      //   ADD ACTIVE
      e.childNodes[1].classList.add("active");
      // REMOVE ACTIVE
      e.parentElement.children[1].childNodes[1].classList.remove("active");
      e.parentElement.children[2].childNodes[1].classList.remove("active");

      //   VISIBLE  "CLIENT-IFO"
      clientInfo.classList.remove("d-none");
      clientInfo.classList.add("d-block");
      //   HIDE "ORDER-INFO" & "PAYMENT-RECORD"
      clientOrderInfo.classList.add("d-none");
      paymentRecord.classList.add("d-none");
    });
  });

  // NAV-BAR CONTROL FOR "CLIENT ORDER INFO"
  let OrderItm = document.querySelectorAll(" .Order-Itm");
  OrderItm.forEach((e, i) => {
    e.addEventListener("click", () => {
      // GET CARD PARTS ID
      let clientInfo = document.getElementById(`clientInfo${i}`);
      let clientOrderInfo = document.getElementById(`clientOrderInfo${i}`);
      let paymentRecord = document.getElementById(`paymentRecord${i}`);

      // ADD NAV-BAR ACTIVE CLASS TO "ORDER ITEM"
      //   ADD ACTIVE
      e.childNodes[1].classList.add("active");
      // REMOVE ACTIVE
      e.parentElement.children[0].childNodes[1].classList.remove("active");
      e.parentElement.children[2].childNodes[1].classList.remove("active");

      //   HIDE CLIENT ORDER AND PAYMENT
      clientOrderInfo.classList.remove("d-none");
      clientOrderInfo.classList.add("d-block");
      clientInfo.classList.add("d-none");
      paymentRecord.classList.add("d-none");
    });
  });

  //   NAV-BAR CONTROL FOR "PAYMENT-RECORED"
  let PaymentHistory = document.querySelectorAll(" .Payment-History");
  PaymentHistory.forEach((e, i) => {
    e.addEventListener("click", () => {
      // GET CARD PARTS ID
      let clientInfo = document.getElementById(`clientInfo${i}`);
      let clientOrderInfo = document.getElementById(`clientOrderInfo${i}`);
      let paymentRecord = document.getElementById(`paymentRecord${i}`);

      // ADD NAV-BAR ACTIVE CLASS TO "ORDER ITEM"
      //   ADD ACCTIVE
      e.childNodes[1].classList.add("active");
      //   REMOVE ACTIVE
      e.parentElement.children[0].childNodes[1].classList.remove("active");
      e.parentElement.children[1].childNodes[1].classList.remove("active");

      clientInfo.classList.add("d-none");
      clientOrderInfo.classList.add("d-none");
      paymentRecord.classList.remove("d-none");
      paymentRecord.classList.add("d-block");
    });
  });
};

// SEE MORE BUTTON FUNCTION
let displayHideMessageForClient = () => {
  let elementId = [];
  document.querySelectorAll(" .quary-hide").forEach((e) => {
    elementId.push(e.id);
  });
  for (let i = 0; 2 > i; i++) {
    if (document.getElementById(elementId[i]) != null) {
      document.getElementById(elementId[i]).classList.remove("d-none");
      document.getElementById(elementId[i]).classList.remove("quary-hide");
    }
  }
  elementId.length - 2 <= 0
    ? document.getElementById("showHideQuarybtn").classList.add("d-none")
    : (document.getElementById("unseenMessageId").innerHTML =
        elementId.length - 2);
};
