import mysql from 'mysql2/promise'

// CONECXÃO COM O BANCO DE DADOS (PÁGINAS DE LOGIN)
async function conectarLogin(){
    try{
    const db = await mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login'
    });
    return db;

    }catch(erro){
        console.log('erro no banco de dados do login...',erro)
    }
};

export default conectarLogin;