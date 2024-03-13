import { toast } from "./toast.js";

export const { token } = getUser() || "";
export const baseUrl = "http://localhost:6278";
export const requestHeaders = {
  "Content-type": "application-json",
  Authorization: `Bearer ${token}`,
};

/* ------------------------------- Function LocalStorage ------------------------------- */

export function getUser() {
  const lstorage = localStorage.getItem("@kenzieEmpresas:user");
  if (lstorage) {
    return lstorage;
  }
}

/* ------------------------------- Function POST Login ------------------------------- */

export async function login(loginBody) {
  const loginData = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginBody),
  })

  const loginDataJson = await loginData.json();
  
  if (!loginData.ok) {
    toast(loginDataJson.message, "#CE4646");
  } else {
    toast("Login realizado com sucesso", "#4BA036");
    localStorage.setItem("@kenzieEmpresas:user", loginDataJson.token);
    const { is_admin } = await validateUser(loginDataJson.token);
    redirect(is_admin);
  }
  return loginDataJson;
}

/* ------------------------------- Function GET Verificar o tipo de usuário ------------------------------- */

async function validateUser(token) {
  const validate = await fetch(`${baseUrl}/auth/validate_user`, {
    method: "GET",
    headers: {
      "Content-type": "application-json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

  return validate;
}

/* ------------------------------- Function redirecionamento de páginas USER ou ADM  ------------------------------- */

function redirect(is_admin) {
  if (is_admin) {
    window.location.replace("/src/dashboardADM/admDash.html");
  } else {
    window.location.replace("/src/dashboardUser/userDash.html");
  }
}