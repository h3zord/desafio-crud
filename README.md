<h1 align="center">Boas-vindas ao repositório do desafio CRUD!</h1>
<br />

## Objetivo

O <strong>desafio CRUD</strong> é uma API de gerenciamento de funcionários, que permite a criação, leitura, atualização e exclusão. Foi utilizada princípios da programação orientada a objetos para a construção dessa API.

## O que foi desenvolvido?

O <strong>desafio CRUD</strong> é uma api que tem o objetivo de gerenciar o cadastro de funcionários no banco de dados. O docker foi utilizado para criar dois containers: um para o Node, com a função de rodar o Javascript do lado do servidor, e outro container para o banco de dados não relacional, que nesse caso é o mongoDB.

O Typescript foi a linguagem escolhida para desenvolver essa aplicação, pelo motivo de possuir uma tipagem estática, garantindo mais confiabilidade no código. O express.js ficou com a responsabilidade de gerenciar as rotas, processar as requisições HTTP e definir os middlewares. A organização do projeto segue o modelo MSC (Model, Service e Controller), seguindo príncipios e da programação orientada a objetos.

O ODM Mongoose foi incluído para modelar e manipular o banco de dados, e os endpoints dessa API rest permitem fazer as principais operações (CRUD): criar, ler, atualizar e excluir. A aplicação conta com testes unitários, onde as camadas model, service e controller são testadas isoladamente. E com testes de integração para verificar o funcionamento integrado entre diferentes partes da API. A taxa de cobertura foi de 100% das camadas. As bibliotecas utilizadas foram Mocha, Chai e Sinon.

## Linguagens e ferramentas:
- Docker
- Node.js
- Typescript
- Express.js
- MongoDB
- Mongoose
- Mocha
- Chai
- Sinon

## Instalação e execução com Docker:

### 1 - Clone o repositório:

```
git clone git@github.com:h3zord/car-shop.git
```