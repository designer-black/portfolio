

let name = "Anand";
let age = 24;

let joinLine = "My Name " + Name + " My age is";

console.log( joinLine );

// Object

let personal_detail = {
    name: "Anand",
    age: 24,
    siblings: {
        sister: 4,
        brother: 2
    },
};
personal_detail['name'] = '30';
console.log(typeof(personal_detail['name']));

// Array concept

let favColors = ["red", "green"];

favColors.push(1,5,6,7,8)
favColors[8] = "yellow";

console.log(favColors);

// function

function myFunction( Number, Number2 ) {
    // return Number + Number2;
    console.log(Number + Number2);
};

myFunction(2,4);