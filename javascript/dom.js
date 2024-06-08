// console.log(console);

// console.assert("red");
// console.error("red");
// console.info("red");
// console.warn("red");
// console.log(window.document.body.innerHTML);

// window.open("https://designer-black.github.io/Happy-Birthday-Mrs-Anand/");

// console.log(window.screen);

// console.log(location);

setInterval(() => {
    // location.assign("https://designer-black.github.io/Happy-Birthday-Mrs-Anand/");
}, 5000, 50,70);

// document.body.children[0].innerText  = "I am Anand Here";
// console.dir(document.body.children[0].innerText  = "I am Anand Here");

const val1 = prompt("Enter Your name:");
const val2 = prompt("Where are you from");

let assignVal = `i'm ${val1} and, i'm From ${val2}`

document.body.innerHTML = `<h1> ${assignVal.toLocaleUpperCase()} </h1>`;
document.write(assignVal)