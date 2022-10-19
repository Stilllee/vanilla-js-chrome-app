const clockTitle = document.querySelector(".js-clock");

function dDaySet() {
  const today = new Date();
  const x_mas = new Date("2022-12-25T00:00:00"); 
  const remainDate = x_mas - today;

  const dDay = Math.floor(remainDate / (1000 * 60 * 60 * 24));
  const dHour = Math.floor((remainDate / (1000 * 60 * 60)) % 24);
  const dMin = Math.floor((remainDate / (1000 * 60)) % 60);
  const dSec = Math.floor((remainDate / 1000) % 60);

  const d = String(dDay).padStart(2, "0");
  const h = String(dHour).padStart(2, "0");
  const m = String(dMin).padStart(2, "0");
  const s = String(dSec).padStart(2, "0");

  clockTitle.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

dDaySet();
setInterval(dDaySet, 1000)

