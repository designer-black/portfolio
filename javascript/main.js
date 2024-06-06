// Object

let personal_detail = {
  name: "Anand",
  age: 24,
  siblings: {
    sister: 4,
    brother: 2,
  },
};
personal_detail["name"] = "30";
console.log(typeof personal_detail["name"]);

// Array concept

let favColors = ["red", "green"];

favColors.push(1, 5, 3, 7, 2);
favColors[7] = "yellow";

console.log(favColors.sort());

// function

function myFunction(Number = 30, Number2 = 30) {
  // return Number + Number2;
  console.log(Number + Number2);
}

myFunction(2, 4);
myFunction();

// Loops

const element = [1, 6, 5, 4, 3, 2, 8];
// for (let i = 0; i <= element.length; i++) {
//     console.log(i);
// }

let vanArrange = 10;
let van = vanArrange <= element.length ? "Bus" : "van";

console.log(van);

let item = ["red", "green"];

for (let items in item) {
  console.log(`${items} : ${item[items]}`);
}

for (let items of item) {
  console.log(items);
}

// object orianted programing (OOP)

let personalDetail = {
  name: "Anand AD",
  age: 24,
  isAlive: true,
  greeting: function (item = "No Data") {
    return `i am ${this.name}, and my age is ${this.age}, ${item}`;
  },
};

console.log(personalDetail.greeting());

// Clone Way One => Sprit operators
let clone = { ...personalDetail };
console.log(clone);

// Clone Way two

let cloneOne = Object.assign({}, personalDetail);
console.log(cloneOne);

// Factory Function => Using camelcase

function factoryFun(name = "Not difined") {
  return {
    ourname: name,
    welco() {
      return `i am ${this.ourname}`;
    },
  };
}

let anbe = factoryFun("yess");
console.log(anbe.welco());

// Constraction function => using capitalize

function Canstract(item_C = "Empty Value-1", item_D = "Empty Value-2") {
  this.firstName = item_C;
  this.lastName = item_D;
  return `value C : ${item_C}, and value D : ${item_D}`;
  // this.loading = function() {
  // }
}

let constrect = Canstract.call({}, "daii", "deeee");
console.log(constrect);

// fact f

function faCtory(value1 = "Empty", value2 = "Empty 2") {
  return {
    value_1: value1,
    value_2: value2,
    greating: function () {
      return `Welcome Mr.${this.value_1} and, Mrs.${this.value_2}.`;
    },
  };
}

let ad = faCtory("anand", "Prithi");
console.log(ad.greating());

for (let obj in ad) {
  console.log(obj);
}
for (let ofObj of Object.entries(ad)) {
  console.log(ofObj);
}

// Array Finding Method (Primitive Type)

let colers = ["red", "green", "blue"];
console.log(colers.indexOf("red"));

// Array Finding Method (Reference Type)

let orders = [
  { id: 1, product: "Onion", quantity: "1kg" },
  { id: 2, product: "Tomoto", quantity: "0.5kg" },
  { id: 3, product: "Chilly", quantity: "3kg" },
  { id: 4, product: "Gapage", quantity: "1kg" },
  { id: 5, product: "Oil", quantity: "1lt" },
];

orders.forEach((a, i) => {
  console.log(i, "=>", a);
  // let oi = ` ${i} : ${orders[i].a} `;
  // console.log(oi);
});

let result = orders.find(function (order) {
  return order.id === 2;
});

console.log(result);

let findVale = orders.find((a) => {
  return a.quantity === "1kg";
});

console.log(findVale);

let a = ["Anand"];
let b = ["Prithika"];
let evnt = ["Weds"];

console.log(a.concat(evnt, b));

const mrg = [...a, ...evnt, ...b, "and also Lovable coples"];
let mrgHA = mrg.join(" 💜 ");
console.log(mrgHA.toUpperCase());

// orders.forEach( (u) => u );
// orders.join()

let order = [
  { id: 1, product: "Onion", quantity: "1kg" },
  { id: 2, product: "Tomoto", quantity: "0.5kg" },
  { id: 4, product: "Gapage", quantity: "1kg" },
  { id: 3, product: "Chilly", quantity: "3kg" },
  { id: 5, product: "Oil", quantity: "1lt" },
];

// order.sort();
order.sort((a, b) => {
  aProduct = a.quantity;
  bProduct = b.quantity;

  if (aProduct - bProduct) {
    return -1;
  } else if (aProduct < bProduct) {
    return 1;
  } else {
    return 0;
  }
});

console.log(order);
console.log(
  "-----------------------------------------------------------------"
);

// let name = "Anand";
// let age = 24;

// let joinLine = `i am ${name} My age ${age}`;
// let finder = joinLine.split(" ");

// console.log(finder);

// finder.find( (e, i) => {
//     let n = e === "Anand" ? "yes" : "no";
//     console.log(i, n);
// });

let testXx = [
  { id: 1, product: "Onion", quantity: "1kg" },
  { id: 3, product: "Chilly", quantity: "3kg" },
  { id: 2, product: "Tomoto", quantity: "0.5kg" },
  { id: 5, product: "Suger", quantity: "0.6kg" },
  { id: 4, product: "Gapage", quantity: "1kg" },
];

// console.log(testXx);

testXx.sort();
let testKk = testXx.map((fal, i) => {
  let value1 = [i, fal.id, fal.product].join(" = ");
  return value1;
});
console.log("Jo join :", testKk);
// testXx.every();
// testXx.some();

// testXx.map();

// let filler = testXx.filter((a) => {
//   return a.quantity < "1kg"
// });
// console.log("Filter Qty", filler);

console.log("..............  *  ..............  *  ..............");

let reVision = [
  { id: 1, product: "veppen Co", price: 80 },
  { id: 2, product: "veppen ha", price: 50 },
  { id: 3, product: "veppen ci", price: 18 },
  { id: 4, product: "veppen al", price: 180 },
];

const nNumb = [87, 65, 987, 542, 657];
const asNum = [2, 1, 4, 3, 5];

let papa = reVision.reduce( (pre, cur) => {
  return pre + cur.price
}, 0);
console.log(papa);

// let mappI = nNumb.map((val) =>{
//   val.price + val.id
// });

// console.log(mappI);
// let num = asNum.sort((a, b) => {
//   return a < b;
// });
// let numb = reVision
//   .sort((a, b) => {
//     let one = a.price;
//     let wo = b.price;

//     if (one < wo) {
//       return -1;
//     } else if (one > wo) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
//   .filter((val) => {
//     return val.price < 80;
//   })
//   .map((i) => {
//     let lk = `${i.product} + ${i.price}`;
//     return lk
//   });
// let oyyy = numb.join(" - ");

// console.log(num);
// console.log(oyyy);


$lio = reVision.forEach(function(i) {
  return i.price
});

console.log($lio);


// Function Declaration
let jX = 40;
let jXx = 98;

console.log("Declaration:", myFunction_fn());
function myFunction_fn() {
  return jX + jXx;
}

// Imediate Inviking Function Expression

(function(...fgt) { // Rest Operator( Rest Perametor )
  console.log(fgt);
  let x = 0;
  for( let i of fgt) {
    x += i;
  };
  console.log(x);
})(5,7,4,2,3,5,7,4,3,22,6);


// getter & Settter

const iqu = {
  fName : "anand",
  lName : "Kumar",
  get flName() {
    return `${this.fName} ${this.lName}`
  },
  set flName(update) {
    let iaq = update.split(" ");
    console.log(iaq[1]);
    this.fName = iaq[0] || "";
    this.lName = iaq[1] || ""; 
  }
};

iqu.flName = "Naan"

console.log("return Nmae: ", iqu.flName);


function fhdfgd(hh) {
  this.uefhu = hh;
  console.log(this);
};

const jo = new fhdfgd("oo");

console.log(jo);