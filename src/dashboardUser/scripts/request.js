import {
  baseUrl,
  requestHeaders,
  getUser,
} from "../../login/scripts/request.js";

const token = localStorage.getItem("@kenzieEmpresas:user");
/* ------------------------------- GET Buscas Informações do funcionario logado ------------------------------- */

export async function searchLoggedEmpolyee(token) {
  const employee = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: {
      "Content-type": "application-json",
      Authorization: `Bearer ${token}`,
    },
  });
  const employeeJSON = await employee.json();
  return employeeJSON;
}

/* ------------------------------- GET Listar todos os funcionários do mesmo departamento ------------------------------- */

export async function listAllEmployees(token) {
  const allEmployees = await fetch(`${baseUrl}/users/departments/coworkers`, {
    method: "GET",
    headers: {
      "Content-type": "application-json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    });
  return allEmployees;
}
const arrayEmployees = await listAllEmployees(token);

/* ------------------------------- PATCH Atualizar informações do funcionário ------------------------------- */

export async function updateInformations(bodyUpdate) {
  const update = await fetch(`${baseUrl}/users`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyUpdate),
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    });
  return update;
}
