/*** 
 Descrição: arquivo responsável por toda a configuração e execução da aplicação.
***/

const app = require('./app');
const port = process.env.PORT || 9000;
const database = require('./database/connection');

app.listen(port, async () => {
  console.log('✔️ Aplicação executando na porta', port);

  try {
    // TESTE DE CONEXÃO
    //await database.authenticate();
    console.log('✔️ Conexão com banco de dados realizada.');
    // INICIANDO TABELAS DO BANCO DE DADOS
    //database.sync();
  } catch (error) {
    console.error('❌ erro na conexão com banco de dados:', error);
  }



});
