// This javascript creates a board that changes colors in the order of the rainbow:
// Red, Orange, Green, Blue, Indigo, Violet (and back to white)
// To change the colors that toggle, simply adjust the classes in style.css

const container = document.querySelector(".container");
let userInput = 10;
let userCalculated = userInput ** 2;

// This adds the initial squares

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

// This sizes the squares and provides their initial styling

let allSquares = document.querySelectorAll(".square");
function sizeSquares() {
    for (let i = 0; i < userCalculated; i++) {
    allSquares[i].style.flexBasis = 960 / userCalculated * userInput + "px";
    allSquares[i].style.height = 960 / userCalculated * userInput + "px";
    allSquares[i].textContent += "a";
}
}
sizeSquares();

// This adds functionality to the button, so that user can choose the number of squares

const button = document.querySelector(".size");
button.addEventListener("click", function() {
    const size = Number(prompt("Choose a positive integer up to 100. This will be the length of a row."));
    if (Number.isInteger(size) && size < 101 && size > 0) {
        removeDivs();
        userInput = size;
        userCalculated = userInput ** 2;
        // console.log(userCalculated);
        addDivs(userCalculated);
        let allSquares = document.querySelectorAll(".square");
        function sizeSquares() {
            for (let i = 0; i < userCalculated; i++) {
            allSquares[i].style.flexBasis = 960 / userCalculated * userInput + "px";
            allSquares[i].style.height = 960 / userCalculated * userInput + "px";
            allSquares[i].textContent += "a";
        }
        }
        sizeSquares();
        for (let i = 0; i < userCalculated; i++) {
            allSquares[i].onmouseenter = function() {mouseEnter()};
            function mouseEnter() {
                switch(allSquares[i].textContent) {
                    case "a":
                    allSquares[i].textContent = "b";
                    allSquares[i].classList.add("b");
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
    } else {
        alert("Error");
        console.log(size);
    };
}
)

// This defines the function that removes the old squares, before new ones are added on.

function removeDivs() {
    const child = document.querySelector(".square");
        while (container.firstChild) {
        container.removeChild(container.firstChild);
        }
}

// This switch toggles the class, and therefore color, of each square. I had to copy-paste it into my button functionality because I don't know what I'm doing.

for (let i = 0; i < userCalculated; i++) {
    allSquares[i].onmouseenter = function() {mouseEnter()};
    function mouseEnter() {
        switch(allSquares[i].textContent) {
            case "a":
            allSquares[i].textContent = "b";
            allSquares[i].classList.add("b");
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