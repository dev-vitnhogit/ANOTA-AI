// MANIPULAÇÃO DO DOM
const temaDark = document.getElementById('tema-dark');
const btn_salvar = document.getElementById('btn-salvar');

// EVENTO DE CLICK
temaDark.addEventListener('click',temaescuro);
btn_salvar.addEventListener('click',salvarbloco)

// FUNÇÃO DE TEMA ESCURO
function temaescuro(){
    document.body.classList.toggle('escuro');
};


// FUNÇÃO PARA SLAVAR O CONTEUDO NO BANCO DE DADOS
async function salvarbloco(){
    try{    
    const areatexto = document.getElementById('areatexto');
    const texto_Do_bloco = areatexto.value

    const res = await fetch('http://localhost:8001/bloco',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({anotacao:texto_Do_bloco})
    })
    }catch(erro){
        console.log('erro na requisição da paginabloco rota post',erro)
    }

}