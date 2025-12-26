import conectarLogin from "../db/dblogin.js"

// ROTA POST PÁGINA DE CADASTRO
export async function enviarDados(req,res) {
    try{
    const db = await conectarLogin();
    const {usuario,password} = req.body;
    const [nomeigual] = await db.query('SELECT id,nome FROM usuarios WHERE nome =?',[usuario])

    if(nomeigual.length > 0){
        return res.json({msgerro:'trocar nome'})
    }else{

    const [result] = await db.query('INSERT INTO usuarios (nome,senha) VALUES (?,?)',[usuario, password])
    
    res.json({result,msgsuscesso:'pode entrar'})
    }
    
    }catch(erro){
        console.log('erro na rota POST...',erro)
    }
   
};

// ROTA POST PÁGINA DE LOGIN ENTRAR

export async function verificadorLogin(req,res){
    try{
    const db = await conectarLogin();
    const {usuario,password} = req.body

    const [result] = await db.query('SELECT * FROM usuarios WHERE nome = ? AND senha = ?',[usuario,password])
    
    if(result.length > 0){
        res.json({
            sucesso:'usuario encontrado',
            usuario:result[0]
        })
    }else{
        res.json({msg:'nao foi encontrado'})
    }
    }catch(erro){
        console.log('erro na rota post da pagina de login entrar',erro)
    }
    
};