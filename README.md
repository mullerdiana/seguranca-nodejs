## Instalação das dependências
npm i

## Rodar o projeto
npm run start

## criação de tabela com cli do sequelize
sequelize model:create --name usuarios --attributes nome:string,email:string,senha:string

## instalação do bcryptjs
npm i bcryptjs

## Crie um arquivo sequelize-cli no seu projeto, se ainda não existir
ter o postgreSQL instalado na máquina
npx sequelize-cli init

## Sequelize CLI para criar o banco de dados
npx sequelize-cli db:create
