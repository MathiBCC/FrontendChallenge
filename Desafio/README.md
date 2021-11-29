# Desafio

# Observações
Prezado Avaliador, sei que o desafio era para somente para desenvolver front-end, no entanto, fiz um mini sistema
contendo front-end, back-end e banco de dados relaciona MYSQL.
tentei utilizar o máximo de conceitos possíveis, canLoad, canActive, roteamento, ngIfs, RXJS, NgFor, NGStyles, NgClass, events, ngModel
Output Input,  e muita organização e dicas de CLEAN CODE do Robert Cecil!
Só tive um domingo para fazer já que estava fazendo coisas da faculdade e não posso deixar meu outro trabalho de lado também, mas não que isso seja desculpa
para fazer um mal Código, pelo contrário eu dei tudo de mim durante essas 24 horas e estou enviando agora 8:00 da manhã.
Vale ressaltar que, por mais que eu tenha colocado a mão na massa somente no domingo, não significa que não pensei no projeto antes de começa-lo a fazer,
Preparei todo o dominio da aplicação e adicionei novas funcionalidades e regras de negócio, como por exemplo, login, criação de usuário, permissionamentos,
torneios de acordo com os elos dos jogadores... E eu gostaria de implementar muito mais, como solicitação para entrar em times (Quando um usuario pede pra entar
em algum time, enviar uma solicitação para o lider) e com isso já implementar um sistema de notificação em tempo real utilizando O famoso RXJS, mas infelizmente
o tempo foi corrido... 
Apliquei todos os conceitos de SOLID, preparei todo o dominio da aplicação( Não utilizei muitos conceitos de DDD pois o dominio não era tão complexo)
Mas se olhar no código vai ver que utilizei DomainServices (técnicas aprendidas no canal EXIMIACO, Cursos do eduardo pires e (IMPLEMENTING DOMAIN DRIVEN DESGIN) LIVRO
, apliquei os conceitos solids, queria também utilizar alguns designPatterns mas não achei onde encaixar algum para demonstrar meu conhecimento nessa área Foquei muito muito mesmo no domínio afinal, complexidade de domínio vem antes da complexidade técnica não é verdade?
Tentei também deixar o código o menos acoplado possível dependendo de abstrações e não de classes
e em relação a arquitetura utilizada no back-end foi realizada a tentativa de implementar a cleanArchiteture (Arquitetura CEBOLA)
no qual para acessar as camadas mais profundas do sistema você precisa "descascar a cebola) Passando pelo front-end(html,component.ts, service) -> 
Back-end (controller, service, repository, Domain)
Além disso, gostaria de informa-lo também que tanto no front-end quanto no backend possuem documentações Frontend Utilizando COMPODOC
e no back-end utilizando swagger Open API.
e em relação a escolha do framework para o backend, utilizei o nestjs pois estou utilizando ele com mais frequencia então, eu conseguiria desenvolver em
menos tempo que no .net, no entanto, não tenho problemas com .net, inclusive prefiro .net <3 
Em relação a documentação do Dominio eu geralmente faço utilizando o draw.io utilizando UML.
 algumas instruções... é necessário que a aplicação rode utilizando o mysql, mas caso não tenha eu deixei um docker-compose preparadinho no back-end
só dar docker-compose-up. confira sempre o .env e em relação ao banco de dados (eu deixei uma flag syncronyze = true no typeorm que vai criar toda a tabela.
(Vale ressaltar que o usuario admin é criado somente no banco direto, então va na tabela user e coloque um usuario admin
as senhas são hasheadas então se quiser uma senha simples pegue esta: $2b$10$aXLj1BDCFuPfNpv8/kor5umECeVnA2gjb46qOuQ1L3lyVbkTeb/Ei 
essa senha é 123 rsrs.

Por fim, gostaria de falar que o projeto todo foi criado por mim e que tenho bastante prática no angular e costumo ler a documentação com frequencia
para me atualizar e deixar meus projetos da melhor forma possível, consigo me virar bastante tanto no front-end quanto no back-end,
Queria falar também que utilizei um css free que peguei no google(Tive que passar tudo pra angular, tanto os scripts quanto os css)
 para não perder muito tempo fazendo CSS pois queria fazer um sisteminha bem completo para conseguir mostrar todas, 
optar por pegar css pronto não significa que não sei fazer tá, é que eu demoraria muito decidindo as cores e estilos sou um pouco indeciso em relação as cores
sempre trabalho com um UX DESIGN de perto, Mas futuramente quando eu terminar meus planos de estudos vou pegar uma base de UX!


Chega de falar né? Na verdade, mais uma coisinha, Agradeço pela oportunidade e muito obrigado o desafio foi bem divertido e bem criativo. Abraços
Qualquer dúvida estou a disposição!
