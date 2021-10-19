# Projeto

O projeto consiste no desenvolvimento de uma parte de um e-commerce, como página inicial, página com produtos, carrinho e edição de dados do usuário. Foi feito utilizando React.js.

Usa os dados da [seguinte API](https://fakestoreapi.com) para popular a página com produtos.

O design foi pensado de forma a ser responsivo e os dados como carrinho e dados do usuário ficam salvos no `localStorage`.

O projeto foi feito como um desafio proposto pelo programa Hiring Coders #2 e pode ser acessado em:

[https://hiring-coders2-simple-ecommerce-react.netlify.app](https://hiring-coders2-simple-ecommerce-react.netlify.app)

## Utilização

O site possui 4 páginas para o usuário navegar:

- `/`: Home do site
  * Onde o usuário cai ao acessar o site pela primeira vez. Pede o nome do usuário e salva no `localStorage`. <br/><br/>

- `/shopping`: Página com listagem de produtos da loja
  * Onde o usuário pode ver os produtos disponíveis, ver sua descrição e adicioná-los ao carrinho.
  <br/><br/>

- `/cart`: Página com carrinho do usuário
  * Onde o usuário visualiza seu carrinho e o preço total da compra.
  <br/><br/>

- `/user`: Página com dados do usuário
  * Onde o usuário visualiza seus dados e pode editar para adicionar informações extras pessoais e um endereço de entrega as compras.

## Considerações:

Os dados dos produtos são consumidos de uma API e, para evitar requisições constantes a mesma, todos os produtos são salvos no `localStorage` assim que o site é carregado pela primeira vez. Dessa forma, para recuperá-los posteriormente basta acessar o `localStorage`, o que torna a experiência mais agradável.

O carrinho do usuário fica salvo no `localStorage` e só é limpo se o `localStorage` do site for deletado, permitindo que o usuário volte depois e continue a compra de onde parou.

Além disso, assim que o usuário entra seu nome pela primeira vez na página principal, é gerado um ID único associado a ele. A ideia do uso deste ID é permitir que o usuário possa alterar qualquer dado e que seja identificado unicamente pelo seu ID. 
O ID é também utilizado para associar o usuário ao endereço de entrega, pois se eventualmente for adicionado um novo endereço, basta criar um novo dado, não sendo necessário editar todo o usuário para isso.


