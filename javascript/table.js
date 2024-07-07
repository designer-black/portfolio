const tableEl = document.getElementById("table");
const bodyEl = document.body;

let uu;

tableEl.addEventListener("click", (e) => {
  let x = e.target;
  let trEl = x.closest("tr");

  if (x.tagName === "TH") return;

  if (uu != undefined) {
    uu.classList.remove("active");
  }

  uu = trEl;
  trEl.classList.add("active");
  e.stopPropagation();
});

let aniMation = document.querySelector(".form-main");

bodyEl.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.clientX) / 25;
  let y = (window.innerHeight / 2 - e.clientY) / 25;

  aniMation.style.transform = `translateX(${x}px) translateY(${y}px)`;

});