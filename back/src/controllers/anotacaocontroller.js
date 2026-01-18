// pasta onde fica a logica das rota o que vai acontecer quano aquele caminho for acessado.

import conectar from '../db/anotacaodb.js';

// ROTA PAGINABLOCO PARA SALVAR O CONTEUDO

export async function criarBloco(req,res){
    const db = await conectar()
    const {nome} = req.body;
    const id_user = 1
    const [result] = await db.query('INSERT INTO blocos (nomebloco,id_user) VALUES(?,?)',[nome,id_user]);
    res.json(result)
}