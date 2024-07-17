# Diego Teste

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.0.0.

## Instruções para rodar o projeto

Rodar os seguintes comandos:
`npm install` para instalar as dependências
`ng serve` para rodar o servidor


## Orientações para o teste

Primeiramente, dê fork nesse projeto para sua conta git hub.
Veja a estrutura de pastas e utilize e crie a sua estrutura na teste-tecnico app.
Seguindo o padrão MVCS, faça a requisição GET da API: https://viacep.com.br/ws/30160907/json/
Com o dado objeto, construa um formulário em que todos os campos possam ser editados, exceto: 'ibge' e 'siafi'.
Encontre uma solução de máscara para o campo 'cep', seguindo o padrão 00000-000;
Encontre uma solução de máscara para o campo 'complemento', seguindo o padrão de milhar: 0.000;
Construa o método/função que salve as alterações no localstorage;
O botão de salvar deve ser bloqueado caso todos os campos do formulário não estejam preenchidos;
Utilize o Angular Material para facilitar o desenvolvimento: https://material.angular.io/
Caso necessite, guie-se pela documentação do Angular: https://angular.dev/

## Implementação
Todos os requisitos foram implementados, criação do formulário, máscaras, campos obrigatórios, mensagem de sucesso, 
inserção de loader para chamadas da API, salvamento em localstorage e uso do Angular Material. 
Também separei as interfaces e os serviços dentro de um padrão MVCS.
Dentro da pasta "teste-tecnico" foi separado em componentes e páginas. Cada componente/página tem seu arquivo de estilo.
O projeto tem um arquivo de rotas com a página inicial e a página do teste em si.
O site está totalmente responsivo e apliquei um pouco de estilo, e também criei um Header.
No arquivo "global_styles" foi inserido um CSS de reset de estilos.




