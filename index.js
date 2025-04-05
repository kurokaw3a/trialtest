const section = document.getElementById("section");

const section_item_list = [
  {
    id:0,
    title: "ПРОБНЫЙ ТЕСТ с testing.kg",
  },
  {
    id: 18,
    title: "ЦООМО 18",
  },
  {
    id: 19,
    title: "ЦООМО 19",
  },
  // {
  //   id: 20,
  //   title: "ЦООМО 20",
  // },
  // {
  //   id: 21,
  //   title: "ЦООМО 21",
  // },
];

section_item_list.map((item) => {
  const section_item = document.createElement("div");
  const section_item_button = document.createElement("button");
  const section_item_logo = document.createElement("img");
  const section_item_title = document.createElement("h2");

  section_item.appendChild(section_item_logo);
  section_item.appendChild(section_item_title);
  section_item.appendChild(section_item_button);

  section_item.classList.add("section_item");
  section_item.setAttribute("id", `section_item_${item.id}`);
  section_item_button.classList.add("section_item_button");
  section_item_button.setAttribute("id", "section_item_button");
  section_item_logo.setAttribute(
    "src",
    "./assets/coomo_logo.e1e09338dc05a935d4ca5ba8981ca1fe.svg"
  );
  section_item_logo.setAttribute("alt", "");
  section_item_logo.classList.add("section_item_logo");
  section_item_title.setAttribute("id", "section_item_title");
  section_item_title.classList.add("section_item_title");

  section_item_title.innerText = item.title;
  section_item_button.innerText = "Начать тест";

  section.appendChild(section_item);
});

const section_item_button = document.querySelectorAll(".section_item_button");
section_item_button.forEach((button) => {
  button.addEventListener("click", (e) => {
    const section_item = e.target.parentElement;
    const id = section_item.getAttribute("id").split("_")[2];
    const title = section_item.querySelector("#section_item_title").innerText;
    console.log(id, title);
    window.location.href = `./test/ceatm${id}.html`;
  });
});

//   window.location.href = `./section.html?id=${id}&title=${title}`;
