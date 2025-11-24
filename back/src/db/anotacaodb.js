import mysql from 'mysql2/promise';

// CONECXÃO COM O BANCO DE DADOS
async function conectar(){

    try{
      const db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password:'',
      database: 'anotaai'
    });

      console.log('conecxao concluida')
      return db;
    }
    catch(erro){
    console.log('erro na coneção com o banco de dados...',erro)
    };

};

export default conectar;