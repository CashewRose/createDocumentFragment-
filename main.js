const fragment = document.createDocumentFragment();
const base = document.querySelector("#messages");

const sec1 = document.createElement("section");
sec1.textContent = "First section";
sec1.classList = "message";

const sec2 = document.createElement("section");
sec2.textContent = "Second section";
sec2.classList = "message";

const sec3 = document.createElement("section");
sec3.textContent = "Third section";
sec3.classList = "message";

const sec4 = document.createElement("section");
sec4.textContent = "Fourth section";
sec4.classList = "message";

const sec5 = document.createElement("section");
sec5.textContent = "Fifth section";
sec5.classList = "message";

fragment.appendChild(sec1);
fragment.appendChild(sec2);
fragment.appendChild(sec3);
fragment.appendChild(sec4);
fragment.appendChild(sec5);

base.appendChild(fragment);

