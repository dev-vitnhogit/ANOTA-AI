// PASTA ONDE FICA O SERVIDOR PRINCIPAL

import express from 'express';
import cors from 'cors';
import router from './routes/anotacaoroutes.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use(router)

// SERVIDOR PRINCIPAL
app.listen(8001,function(){
    console.log('servidor rodando na porta 8001')
});