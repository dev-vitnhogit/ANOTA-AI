// AREA DO BOTÃO DE ADICIONAR E A AREA NA ONDE VAI APARCER OS BLOCOS.
const btn_Addbloco = document.getElementById('btn-addbloco');
const area_Bloco = document.getElementById('area-bloco');

// AREA DO FORMULARIO.
const area_input = document.getElementById('area-input');
const btn_criar = document.getElementById('btn-criarbloco');
const titulo_bloco = document.getElementById('input-titulo');

// EVENTOS PARA OS BOTOES.
btn_Addbloco.addEventListener('click',addBloco)
btn_criar.addEventListener('click',criarBloco)

// FUNÇÃO PARA APARECER O FOMULARIO.
function addBloco(){
   area_input.style.display = 'flex' 
}

// FUNÇÃO PARA CRIAR OS BLOCOS.
async function criarBloco(){
    
    const titulo = titulo_bloco.value
    if(!titulo){
       alert('erro nenhum titulo')
       return;
    }
    
    // ADICIONADO CLASS NOS BLOCOS.
    const bloco = document.createElement('div');
    bloco.classList.add('bloco')

    // CONTEUDO DOS BLOCOS EM HTML.
    bloco.innerHTML = `
    <h2>${titulo}</h2>
    <div class="area-btn">
    <button class= "btn-acessar">acessar</button>
    <button class= "btn-deletar">deletar</button>
    </div>`
   
    // BOTÃO DOS BLOCOS.
    const btn_acessar = bloco.querySelector('.btn-acessar')
    const btn_deletar = bloco.querySelector('.btn-deletar')
   
    // EVENTOS PARA OS BOTOES DOS BLOCOS.
    btn_acessar.addEventListener('click',acessar)
    btn_deletar.addEventListener('click',deletar)
   
    // NA ONDE VAI APARECER OS BLOCOS.
    area_Bloco.appendChild(bloco);
    titulo_bloco.value = ''
    area_input.style.display = 'none'
    
    // REQUISIÇÃO PARA O BACK PARA SALVAR O NOME DO BLOCO
    const res = fetch('http://localhost:8001/bloco',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({nome:titulo})
    })
    
};

// ACESSA OUTRA PAGINA PARA FAZER AS ANOTAÇOES.
function acessar(event){
   const acessebloco = event.target.closest('.bloco');
   window.location.href = 'paginabloco.html'
};

// DELETA O BLOCO CLICADO.
function deletar(event){
   const bloco = event.target.closest('.bloco');
   bloco.remove()
};