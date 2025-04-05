const timer = document.querySelector("#timer");
const section = document.querySelector("#section");
const math = document.getElementById("math");
const adp = document.getElementById("adp");
const russian = document.getElementById("russian");

const timerLabel = document.createElement("label");
timerLabel.classList.add("timerLabel");
timerLabel.innerText = "3:35:00";

const timerInput = document.createElement("input");
timerInput.classList.add("timerInput");

let interval = null;

let adpText = "АДП,ЧП →";
let russianText = "ПГР →";

const endMath = () => {
  math.style.pointerEvents = "none";
  math.style.opacity = "0.5";
  adp.style.opacity = "1";
  adp.style.pointerEvents = "all";
  endTestButton.innerText = russianText;
};

const endAdp = () => {
  adp.style.opacity = "0.5";
  adp.style.pointerEvents = "none";
  russian.style.opacity = "1";
  russian.style.pointerEvents = "all";
  endTestButton.innerText = "Завершить тест";
};

const timerFunction = (count) => {
  timerInput.type = "number";
  timerInput.value = count;
  timerInput.setAttribute("id", "timerInput");

  const timerInputValue = document.querySelector("#timerInput");
  let timerValue = timerInputValue.value;

  const secondsToMinutes = Math.floor(timerValue / 60);
  const minutesToHours = Math.floor(secondsToMinutes / 60);
  const minutes = Math.floor(secondsToMinutes % 60);
  const seconds = Math.floor(timerValue % 60);
  timerLabel.innerText = `${minutesToHours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;

  interval = setInterval(() => {
    if (timerValue > 0) {
      timerValue--;
      if (timerValue <= 5400) {
        endMath();
      }
      if (timerValue <= 2100) {
        endAdp();
      }
      timerInputValue.value = timerValue;
      const secondsToMinutes = Math.floor(timerValue / 60);
      const minutesToHours = Math.floor(secondsToMinutes / 60);
      const minutes = Math.floor(secondsToMinutes % 60);
      const seconds = Math.floor(timerValue % 60);

      timerLabel.innerText = `${minutesToHours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`;
    } else {
      const form = document.getElementById("form");
      timerLabel.innerText = "00:00:00";
      clearInterval(timerValue);
      form.style.pointerEvents = "none";
      form.style.opacity = "0.5";
      endTestButton.style.pointerEvents = "none";
      endTestButton.style.opacity = "0.5";
    }
  }, 1000);
};

timer.appendChild(timerInput);
timer.appendChild(timerLabel);

const endTestButton = document.getElementById("button");

const endTest = (e) => {
  if (interval) {
    e.preventDefault();
    const container = document.getElementById("container");

    container.style.pointerEvents = "none";
    container.style.opacity = "0.5";
    clearInterval(interval);
    endTestButton.style.pointerEvents = "none";
    endTestButton.style.opacity = "0.5";

    calculateAnswers();

    timerState = false;
  } else if (!interval) {
    endTestButton.innerText = adpText;
    math.style.opacity = "1";
    math.style.pointerEvents = "all";
    timerFunction(12900);
    timerState = true;
  }
};

endTestButton.addEventListener("click", (e) => {
  if (endTestButton.innerText === adpText) {
    clearInterval(interval);
    timerFunction(5400);
    endMath();
  } else if (endTestButton.innerText === russianText) {
    clearInterval(interval);
    timerFunction(2100);
    endAdp();
  } else if (
    endTestButton.innerText === "Завершить тест" ||
    endTestButton.innerText === "Начать тест"
  ) {
    endTest(e);
  }
});
