// MANIPULAÇÃO DO DOM
const usuario = document.getElementById('nome');
const password = document.getElementById('senha');
const btn_cadastrar = document.getElementById('btn-cadastrar');

// EVENTOS
btn_cadastrar.addEventListener('click',recebeDados)


// REQUISIÇÃO 
async function recebeDados(event){
    event.preventDefault();
    try{
        const res = await fetch('http://localhost:8001/cadastro',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({usuario: usuario.value,password: password.value})
    });
        const resultado = await res.json()

     if(resultado.msgerro){
        alert(`${resultado.msgerro}`)
     }else{
        alert(`${resultado.msgsuscesso}`)
     }
    }catch(erro){
        console.log('erro na requisao post front...',erro)
    }

};