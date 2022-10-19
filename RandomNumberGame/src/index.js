const form = document.getElementById("select_num");
const button = document.getElementById("button");
const guess = document.getElementById("guess");
const generate = document.getElementById("generate");
const choose = document.getElementById("choose_num");

function maxNum() {
  guess.max = generate.value;
  if(guess.value > guess.max){
    button.classList.add("hidden");
    alert("범위 밖의 숫자입니다.");
  } else {
    button.classList.remove("hidden");
  }
}

generate.addEventListener("change", maxNum)
guess.addEventListener("blur", maxNum)

function playSubmit(event) {
  event.preventDefault();
  const maxNum = parseInt(generate.value);
  const guessNum = parseInt(guess.value);
  const machineNum = Math.floor(Math.random() * (maxNum + 1));
  choose.innerText = `You chose: ${guessNum}, the machine chose: ${machineNum}`;

  if(guessNum === machineNum){
    result.innerText = "YOU WIN! :)";
    result.style.color = "#00A1D2";
  } else {
    result.innerText = "YOU LOSE.. :(";
    result.style.color = "#EA4335";
  } 
}

form.addEventListener("submit", playSubmit);