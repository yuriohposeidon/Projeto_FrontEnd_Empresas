import {toast} from './toast.js'


/* ------------------------------- Function Request Create New User ------------------------------- */

export async function createUser(data){
    const newUser = await fetch('http://localhost:6278/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const newUserJson = await newUser.json()
    if(!newUser.ok){
        toast('Este usuario ou email já existem', '#CE4646')
    } else {
        toast('Usuário cadastrado com sucesso', '#4BA036')
    }
    return newUserJson
    }