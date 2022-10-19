const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const body = document.body;
const btn = document.querySelector("button");

function btnClick() {
  const firstColor = colors[(Math.floor(Math.random() * colors.length))];
  const remainderColors = colors.filter(color => color !== firstColor);
  const secondColor = remainderColors[(Math.floor(Math.random() * colors.length))];
  body.style.backgroundImage = `linear-gradient(0.25turn, ${firstColor}, ${secondColor}`;
  btn.style.color = "white";
};

btn.addEventListener("click", btnClick);


