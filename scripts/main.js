const input = document.querySelector("input");
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

let inputValue;
const divs = [];

let width = 30;
let height = 30;

input.addEventListener("input", getAmount);
function getAmount(event) {
  return (inputValue = event.currentTarget.value);
}

renderButton.addEventListener("click", create);
function create(event) {
  createBoxes(inputValue);
}

destroyButton.addEventListener("click", destroy);
function destroy(event) {
  divs.length = 0;
  width = 30;
  height = 30;
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

function createBoxes(amount) {
  let i = 0;

  while (i < amount) {
    let div = document.createElement("div");

    const red = getRandomColor(255);
    const green = getRandomColor(255);
    const blue = getRandomColor(255);
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    div.style.width = width + "px";
    div.style.height = height + "px";
    width += 10;
    height += 10;

    console.log(div);
    divs.push(div);
    console.log(divs);
    i++;
  }
  boxes.append(...divs);
}

function getRandomColor(max) {
  return Math.floor(Math.random() * max);
}
