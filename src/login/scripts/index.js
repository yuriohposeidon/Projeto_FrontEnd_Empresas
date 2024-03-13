import { getUser, login} from '../scripts/request.js'


/* ------------------------------- Function Replace Home  ------------------------------- */

function replaceHome(){
const homeButton = document.querySelector(".home__header");
homeButton.addEventListener("click", (event) => {
  window.location.replace("../../index.html");
});
}
replaceHome()


/* ------------------------------- Function Replace Register  ------------------------------- */

function replaceRegister(){
const registerButton = document.querySelector(".register__header");
registerButton.addEventListener("click", (event) => {
  window.location.replace("../register/register.html");
});
}
replaceRegister()


/* ------------------------------- Function Replace Register Form  ------------------------------- */

function replaceRegisterForm(){
    const registerButtonForm = document.querySelector(".register__button");
    registerButtonForm.addEventListener("click", (event) => {
      window.location.replace("../register/register.html");
    });
    }
    replaceRegisterForm()


/* ------------------------------- Function enviando dados do Login  ------------------------------- */

function loginForm(){
    const inputs = document.querySelectorAll('.input__login')
    const button = document.querySelector('.login__button')
    const loginUser = {}

    button.addEventListener('click', async (event) => {
        event.preventDefault()

        inputs.forEach(input =>{
            loginUser[input.name] = input.value
        })

        const request  = await login(loginUser)

    })
}
// renderLogin()
loginForm()


/* ------------------------------- Function Menu Hamburguer  ------------------------------- */

const buttonMobile = document.querySelector(".button__hidden");

function toggleMenu() {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("hidden");
}

buttonMobile.addEventListener("click", toggleMenu);

  