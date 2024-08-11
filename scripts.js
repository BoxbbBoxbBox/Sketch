const container = document.querySelector(".container");
let userInput = 10;
let userCalculated = userInput ** 2;

function addDivs(userCalculated) {
for (let i = 0; i < userCalculated; i++) {
    const div = document.createElement("div");
    container.append(div);
    div.classList.add("square");
    console.log(div);
}
}

addDivs(userCalculated);

const allSquares = document.querySelectorAll(".square");
for (let i = 0; i < userCalculated; i++) {
    allSquares[i].style.flexBasis = 960 / userCalculated * userInput + "px";
    allSquares[i].style.height = 960 / userCalculated * userInput + "px";
}

