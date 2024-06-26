const formEl = document.getElementById("form_valitaion");
const inputElName = formEl.querySelector("#name");
const inputElEmail = formEl.querySelector("#email");
const inputElPass = formEl.querySelector("#password");
const inputElCpass = formEl.querySelector("#coPassword");
const inputCheck = formEl.querySelector("#check");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  validationEl();
});

function validationEl() {
  const nameVal = inputElName.value.trim();
  const emailVal = inputElEmail.value.trim();
  const passVal = inputElPass.value.trim();
  const cPassVal = inputElCpass.value.trim();
  const checkVal = inputCheck.checked;

  if (nameVal === "") {
    setError(inputElName, "Please enter Name");
  } else {
    setSucess(inputElName, "");
  }

  if (emailVal === "") {
    setError(inputElEmail, "Please enter your email");
  } else if (!validateEmail(emailVal)) {
    setError(inputElEmail, "Please enter valid email address");
  } else {
    setSucess(inputElEmail, "");
  }

  if (passVal === "") {
    setError(inputElPass, "Please enter your password");
  } else if (passVal.length > 8) {
    setError(inputElPass, "Please enter 8 charactor");
  } else {
    setSucess(inputElPass, "");
  }

  if (cPassVal === "") {
    setError(inputElCpass, "Please enter your confirm password");
  } else if (passVal !== cPassVal) {
    setError(inputElCpass, "Your password does not match");
  } else {
    setSucess(inputElCpass, "");
  }

  if (checkVal === true) {
    setSucess(inputCheck, "");
  } else {
    setError(inputCheck, "Please check the feild");
  }
}

function setError(el, msg) {
  var praEl = el.parentNode;
  var errEL = praEl.querySelector(".error");

  errEL.innerText = msg;
}

function setSucess(el, msg) {
  var praEl = el.parentNode;
  var errEL = praEl.querySelector(".error");

  errEL.innerText = msg;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const pharseReverse = formEl.querySelector("h6");
let pharSplit = pharseReverse.textContent;
let assginVal = pharSplit.split(" ").reverse().join(" ").split("").reverse().join("").toUpperCase();

pharseReverse.textContent  = assginVal;


