import {createUser} from '../scripts/request.js'


/* ------------------------------- Function Replace Return Login  ------------------------------- */

function replaceReturn(){
const returnButton = document.querySelector('.return__button')
returnButton.addEventListener('click',(event) => {
window.location.replace('../login/login.html')
})
}
replaceReturn()


/* ------------------------------- Function Replace Home  ------------------------------- */

function replaceHome(){
const homeButton = document.querySelector('.home__header')
homeButton.addEventListener('click',(event) => {
window.location.replace('../../index.html')
})
}
replaceHome()


/* ------------------------------- Function Replace Login  ------------------------------- */

function replaceLogin(){
const loginButton = document.querySelector('.login__header')
loginButton.addEventListener('click',(event) => {
window.location.replace('../login/login.html')
})
}
replaceLogin()


/* ------------------------------- Function Sending Data Register  ------------------------------- */

function createUserForm(){
    const inputs = document.querySelectorAll('.inputs')
    const button = document.querySelector('.register__button')
    const newUser = {}
    button.addEventListener('click', async (event) => {
        event.preventDefault()

        inputs.forEach(input =>{
            newUser[input.name] = input.value
        })
    const request = await createUser(newUser)
    })

return newUser

}
createUserForm()


/* ------------------------------- Function Menu Hamburguer  ------------------------------- */

const buttonMobile = document.querySelector(".button__hidden");

function toggleMenu() {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("hidden");
}

buttonMobile.addEventListener("click", toggleMenu);