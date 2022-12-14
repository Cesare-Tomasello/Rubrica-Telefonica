import { GET, DELETE, PATCH, POST } from "./utils.js";

// Gli url
const url = "https://jsonplaceholder.typicode.com/users";
const dbUrl = "http://localhost:3000/rubrica";

// Le costanti
const body = document.querySelector("body");
const cards_container = document.querySelector(".cards_container");
const btnAe = document.querySelector(".first");
const btnFl = document.querySelector(".second");
const btnMz = document.querySelector(".third");
const btnAll = document.querySelector(".fourth");
const btnNew = document.querySelector(".fifth");
const save_form = document.querySelector(".save_form");
const close_form = document.querySelector(".close_form");
const add_form = document.querySelector(".add_form");

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

// Form per aggiungere un contatto
save_form.addEventListener("click", () => {
  const data = {
    nome: add_form.nome.value,
    numero: add_form.numero.value,
    email: add_form.email.value,
    indirizzo: add_form.indirizzo.value,
    sesso: add_form.sesso.value.toLowerCase(),
  };

  POST(dbUrl, data);
});

// Get dai diversi database
GET(dbUrl).then((res) => res.map((data) => new_card(data)));
GET(url).then((res) => res.map((data) => create_card(data)));

// Tutti i bottoni e gli eventListener
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

  GET(dbUrl).then((res) =>
    res.filter((data) => {
      if (
        data.nome[0] == arrayAE[0] ||
        data.nome[0] == arrayAE[1] ||
        data.nome[0] == arrayAE[2] ||
        data.nome[0] == arrayAE[3] ||
        data.nome[0] == arrayAE[4]
      ) {
        new_card(data);
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

  GET(dbUrl).then((res) =>
    res.filter((data) => {
      if (
        data.nome[0] == arrayFL[0] ||
        data.nome[0] == arrayFL[1] ||
        data.nome[0] == arrayFL[2] ||
        data.nome[0] == arrayFL[3] ||
        data.nome[0] == arrayFL[4] ||
        data.nome[0] == arrayFL[5] ||
        data.nome[0] == arrayFL[6]
      ) {
        new_card(data);
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

  GET(dbUrl).then((res) =>
    res.filter((data) => {
      if (
        data.nome[0] == arrayMZ[0] ||
        data.nome[0] == arrayMZ[1] ||
        data.nome[0] == arrayMZ[2] ||
        data.nome[0] == arrayMZ[3] ||
        data.nome[0] == arrayMZ[4] ||
        data.nome[0] == arrayMZ[5] ||
        data.nome[0] == arrayMZ[6] ||
        data.nome[0] == arrayMZ[7] ||
        data.nome[0] == arrayMZ[8] ||
        data.nome[0] == arrayMZ[9] ||
        data.nome[0] == arrayMZ[10] ||
        data.nome[0] == arrayMZ[11] ||
        data.nome[0] == arrayMZ[12] ||
        data.nome[0] == arrayMZ[13]
      ) {
        new_card(data);
      }
    })
  );
});

btnAll.addEventListener("click", () => {
  cards_container.replaceChildren();
  GET(url).then((res) => res.map((data) => create_card(data)));
  GET(dbUrl).then((res) => res.map((data) => new_card(data)));
});

btnNew.addEventListener("click", () => {
  add_form.classList.toggle("show_form");
  body.classList.toggle("scrollBlock");
});

close_form.addEventListener("click", (e) => {
  e.preventDefault();
  add_form.classList.toggle("show_form");
  add_form.nome.value = "";
  add_form.numero.value = "";
  add_form.email.value = "";
  add_form.indirizzo.value = "";
  body.classList.toggle("scrollBlock");
});

// Le funzioni che creano le card dai diversi url
const create_card = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgUrl = `https://randomuser.me/api/portraits/women/${data.id}.jpg`;

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");

  const moreInfoDiv = document.createElement("div");
  moreInfoDiv.classList.add("moreInfoDiv");

  const image = document.createElement("img");
  const name = document.createElement("h4");
  const number = document.createElement("h4");
  const moreInfoBtn = document.createElement("i");
  const mail = document.createElement("h4");
  const address = document.createElement("h4");
  const moreInfoModal = document.createElement("div");
  moreInfoModal.classList.add("moreInfoModal");
  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fa-solid fa-trash-can deleteBtn";

  image.src = imgUrl;
  name.textContent = "🆔 " + data.name;
  number.textContent = "📞 " + data.phone;
  mail.textContent = "✉️ " + data.email;
  address.textContent = "🏠 " + data.address.city;
  moreInfoBtn.className = "fa-solid fa-circle-info moreInfoBtn";

  moreInfoModal.append(mail, address);
  moreInfoDiv.append(moreInfoBtn, deleteBtn);
  infoDiv.append(name, number);
  card.append(image, infoDiv, moreInfoModal, moreInfoDiv);
  cards_container.append(card);

  moreInfoBtn.addEventListener("click", () => {
    moreInfoModal.classList.toggle("showModal");
    infoDiv.classList.toggle("hideInfo");
  });

  deleteBtn.addEventListener("click", () => {
    card.style.display = "none";
  });
};

const new_card = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const maleImg = `https://randomuser.me/api/portraits/men/${data.id}.jpg`;
  const femaleImg = `https://randomuser.me/api/portraits/women/${data.id}.jpg`;
  const elseImg = `https://randomuser.me/api/portraits/lego/${data.id}.jpg`;

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");

  const moreInfoDiv = document.createElement("div");
  moreInfoDiv.classList.add("moreInfoDiv");

  const image = document.createElement("img");
  const name = document.createElement("h4");
  const number = document.createElement("h4");
  const moreInfoBtn = document.createElement("i");
  const mail = document.createElement("h4");
  const address = document.createElement("h4");
  const moreInfoModal = document.createElement("div");
  moreInfoModal.classList.add("moreInfoModal");
  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fa-solid fa-trash-can deleteBtn";

  if (data.sesso === "uomo") {
    image.src = maleImg;
  } else if (data.sesso === "donna") {
    image.src = femaleImg;
  } else {
    image.src = elseImg;
  }

  name.textContent = "🆔 " + data.nome;
  number.textContent = "📞 " + data.numero;
  mail.textContent = "✉️ " + data.email;
  address.textContent = "🏠 " + data.indirizzo;
  moreInfoBtn.className = "fa-solid fa-circle-info moreInfoBtn";

  moreInfoModal.append(mail, address);
  moreInfoDiv.append(moreInfoBtn, deleteBtn);
  infoDiv.append(name, number);
  card.append(image, infoDiv, moreInfoModal, moreInfoDiv);
  cards_container.append(card);

  moreInfoBtn.addEventListener("click", () => {
    moreInfoModal.classList.toggle("showModal");
    infoDiv.classList.toggle("hideInfo");
  });

  deleteBtn.addEventListener("click", () => {
    DELETE(dbUrl, data.id);
  });
};
