# Obtenha informações bancárias de usuários usando Puppeteer, Express e Cheerio através de uma REST API

A aplicação é uma REST API onde você deve passar o CPF, Account (ultimos 4 numeros do cartão) e Password de contas bancárias do Santander para obter informações e dados sensiveis do perfil informado.

# Para desenvolvedores

## Getting Started

Abra uma nova pasta de projeto, clone o repositório para rodar os seguintes comandos no terminal:

```
git clone https://github.com/narukaioh/wachallenge-webscraper.git
```
Para instalar as dependencias rode o seguinte comando:
```
npm install
```

Com essas instruções você irá conseguir uma cópia do projeto e conseguirá rodar ele em seu ambiente local.

### Pré-requisitos

Node.js - versão 8.0.0 ou superior
MongoDB - versão 4.2.0


### Construido com:

* [Puppeteer](https://github.com/GoogleChrome/puppeteer) - Framework usado para navegar entre as páginas
* [Express](https://github.com/expressjs/express) - Framework usado para construir a aplicação REST
* [Cheerio](https://github.com/cheeriojs/cheerio) - Framework usado para inspecionar as informações nas páginas html

## Como usar a aplicação

A aplicação funciona rodando em um servidor local e permite que usuários possam chamar o endpoint, pode ser utilizado o Postman para isso.

POST Envie as credenciais para logar em um conta Santander:
< domain >/user-info/?cpf=XXX&account=XXXX&password=XXXX

GET Para obter as informações de todos os usuários salvos no banco de dados
< domain >/user-info/