// PASTA ONDE GUARDA AS ROTAS (CAMINHO,FUNÇÃO CALLBACK)

import {Router} from 'express';
const router = Router();

// IMPORTS DA PAGINA DE LOGIN
import { enviarDados,verificadorLogin} from '../controllers/anotacaologin.js';

// ROTAS DA PÁGINA DE LOGIN DE CADASTRO
router.post('/cadastro',enviarDados);

// ROTAS DA PAGINA DE LOGIN ENTRAR
router.post('/login',verificadorLogin)


// IMPORTS DA PÁGINA INDEX ANOTAÇAO
import {criarBloco} from '../controllers/anotacaocontroller.js';

router.post('/bloco',criarBloco);


export default router;