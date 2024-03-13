

/* ------------------------------- Function Autenticação de Rota  ------------------------------- */

import { allCompanies } from "./request.js";

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

    /* ------------------------------- Function renderizando as options de empresas  ------------------------------- */



async function renderCompanies(){
      const companies = await allCompanies()
      const select = document.querySelector(".select__company")

      companies.forEach(company => {
        const options = document.createElement('option')
        options.innerText = company.name
        options.value = company.uuid
        select.appendChild(options)
      })
      return select
    }
    renderCompanies()


    /* ------------------------------- Function abrir o Modal   ------------------------------- */

    function modalCreateDepartment() {
      const modal = document.querySelector(".modal__container");
      const button = document.querySelector(".button__create");
    
      button.addEventListener("click", () => {
        console.log('teste')
        modal.showModal();
        // modal.innerHTML = "";
        closeModal();
      });
    }
    modalCreateDepartment()

    /* ------------------------------- Function fechar modal ------------------------------- */

    function closeModal() {
      const modal = document.querySelector(".modal__container");
      const closeButton = document.querySelector(".close__modal");
    
      closeButton.addEventListener("click", () => {
        modal.close();
      });
    }

    