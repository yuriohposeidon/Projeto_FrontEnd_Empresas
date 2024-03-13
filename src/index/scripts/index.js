import { getAllCompanies, getAllDepartaments } from "../scripts/request.js";


/* ------------------------------- Function Replace Login ------------------------------- */

function replaceLogin() {
  const loginButton = document.querySelector(".login__header");
  loginButton.addEventListener("click", (event) => {
    window.location.replace("./src/login/login.html");
  });
}
replaceLogin();


/* ------------------------------- Function replace Register ------------------------------- */

function replaceRegister() {
    const registerButton = document.querySelector(".register__header");
    registerButton.addEventListener("click", (event) => {
      window.location.replace("./src/register/register.html");
    });
  }
replaceRegister()


/* ------------------------------- Function Render Options  ------------------------------- */

async function createOption() {
  const departaments = await getAllDepartaments();
  const select = document.getElementById("sector__select");

  departaments.map((element) => {
    const name = document.createElement("option");
    name.innerText = element.description;
    select.appendChild(name);
  });
}
createOption();


/* ------------------------------- Function Render All Options When you open the page ------------------------------- */

async function rendering() {
  const allCompanies = await getAllCompanies();
  const list = document.querySelector(".companie__container");
  list.innerHTML = "";

  allCompanies.forEach((element) => {
    const card = createCard(element);

    list.append(card);
  });
}
rendering();


/* ------------------------------- Function Filter CompanieS for Options  ------------------------------- */

function filterCompanie() {
  const selectFilter = document.querySelector("#sector__select");
  selectFilter.addEventListener("change", async (event) => {
    const allCompanies = await getAllCompanies();
    let companieFilter = 0;
    if (event.target.value == "Todos") {
      companieFilter = [...allCompanies];
    } else {
      companieFilter = allCompanies.filter((companie) => {
        return companie.sectors.description == event.target.value;
      });
    }
    // const companieFilter = allCompanies.filter((companie)=> {

    //     return companie.sectors.description == event.target.value
    // })
    const list = document.querySelector(".companie__container");
    list.innerHTML = "";

    companieFilter.forEach((element) => {
      const card = createCard(element);

      list.append(card);
    });
  });
}
filterCompanie();


/* ------------------------------- Function Crete Card  ------------------------------- */

function createCard(element) {
  const li = document.createElement("li");
  const name = document.createElement("span");
  const time = document.createElement("span");
  const sector = document.createElement("span");

  li.classList.add("companies__vacancies");

  name.classList.add("companie__name");
  name.innerText = element.name;

  time.classList.add("time");
  time.innerText = element.opening_hours;

  sector.classList.add("sector");
  sector.innerText = element.sectors.description;

  li.append(name, time, sector);

  return li;
}



/* ------------------------------- Function Menu Hamburguer  ------------------------------- */

const buttonMobile = document.querySelector(".button__hidden");

function toggleMenu() {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("hidden");
}

buttonMobile.addEventListener("click", toggleMenu);


/* ------------------------------- Function   ------------------------------- */
