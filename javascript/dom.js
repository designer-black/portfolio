const inputValue = document.getElementById("input_val");
const submitBtn = document.getElementById("button_sub");
const responseDiv = document.getElementById("response");
let responseUl = document.getElementById("items");
// const responseLi = document.querySelectorAll(".items > .item");

let numVal = Number(inputValue);
const createDiv = document.createElement("div");
createDiv.className = "add-div";

responseUl.insertAdjacentElement("afterend", createDiv);

// Remove Button with Event

// console.log(inputValue.placeholder = "Your Items");
// console.log(typeof numVal);

// let ageVal = prompt("what's your age")

// inputValue.setAttribute("value", ageVal);
// let parseIntVal = parseInt(inputValue, 10);
// console.log(typeof parseIntVal, parseIntVal);
let teSt = responseUl.children;
[...teSt].forEach((item) => {
  item.style.color = "red";
});

// Array.from.teSt.forEach(element => {
//   element.style.color = "blue";
// });

// console.log(teSt, teSt.length);
for (let valuItem of teSt) {
  valuItem.innerHTML += `<i class="remove" onclick="remoVe(event)"></i>`;
}
// responseLi.forEach((val) => {
//   console.log(val.appendChild(removeBtn));
// });

submitBtn.addEventListener("click", () => {
  const createLi = document.createElement("li");
  createLi.className = "item";
  let removeBtn = document.createElement("i");
  removeBtn.className = "remove";
  removeBtn.setAttribute("onclick", "remoVe(event)");
  createLi.appendChild(removeBtn);

  if (inputValue.value !== "") {
    let x = inputValue.value;
    createLi.append(x);
    responseUl.append(createLi);
    inputValue.value = "";
  }
});

function remoVe(event) {
  event.target.parentElement.remove();
}

const resetBtn = document.createElement("button");
const resetBtnVal = document.createTextNode("Reset Value In The clone Element");
resetBtn.id = "reset";
resetBtn.append(resetBtnVal);
createDiv.insertAdjacentElement("beforebegin", resetBtn);

const resetClick = document.getElementById("reset");

resetClick.addEventListener("click", (e) => {
  createDiv.innerHTML = "";
  let cloneEl = responseUl.cloneNode(true);
  createDiv.append(cloneEl);

  e.stopImmediatePropagation();
});

// getting Method

const dataGeting = document.querySelector(".testing-inputDOM > input");
dataGeting.setAttribute("placeholder", "Your value Here");
dataGeting.classList += " input-class";

const dataSelect = document.createElement("button");
dataSelect.textContent = "add value";
dataSelect.setAttribute(
  "style",
  "margin: 0 0 0 10px; text-transform: capitalize;"
);

dataGeting.insertAdjacentElement("afterend", dataSelect);

let dataItem = dataGeting.dataset.name;
console.log(dataItem);

let joKK = () => {
  alert("testing value");
}
dataSelect.addEventListener("click", joKK);
dataSelect.addEventListener("click", () => {
  dataGeting.classList.toggle("hidden");
  console.log(event.target);
});
