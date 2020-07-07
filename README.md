

## Instalação

  Clonar o repositório do projeto rodar o comando `yarn` ou `yarn install `

  Adicionar a raiz do projeto um arquivo `.env` com as seguintes variáveis:
  ```
  REACT_APP_BOX_ID='box_f9a7aad438cfc04abc27'
  REACT_APP_USER_ID='5f01d9a0e331c00017764a50'
  ```
  Essas variáveis representam o id da jsonbox criada e o id do usuário de demonstração

  Em seguida rodar o comando `yarn start` e abra [http://localhost:3000](http://localhost:3000)

## Considerações

Por estar atualmente trabalhando em outra empresa, existem algumas melhorias que não foram feitas por questão de tempo.

- Adicionar Storybook ao projeto
- Realizar testes de todos os componentes
- User ContextApi para ter informações do usuário em todas as telas
- Fazer as animações de entrada para as telas
- Utilizar um tema com as cores para o Styled Components
