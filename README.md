Teste Back End

Primeiro: analisar as variáveis de ambiente, arquivo na raíz do projeto ".env".
Segundo: Alterar hostname, hostuser, password e database para as configurações nativas na maquina que será realizado o teste. Com base neste ponto, criar a base de dados com o mesmo nome dado no arquivo .env
Terceiro: Pasta "/Model/" temos dois arquivos, o primeiro é o DataAddress.js, na linha 45 é necessário descomentar para que que as tabelas possam ser criadas assincronamente; o próximo arquivo é o DataUser.js, na linha 34 é necessário descomentar para criar a tabela.

Tendo feito esses três passos, agora vamos abrir o terminal e digitar o comando para rodar o servidor "npm start";
No console veremos as informações das tabelas que foram criadas, o local e a porta onde está rodando o serviço.

Tendo iniciado o projeto, basta comentar novamente os comentários que tínhamos desmarcados para gerar as tabelas:
 DataAddress.js, na linha 45 e DataUser.js na linha 34 < comentar novamente >
 Caso não comente, sempre que restartar o serviço, os dados salvos anteriormente serão deletados.

 Feito esses passos basta fazer os testes.

 Qualquer dúvida estou à disposição.

 Mateus Santos Silva

 email: representante.com.sp@gmail.com
 (11) 95648-7568 whatsapp
