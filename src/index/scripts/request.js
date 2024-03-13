/* ------------------------------- Function Request GET Listar todas as Empresas ------------------------------- */

export async function getAllCompanies (){
    const companies = await fetch(`http://localhost:6278/companies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const companiesJson = await companies.json()

    return companiesJson
}


/* ------------------------------- Function Request GET Listar todos os setores ------------------------------- */

export async function getAllDepartaments (){
const departaments = await fetch(`http://localhost:6278/sectors`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },

})
const departamentsJson = await departaments.json()
return departamentsJson
}