const fragment = document.createDocumentFragment();
const base = document.querySelector("#messages");

const sec1 = document.createElement("section");
sec1.textContent = "My parents are out of town tonight. Should I throw a wild part, or do what I normally do?";
sec1.classList = "message";

const sec2 = document.createElement("section");
sec2.textContent = "Which is...?";
sec2.classList = "message";

const sec3 = document.createElement("section");
sec3.textContent = "Dancing around the house in my underwear while singing peanut butter jelly time and smearing condiments all over my body.";
sec3.classList = "message";

const sec4 = document.createElement("section");
sec4.textContent = "No contest, shake that jelly!";
sec4.classList = "message";

const sec5 = document.createElement("section");
sec5.textContent = "I knew it!";
sec5.classList = "message";

fragment.appendChild(sec1);
fragment.appendChild(sec2);
fragment.appendChild(sec3);
fragment.appendChild(sec4);
fragment.appendChild(sec5);

base.appendChild(fragment);

