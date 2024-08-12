const container = document.querySelector(".container");
let userInput = 10;
let userCalculated = userInput ** 2;

function addDivs(userCalculated) {
for (let i = 0; i < userCalculated; i++) {
    const div = document.createElement("div");
    container.append(div);
    div.classList.add("square");
    div.classList.add("a");
    // console.log(div);
}
}

addDivs(userCalculated);

const allSquares = document.querySelectorAll(".square");
for (let i = 0; i < userCalculated; i++) {
    allSquares[i].style.flexBasis = 960 / userCalculated * userInput + "px";
    allSquares[i].style.height = 960 / userCalculated * userInput + "px";
    allSquares[i].textContent += "a";
}

const Square1 = document.querySelector(".square");

for (let i = 0; i < userCalculated; i++) {
    allSquares[i].onmouseenter = function() {mouseEnter()};
    function mouseEnter() {
        switch(allSquares[i].textContent) {
            case "a":
            allSquares[i].textContent = "b";
            allSquares[i].classList.add("b");
            console.log(allSquares[i].textContent);
            break;
            case "b":
            allSquares[i].textContent = "c";
            allSquares[i].classList.add("c");
            break;
            case "c":
            allSquares[i].textContent = "d";
            allSquares[i].classList.add("d");
            break;
            case "d":
            allSquares[i].textContent = "e";
            allSquares[i].classList.add("e");
            break;
            case "e":
            allSquares[i].textContent = "f";
            allSquares[i].classList.add("f");
            break;
            case "f":
            allSquares[i].textContent = "g";
            allSquares[i].classList.add("g");
            break;
            case "g":
            allSquares[i].textContent = "h";
            allSquares[i].classList.add("h");
            break;
            case "h":
            allSquares[i].textContent = "a";
            allSquares[i].classList.remove("b");
            allSquares[i].classList.remove("c");
            allSquares[i].classList.remove("d");
            allSquares[i].classList.remove("e");
            allSquares[i].classList.remove("f");
            allSquares[i].classList.remove("g");
            allSquares[i].classList.remove("h");
            break;
            default: console.log("error");
        }
    }
}

// function mouseEnter() {
//     switch()
// }
