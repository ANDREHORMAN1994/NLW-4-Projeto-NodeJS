import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

// Pode usar um LISTEN para testar o retorno do servidor funcionando via npm run dev;
app.listen(7777, () => console.log("FUNCIONANDO"));

/*
MÉTODOS DE REQUISIÇÃO HTTP:
GET   -   BUSCAR INFORMAÇÃO NO SERVIDOR;
POST  -   SALVAR UMA INFORMAÇÃO NO APP;
PUT   -   ALTERAR ALGUMA INFORMAÇÃO;
DELETE -  DELETAR ALGUMA INFORMAÇÃO;
PATCH  -  ALTERAÇÃO ESPECÍFICA;

SINTAXE:
  1 PARAM => "ROTA";
  2 PARAM => (request, response) => {};
  
app.get('/', (request, response) => {
  return response.json({
    message: 'HELLO WORLD, NLW#4',
  })
})

app.post('/', (request, response) => {
  // O método POST recebe os dados há serem salvos pelo REQUEST;
  response.json({
    message: 'DADOS SALVOS COM SUCESSO',
  })
})
*/
