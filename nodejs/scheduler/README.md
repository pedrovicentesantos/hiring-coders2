# Repositório

O repositório contém o projeto de um agendamento de serviços. Para isso, existem dois tipos de usuários, os prestadores de serviços e quem vai contratá-lo.

Implementa autenticação dos usuários utilizando `JWT`, além de permitir o upload de fotos.

As fotos salvar podem ser encontradas no diretório `tmp/uploads`.

## Rodando a aplicação

A aplicação usa dois banco de dados: MongoDB e PostgreSQL. Para o MongoDB foi utilizado o [MongoDB Atlas](https://www.mongodb.com/atlas/database) e o PostgreSQL pode ser executado com o `docker-compose` que está no projeto.

Depois de instalar as dependências, basta rodar os dois seguintes comandos para inicializar o banco PostgreSQL corretamente: 

```
npx sequelize-cli db:create

npx sequelize-cli db:migrate
```

Feito isso para rodar a aplicação é só rodar:

### `npm run dev`