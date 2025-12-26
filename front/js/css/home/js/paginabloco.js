// MANIPULAÇÃO DO DOM
const temaDark = document.getElementById('tema-dark');

// EVENTO DE CLICK
temaDark.addEventListener('click',temaescuro);

// FUNÇÃO DE TEMA ESCURO
function temaescuro(){
    document.body.classList.toggle('escuro');
};