import { getUser, token } from "../../login/scripts/request.js";
import {
  searchLoggedEmpolyee,
  listAllEmployees,
  updateInformations
  
} from "./request.js";

/* ------------------------------- Function Autenticação de Rota  ------------------------------- */

function authentication() {
  const token = localStorage.getItem("@kenzieEmpresas:user");

  if (!token) {
    window.location.replace("../userDash.html");
  }
}
authentication();


/* ------------------------------- Function Replace Logout  ------------------------------- */

function logout() {
  const logoutButton = document.querySelector(".logout__header");
  logoutButton.addEventListener("click", (event) => {
    localStorage.clear();
    window.location.replace("../login/login.html");
  });
}
logout();

/* ------------------------------- Function Renderizar as informações do usuário   ------------------------------- */

export async function renderUser(id) {
  const token = getUser();
  const element = await searchLoggedEmpolyee(token);
  const username__container = document.querySelector(".username__container");
  username__container.innerHTML = ''
  
  const edition__container = document.createElement("div");
  const username = document.createElement("p");
  const edit__button = document.createElement("button");
  const username__profile = document.createElement("div");
  const email__registered = document.createElement("span");
  const level__professional = document.createElement("span");
  const type__office = document.createElement("span");

  username__container.classList.add("username__container");

  edition__container.classList.add("edition__container");

  username.classList.add("username");
  username.innerText = element.username;

  edit__button.classList.add("show__modal");
  edit__button.addEventListener('click', () => {

    const modal = document.querySelector(".modal__container");

    modal.innerHTML = "";

    modal.appendChild(createModal(element));

    modal.showModal();
    modal.classList.add(".show__modal");
    closeModal();
  })

  username__profile.classList.add("username__profile");

  email__registered.classList.add("email__registered");
  email__registered.innerText = element.email;

  level__professional.classList.add("level__professional");
  level__professional.innerText = element.professional_level;

  type__office.classList.add("type__office");
  type__office.innerText = element.kind_of_work;

  username__profile.append(
    email__registered,
    level__professional,
    type__office
  );
  edition__container.append(username, edit__button);
  username__container.append(username__profile, edition__container);
  modalEditUser()

  return username__container;
}
renderUser();


/* ------------------------------- Function Append de todos os funcionários   ------------------------------- */

export async function renderEmployees(first, array = []) {
  const card__container = document.querySelector(".card__container");
  const hire__container = document.querySelector(".hiring__container");
  const token = localStorage.getItem("@kenzieEmpresas:user");
  const user = await searchLoggedEmpolyee(token);

  card__container.innerHTML = "";
  const allEmployessList = await listAllEmployees(token);

  /* ------------------------------- condição: se tem funcionários renderizar, se não aparecer mensagem   ------------------------------- */

  if (allEmployessList[0]) {
    const coworkers = allEmployessList[0].users;
    coworkers.forEach((element) => {
      if (element.username !== user.username) {
        createCard(element);
      }
    });
  } else {
    hire__container.innerHTML = "";
    hire__container.insertAdjacentHTML(
      "afterbegin",
      `
    <span class="hire">Voce ainda não foi contratado</span>
    `
    );
  }
}

/* ------------------------------- Function Create Card de cada funcionário   ------------------------------- */

function createCard(element) {
  const card__list = document.createElement("li");
  const name__companion = document.createElement("span");
  const level__companion = document.createElement("span");
  const ul = document.querySelector(".card__container");
  card__list.classList.add("card__list");

  name__companion.classList.add("name__companion");
  name__companion.innerText = element.username;

  level__companion.classList.add("level__companion");
  level__companion.innerText = element.professional_level;

  card__list.append(name__companion, level__companion);
  ul.append(card__list);
  return card__list;
}
renderEmployees();

export function renderDepartament() {}

/* ------------------------------- Function Renderizar Nome da Empresa e o nome do Departamento do usuário logado   ------------------------------- */

// export async function nameDepartament() {
//   const departament = await listAllDepartaments(token);
// }
// nameDepartament();

/* ------------------------------- Function Append Modal Edita Informações do Usuario Logado   ------------------------------- */

export function modalEditUser() {
  const modal = document.querySelector(".modal__container");
  const button = document.querySelector(".show__modal");

  // button.addEventListener("click", () => {
  //   modal.innerHTML = "";
  //   modal.appendChild(createModalEdit());
    
  //   modal.showModal();
  //   closeModal();
  // });

}


/* ------------------------------- Function Create Modal Edita Informações do Usuario Logado   ------------------------------- */

function createModal(element) {
  
  const modal__form = document.createElement("form");
  const modal__title = document.createElement("h2");
  const input__text = document.createElement("input");
  const input__email = document.createElement("input");
  const input__password = document.createElement("input");
  const button__modal = document.createElement("button");
  const close__modal = document.createElement("button");

  modal__form.classList.add("modal__form");
  modal__form.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const data = {username: input__text.value, email: input__email.value, password: input__password.value}
    const token = localStorage.getItem("@kenzieEmpresas:user")
    await updateInformations(data)
    renderUser()
    const modal__container = document.querySelector('.modal__container')
    modal__container.close()
  })

  modal__title.classList.add("modal__title");
  modal__title.innerText = "Editar Perfil";

  input__text.classList.add("inputs");
  input__text.placeholder = "Seu nome";  
  input__text.value = element.username

  input__email.classList.add("inputs");
  input__email.placeholder = "Seu e-mail";
  input__email.type = 'email'

  input__email.value = element.email


  input__password.classList.add("inputs");
  input__password.placeholder = "Sua senha";
  input__password.type = 'password'

  button__modal.classList.add("button__modal");
  button__modal.innerText = "Editar Perfil";



  close__modal.classList.add("close__modal");
  close__modal.innerText = "X";

  modal__form.append(
    modal__title,
    input__text,
    input__email,
    input__password,
    button__modal,
    close__modal
  );

  return modal__form;
}


/* ------------------------------- Function fechar modal ------------------------------- */

function closeModal() {
  const modal = document.querySelector(".modal__container");
  const closeButton = document.querySelector(".close__modal");

  closeButton.addEventListener("click", () => {
    modal.close();
  });
}
