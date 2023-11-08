// CRUD

// CREATE
const element = document.createElement("div");
element.setAttribute("class", "box blue");
element.textContent = "D";
console.log("element", element);
// Läs in parent för att lägga till nya elementet
const col1 = document.getElementById("col1");
col1.appendChild(element);

// CREATE MED ARRAY
const moreBlue = ["E", "F", "G"];
moreBlue.forEach((boxLetter) => {
  const element = document.createElement("div");
  element.setAttribute("class", "box blue textWhite");
  element.textContent = boxLetter;

  col1.appendChild(element);
});

// READ
// getElementById, getElementsByClassName, querySelector
const boxA = document.getElementById("A");
console.log("A", boxA);

const heading = document.getElementsByClassName("heading");
console.log(heading);

// heading.textContent = "hej";

const boxes = document.getElementsByClassName("box");
console.log(boxes);

const boxE = document.querySelector("#E");
console.log("boxE", boxE);

const redBoxes = document.querySelectorAll(".red");
console.log("redBoxes", redBoxes);

// UPDATE
const blueBoxes = document.querySelectorAll(".blue");
blueBoxes.forEach((blueBox) => {
  blueBox.innerHTML = `<h2>${blueBox.innerHTML}</h2>`;
});
