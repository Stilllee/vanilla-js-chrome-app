const body = document.querySelector("body");
const hello = document.createElement("h1");

hello.innerText = "Hello!";
body.appendChild(hello);

function resizeHandler() {
  const width = window.innerWidth;
  if (width < 550) {
    body.classList.add("small");
    body.classList.remove("middle");
    body.classList.remove("big");
  } else if (width >= 550 && width <=1000) {
    body.classList.remove("small");
    body.classList.remove("big");
    body.classList.add("middle");
  } else if (width > 1000) {
    body.classList.remove("small");
    body.classList.remove("middle");
    body.classList.add("big");
  }
}

window.addEventListener("resize", resizeHandler);


