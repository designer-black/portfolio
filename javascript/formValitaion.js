// Tratisnal way

// const formEl = document.getElementById("form_valitaion");
// const inputElName = formEl.querySelector("#name");
// const inputElEmail = formEl.querySelector("#email");
// const inputElPass = formEl.querySelector("#password");
// const inputElCpass = formEl.querySelector("#coPassword");
// const inputCheck = formEl.querySelector("#check");

// Get Elements way

const formEl = document.forms.muhForm;
// const inputElName = formEl.elements.name;
// const inputElEmail = formEl.elements.email;
// const inputElPass = formEl.elements.password;
// const inputElCpass = formEl.elements.coPassword;
// const inputCheck = formEl.elements.check;

// Obj Destructing way => Must Important in Programing language

const { name, email, password, coPassword, check } = document.forms.muhForm.elements;


formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  validationEl();
});

function validationEl() {
  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const passVal = password.value.trim();
  const cPassVal = coPassword.value.trim();
  const checkVal = check.checked;

  if (nameVal === "") {
    setError(name, "Please enter Name");
  } else {
    setSucess(name, "");
  }

  if (emailVal === "") {
    setError(email, "Please enter your email");
  } else if (!validateEmail(emailVal)) {
    setError(email, "Please enter valid email address");
  } else {
    setSucess(email, "");
  }

  if (passVal === "") {
    setError(password, "Please enter your password");
  } else if (passVal.length > 8) {
    setError(password, "Please enter 8 charactor");
  } else {
    setSucess(password, "");
  }

  if (cPassVal === "") {
    setError(coPassword, "Please enter your confirm password");
  } else if (passVal !== cPassVal) {
    setError(coPassword, "Your password does not match");
  } else {
    setSucess(coPassword, "");
  }

  if (checkVal === true) {
    setSucess(check, "");
  } else {
    setError(check, "Please check the feild");
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


