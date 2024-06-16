// console.log(console);

// console.assert("red");
// console.error("red");
// console.info("red");
// console.warn("red");
// console.log(window.document.body.innerHTML);

// window.open("https://designer-black.github.io/Happy-Birthday-Mrs-Anand/");

// console.log(window.screen);

// console.log(location);

setInterval(
  () => {
    // location.assign("https://designer-black.github.io/Happy-Birthday-Mrs-Anand/");
  },
  5000,
  50,
  70
);

// document.body.children[0].innerText  = "I am Anand Here";
// console.dir(document.body.children[0].innerText  = "I am Anand Here");

// const val1 = prompt("Enter Your name:");
// const val2 = prompt("Where are you from");

// let assignVal = `i'm ${val1} and, i'm From ${val2}`

// document.body.innerHTML = `<h1> ${assignVal.toLocaleUpperCase()} </h1>`;
// document.write(assignVal)

// let x = document.body;
// let y = x.getElementsByTagName("h4");
// console.log(y);

// y.innerHTML = ` <a class="mu-button"> Find Mee 😘 </a>`;

// document.addEventListener('DOMLoadedContent', () => {

let x = document.getElementById("input_val");
let y = document.getElementById("button_sub");
let z = document.getElementById("response");

let cId = document.getElementById("items");

function createDomEl() {
  const mainVal = document.querySelector("section.form-section > div.row");
  // let cLi = document.createElement("li");
  const result = document.getElementById("response");

  const appDiv = document.createElement("div");
  const appVal = document.createTextNode("Add sucess");
  const appValOne = document.createTextNode("Invalid Value");

  const addVal = x.value;
  // cLi.className = 'item';

  y.addEventListener("click", () => {
    mainVal.prepend(appDiv);
    // cLi.append(addVal);
    // cId.append(cLi)
    result.textContent = addVal;

    console.log(addVal);

    if (x.value !== "") {
      appDiv.className = "valid-sucess";
      appDiv.append(appVal);
    } else {
      appDiv.className = "valid-invalid";
      appDiv.append(appValOne);
    }
  });
}

createDomEl();


// console.log(cId);
// console.log(c);

// let test = [].map.call(c, function(s) {
//   s.textContent
// });

// console.log(test);

// y.addEventListener("click", () => {
//   ghy = x.value;
//   var val = (ghy * 9/5) + 32;
//   cId.innerHTML += `<li> ${val}*f </li>`;
// });

// console.log(c);

// clr.addEventListener('click', function() {
//   z.innerText = number(x);
//   alert("copy Text:", h)
// });
// });

// document.addEventListener('DOMContentLoaded', () => {
// x.value = "😁💕💕💕"

// y.addEventListener('click', () =>{
//   cId.innerHTML += `<li>${x.value}</li>`;
// });
// console.log(cId);
// });

// y.addEventListener('click', function(e) {
//   e = x.value;
//   const g = (e * 9/5) + 32;
//   z.innerHTML = `<div>${g} </div>`;
// });
