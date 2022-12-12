import { GET, DELETE, PATCH, POST } from "./utils.js";

const url = "https://jsonplaceholder.typicode.com/users";

const cards_container = document.querySelector(".cards_container");
const btnAe = document.querySelector(".first");
const btnFl = document.querySelector(".second");
const btnMz = document.querySelector(".third");
const btnAll = document.querySelector(".fourth");

const arrayAE = ["A", "B", "C", "D", "E"];
const arrayFL = ["F", "G", "H", "I", "J", "K", "L"];
const arrayMZ = [
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

GET(url).then((res) => res.map((data) => create_card(data)));

btnAe.addEventListener("click", () => {
  cards_container.replaceChildren();
  GET(url).then((res) =>
    res.filter((data) => {
      if (
        data.name[0] == arrayAE[0] ||
        data.name[0] == arrayAE[1] ||
        data.name[0] == arrayAE[2] ||
        data.name[0] == arrayAE[3] ||
        data.name[0] == arrayAE[4]
      ) {
        create_card(data);
      }
    })
  );
});

btnFl.addEventListener("click", () => {
  cards_container.replaceChildren();
  GET(url).then((res) =>
    res.filter((data) => {
      if (
        data.name[0] == arrayFL[0] ||
        data.name[0] == arrayFL[1] ||
        data.name[0] == arrayFL[2] ||
        data.name[0] == arrayFL[3] ||
        data.name[0] == arrayFL[4] ||
        data.name[0] == arrayFL[5] ||
        data.name[0] == arrayFL[6]
      ) {
        create_card(data);
      }
    })
  );
});

btnMz.addEventListener("click", () => {
  cards_container.replaceChildren();
  GET(url).then((res) =>
    res.filter((data) => {
      if (
        data.name[0] == arrayMZ[0] ||
        data.name[0] == arrayMZ[1] ||
        data.name[0] == arrayMZ[2] ||
        data.name[0] == arrayMZ[3] ||
        data.name[0] == arrayMZ[4] ||
        data.name[0] == arrayMZ[5] ||
        data.name[0] == arrayMZ[6] ||
        data.name[0] == arrayMZ[7] ||
        data.name[0] == arrayMZ[8] ||
        data.name[0] == arrayMZ[9] ||
        data.name[0] == arrayMZ[10] ||
        data.name[0] == arrayMZ[11] ||
        data.name[0] == arrayMZ[12] ||
        data.name[0] == arrayMZ[13]
      ) {
        create_card(data);
      }
    })
  );
});

btnAll.addEventListener("click", () => {
  cards_container.replaceChildren();
  GET(url).then((res) => res.map((data) => create_card(data)));
});

const create_card = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  const name = document.createElement("h4");
  const email = document.createElement("h4");
  const number = document.createElement("h4");
  const address = document.createElement("p");
  const imgUrl = `https://randomuser.me/api/portraits/women/${data.id}.jpg`;

  image.src = imgUrl;
  name.textContent = "🆔 " + data.name;
  email.textContent = "📧 " + data.email;
  number.textContent = "📞 " + data.phone;
  address.textContent = `🏠 ${data.address.street} - ${data.address.suite} - ${data.address.city}`;
  // Ho provato a separare i tre pezzi dell'address con  \n  ma non manda a capo

  card.append(image, name, email, number, address);
  cards_container.append(card);
};
