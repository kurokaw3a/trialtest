const main = document.querySelector("#section");

const container = document.createElement("div");
container.classList.add("container");
container.setAttribute("id", "container");

const form = document.createElement("form");
form.classList.add("form");
form.setAttribute("id", "form");

function testFunction({ count, variantsCount, variant }) {
  const abcd = ["А", "Б", "В", "Г", "Д"];

  const div = document.createElement("div");
  div.classList.add("div");
  div.setAttribute("id", variant);

  const labelDiv = document.createElement("div");
  labelDiv.classList.add("labelDiv");

  for (let j = 0; j < count; j++) {
    const numberLabel = document.createElement("label");
    numberLabel.classList.add("numberLabel");
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkboxDiv");
    const label = document.createElement("label");
    label.classList.add("label");

    if (j < variantsCount) {
      label.innerText = abcd[j];
      labelDiv.appendChild(label);
    }

    numberLabel.classList.add("numberLabel");

    numberLabel.innerText = j + 1;

    checkboxDiv.appendChild(numberLabel);

    div.prepend(labelDiv);
    for (let k = 0; k < variantsCount; k++) {
      const checkbox = document.createElement("input");
      checkbox.classList.add("checkbox");
      checkbox.setAttribute("name", `${j + 1}`);
      checkbox.setAttribute("id", `checkbox${k + 1}`);
      checkbox.setAttribute("value", `${k + 1}`);
      checkbox.type = "checkbox";

      checkboxDiv.appendChild(checkbox);
      div.appendChild(checkboxDiv);
    }

    container.appendChild(div);
  }
  form.appendChild(container);
  main.appendChild(form);
}

if (window.location.href.includes("ceatm")) {
  testFunction({ count: 60, variantsCount: 5, variant: "math" });
  testFunction({ count: 60, variantsCount: 4, variant: "adp" });
  testFunction({ count: 30, variantsCount: 4, variant: "russian" });
}

const checkbox = document.querySelectorAll(".checkbox");

const selected = {
  math: [],
  russian1: [],
  russian2: [],
};

checkbox.forEach((item) => {
  item.addEventListener("click", (e) => {
    const checkboxDiv = e.target.closest(".checkboxDiv");
    const checkboxes = checkboxDiv.querySelectorAll(".checkbox");

    checkboxes.forEach((item) => {
      if (item !== e.target) {
        item.checked = false;
        item.style.pointerEvents = "none";
        e.target.style.pointerEvents = "none";
        item.style.opacity = "0.5";
      }
    });

    if (e.target.checked) {
      const number = e.target.name;
      const value = e.target.value;

      const mathDiv = document.getElementById("math");
      const adpDiv = document.getElementById("adp");
      const russianDiv = document.getElementById("russian");

      const object = {
        number,
        value,
      };

      if (mathDiv.style.opacity === "1") {
        selected.math.push(object);
      } else if (adpDiv.style.opacity === "1") {
        selected.russian1.push(object);
      } else if (russianDiv.style.opacity === "1") {
        selected.russian2.push(object);
      }
    }
  });
});

const pageleft = document.querySelector("#pageleft");
const pageright = document.querySelector("#pageright");
const pdf = document.querySelector("#pdf");

let page = 1;
let currentFile = 1;
let totalPage = 28;



if (window.location.href.includes("ceatm18")) {
  totalPage = 21;
  currentFile = 18;
}
if(window.location.href.includes("ceatm19")) {
  totalPage = 20;
  currentFile = 19;
}

pageleft.addEventListener("click", () => {
  console.log(page);
  if (page <= 1) {
    page = totalPage;
  } else {
    page--;
  }
  pdf.setAttribute("data", `../assets/ceatm${currentFile}.pdf#toolbar=0&page=${page}`);
});

pageright.addEventListener("click", () => {
  if (page >= totalPage) {
    page = 1;
  } else {
    page++;
  }
  pdf.setAttribute("data", `../assets/ceatm${currentFile}.pdf#toolbar=0&page=${page}`);
});
