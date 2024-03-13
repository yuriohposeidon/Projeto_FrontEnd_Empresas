import {
  requestHeaders,
  getUser,
  token,
} from "../../login/scripts/request.js";

const baseUrl = "http://localhost:6278"




/* ------------------------------- POST Cadastrar Empresa ------------------------------- */

export async function newCompany(token) {
    const company = await fetch(`${baseUrl}/companies`, {
      method: "POST",
      headers: {
        "Content-type": "application-json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        return res;
      });
    return company;
  }


/* ------------------------------- GET Listar todas as Empresas ------------------------------- */

  export async function allCompanies() {
    const company = await fetch(`${baseUrl}/companies`, {
      method: "GET",
      headers: {
        "Content-type": "application-json",
      },
    });
    const companyJSON = await company.json();
    return companyJSON;
  }


  /* ------------------------------- POST Criar departamento ------------------------------- */

  export async function newDeparment(bodyNew) {
    const company = await fetch(`${baseUrl}/departments`, {
      method: "GET",
      headers: {
        "Content-type": "application-json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyNew),

    })
    const companyJSON = await company.json();
    return companyJSON;
  }