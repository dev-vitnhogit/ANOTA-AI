// pasta onde fica a logica das rota o que vai acontecer quano aquele caminho for acessado.

import conectar from '../db/anotacaodb.js'

// ROTA DA PAGINA INDEX ANOTACAO

export async function guardaBloco(req,res){
    const {nome} = req.body;
    const db = await conectar()
    const [result] = await db.query('INSERT INTO blocos (nome_bloco) VALUES(?)',[nome])
    res.json({result})
};