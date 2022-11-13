"use strict";

// GET VISITOR QUARY
let getVisitorQuary = async () => {
  let url = "https://1ud4og.deta.dev/form/get-all?type=request-from-visitor";
  let request = await fetch(url);
  if (request.status == 200) {
    return request.json();
  } else {
    alert("Check your conection");
  }
};

// 8+ MESSAGE
let unseenMessage;
let seenMessage = 0;
// DISPLY QUARY'S
let displayVisitorQuary = async () => {
  let theData = await getVisitorQuary();
  let sl = theData.data.sort((a, b) => {
    let a1 = new Date(a.data.date);
    let b1 = new Date(b.data.date);
    return a1.getTime() - b1.getTime();
  });
  document.getElementById("totalQuary").innerHTML = sl.length;
  sl = sl.reverse();
  for (let i = 0; sl.length > i; i++) {
    let customerName = sl[i]?.data?.customerName;
    let customerEmail = sl[i]?.data?.customerEmail;
    let customerPhone = sl[i]?.data?.customerPhone;
    let messageSubject = sl[i]?.data?.messageSubject;
    let customerMessage = sl[i]?.data?.customerMessage;
    let date = sl[i]?.data?.date;
    let quaryFetchId = sl[i]?.key;
    let viewed =
      sl[i]?.data?.viewed === undefined ? false : sl[i]?.data?.viewed;
    console.log(viewed);
    unseenMessage = i + 1 - 8;

    // UPDATE TOTAL SEEN MESSAGE
    viewed === true ? seenMessage++ : seenMessage;
    document.getElementById("totalSeenMessage").innerText = seenMessage;

    // ADD CARD TO DOM
    document.getElementById("visitorQuaryBox").innerHTML += `
                    <!--  -->
                        <div id="${
                          i + 1
                        }" class="col-lg-3 col-sm-5 col-10 visior-quary-card ${
      i >= 8 ? "d-none quary-hide" : ""
    }">
                        <div class="quary-content pt-2 pb-1 px-4 rounded-4 translateY">
                            <div class="brand-info d-flex justify-content-between">
                            <div class="brand-icon">
                                <img src="/img/favicon-32x32.png" class="me-2" alt="" />
                                <div class="spinner-grow text-primary  ${
                                  viewed == true ? "d-none" : ""
                                }" role="status">
                                    <span class="text-white fw-bold" style="font-size: small">UnResolved</span>
                                </div>
                            </div>
                            <button id="${quaryFetchId}" class="btn btn-primary p-1 visior-quary-seen-btn  ${
      viewed == true ? "d-none" : ""
    }" style="z-index: 2">
                          Resolved
                            </button>
                            
                            <div class="msg-seen ${
                              viewed == true ? "d-block" : "d-none"
                            }">
                                <i class="ri-check-double-line" style="font-size: 1.6rem"></i>
                            </div>
                            </div>
                            <div class="quary-heading text-primary fw-bold fst-italic">
                            <h3>${customerName}</h3>
                            </div>
                            <div class="quary-list text-white">
                            <ul class="list-unstyled">
                                <li class="my-1"><span class="fw-bold">Email:- </span> ${customerEmail}</li>
                                <li class="my-1"><span class="fw-bold"> Phone No:- </span>${customerPhone}</li>
                                <li  class="my-1"><span class="fw-bold"> Id:- </span>${quaryFetchId}</li>
                                <li class="my-1"><span class="fw-bold"> Subject:- </span>${messageSubject}</li>
                                <li class="my-1 fw-bold">
                                Message  <i
                                class="ri-arrow-down-fill ms-2"
                                style="color: greenyellow; font-size: 1.3rem;"
                              ></i>
                                <ul
                                    class="list-unstyled bg-black rounded-3 my-2 px-3 py-1 over-flow-msg${
                                      customerMessage.length <= 85
                                        ? "over-flow-msg"
                                        : ""
                                    }"
                                >
                                    <li>
                                        ${customerMessage}
                                    </li>
                                </ul>
                                </li>
                                <li class="mt-2">
                                
                                </li>
                            </ul>
                            <ul
                                class="list-unstyled d-flex justify-content-between fw-bold text-white-50"
                            >
                                <li>${new Date(date).toLocaleDateString()}</li>
                                <li>${new Date(date).toLocaleTimeString()}</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    <!-- //  -->
                        `;

    let lotOfMessage = document.getElementById("lotOfMessage");
    if (i >= 8) {
      lotOfMessage.innerHTML = `<button id="showHideQuarybtn" onclick="displayHideMessage(this)" type="button" class="btn btn-primary position-relative">
                                  See all
                                  <span id="unseenMessageId"
                                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                  >
                                  <span class="visually">+</span>
                                  </span>
                          </button>`;
      document.getElementById("unseenMessageId").innerHTML = unseenMessage;
    }
  }
  visitorQuarySeenUpdate();
};
displayVisitorQuary();

// SEE MORE BUTTON ***FUNCTION***
let displayHideMessage = () => {
  let quaryHide = document.querySelectorAll(" .quary-hide");
  let elementId = [];
  quaryHide.forEach((e) => {
    elementId.push(e.id);
  });
  for (let i = 0; 2 > i; i++) {
    if (document.getElementById(elementId[i]) !== null) {
      document.getElementById(elementId[i]).classList.remove("quary-hide");
      document.getElementById(elementId[i]).classList.remove("d-none");
    }
  }

  console.log(elementId);
  console.log(elementId.length);
  elementId.length - 2 <= 0
    ? document.getElementById("showHideQuarybtn").classList.add("d-none")
    : (document.getElementById("unseenMessageId").innerHTML =
        elementId.length - 2);
};
