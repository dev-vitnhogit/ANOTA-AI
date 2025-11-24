
const usuario = document.getElementById('nome');
const password = document.getElementById('senha');
const btn_entra = document.getElementById('btn-entra');

btn_entra.addEventListener('click',enviarVerficador)

// REQUISIÇÃO
async function enviarVerficador() {
    const res = await fetch('http://localhost:8001/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({usuario:usuario.value,password:password.value})
    })

    const dados = await res.json()
    if(dados.sucesso){
        alert('bem vindo')
        window.location.href = 'indexanotacao.html'
    }else{
        alert(dados.msg)
    }
    
}