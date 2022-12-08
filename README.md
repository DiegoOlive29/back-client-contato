### Inicialização do projeto:

O projeto consiste no desenvolvimento de uma aplicação que pudesse armazenar informações de contatos em um banco de dado e exibir em uma pagina web.

Após o fazer o clone dos dois repositorios na sua maquina, faça os seguinte comandos nesse repositorio
    Instalando as techs
    yarn init -y
    yarn install 

## Banco de dados
    Crie um banco de dados postergre na sua maquina para usar nessa aplicação.

## Arquivo env
    No seu repositorio vc ira encontrar um arquivo .env.example, nele tem as configuração que você deve preencher com seus dados para rodar a aplicação.
    
## Para iniciar a api localmente:
   yarn typeorm migration:run -d src/data-source

   yarn dev


## Techs usadas no front:

    Express;
    Node:
    TypeScript;
    Pg;
    Typeorm;
    Bcrypt:
    Jsonwebtoken;

## Porta: 
    A api por padrão roda na http://localhost:3001/

## Estrutura de pastas:

    Src - com todos os arquivos desenvolvidos.
        
        controllers - Funções que tem responsabilidade de pegar as informações nececssarias na requisição e chamar os services.
        
        services - Funções que de fato executam as atividade dentro da api, realizando post, get, update...
        
        interfaces - Mascaras para usod o typescript, de forma a ajuda no desenvolvimento.

        erros - Um extenção da classe de erro que permite customizar o status e a mensagem do erro.

        middlewares - Autenticações que são feitas nas rotas.

        migrations - Migrações que forma executadas durante o desenovolvimento da aplicação.

        routes - Rotas da api

        entities - Tabelas da api

        @types -  Uma extenção da tipagem de Request.