let clockInterval;
let stopwatchInterval;
let timer = false;

function updateTime() {
  var date = new Date();
  const hourElem = document.querySelector(".hour");
  const minElem = document.querySelector(".min");
  const secElem = document.querySelector(".sec");
  var session = "AM";
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hours >= 12) {
    session = "PM";
    if (hours > 12) {
      hours = hours - 12;
    }
  } else if (hours === 0) {
    hours = 12;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  hourElem.innerHTML = h;
  minElem.innerHTML = m;
  secElem.innerHTML = s + "" + " " + "" + "[" + session + "]";
}
updateTime();

clockInterval = setInterval(updateTime, 1000);

var clock = document.querySelector(".normal-clock");
var stopBtn = document.querySelector(".stopwatch1");
clock.style.display = "none";
var stopElem = document.querySelector(".stop-cont");
stopElem.style.display = "none";

function normalClock() {
  var h1 = document.querySelector(".clock-h1");
  h1.innerHTML = "Clock";
  var stopElem = document.querySelector(".stop-cont");
  stopElem.style.display = "none";
  var stopBtn = document.querySelector(".stopwatch1");
  stopBtn.style.display = "block";
  clock.style.display = "none";
  clockInterval = setInterval(updateTime, 1000);
  clearInterval(stopwatchInterval);
}

function stopWatch() {
  clearInterval(clockInterval);
  stopBtn.style.display = "none";
  clock.style.display = "block";
  var h1 = document.querySelector(".clock-h1");
  h1.innerHTML = "Stop Watch";
  stopElem.style.display = "block";

  const hourElem = document.querySelector(".hour");
  const minElem = document.querySelector(".min");
  const secElem = document.querySelector(".sec");
  hourElem.innerHTML = "00";
  minElem.innerHTML = "00";
  secElem.innerHTML = "00";
}

let sec = 0;
let hour = 0;
let min = 0;

function startWatch() {
  if (timer) {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }

    document.querySelector(".hour").textContent = String(hour).padStart(2, "0");
    document.querySelector(".min").textContent = String(min).padStart(2, "0");
    document.querySelector(".sec").textContent = String(sec).padStart(2, "0");
    stopwatchInterval = setTimeout(startWatch, 1000);
  }
}

document.getElementById("start").addEventListener("click", function () {
  if (!timer) {
    timer = true;
    startWatch();
  }
});

document.getElementById("pause").addEventListener("click", function () {
  timer = false;
  startWatch();
});
document.getElementById("reset").addEventListener("click", function () {
  const hourElem = document.querySelector(".hour");
  const minElem = document.querySelector(".min");
  const secElem = document.querySelector(".sec");
  hourElem.innerHTML = "00";
  minElem.innerHTML = "00";
  secElem.innerHTML = "00";
  sec = 0;
  hour = 0;
  min = 0;
  timer = false;
  clearTimeout(stopwatchInterval);
});
