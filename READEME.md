
# Testes de API REST com Cypress e cy.api

Este projeto contém exemplos de testes de API REST utilizando o Cypress e o plugin `cypress-plugin-api`. As operações cobrem os métodos HTTP: **GET**, **POST**, **PUT** e **DELETE** utilizando a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## :rocket: Tecnologias utilizadas

- Cypress
- Plugin cypress-plugin-api
- Node.js v22.13.1

---

## :gear: Como instalar o Node.js

1. Acesse o site oficial: [https://nodejs.org/](https://nodejs.org/)
2. Baixe a versão **LTS** mais próxima ou instale a versão exata utilizando o **nvm**:
   ```bash
   nvm install 22.13.1
   nvm use 22.13.1
   ```
3. Confirme a versão:
   ```bash
   node -v
   npm -v
   ```

---

## :package: Como instalar o Cypress

1. No terminal, dentro da pasta do seu projeto:
   ```bash
   npm init -y
   npm install cypress --save-dev
   ```

2. Para abrir o Cypress:
   ```bash
   npx cypress open
   ```

---

## :zap: Como instalar e configurar o plugin `cypress-plugin-api`

1. Instale o plugin:
   ```bash
   npm install -D cypress-plugin-api
   ```

2. No arquivo `cypress/support/commands.js` ou `e2e.js`, adicione:
   ```javascript
   import 'cypress-plugin-api';
   ```

---

## :white_check_mark: Exemplos de Testes de API

```javascript
describe('Testes API Rest', () => {

  it('GET', () => {
    cy.api('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      expect(response.status).to.be.oneOf([200, 204]);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
      expect(response.body.body).to.eq('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
    });
  });

  it('POST', () => {
    cy.api({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        userId: 101,
        id: 101,
        title: "Apenas para conhecimento.",
        body: "Aprendendo a testar API usando Cypress"
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('userId');
    });
  });

  it('PUT', () => {
    cy.api({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/100',
      body: {
        userId: 101,
        id: 101,
        title: "Atualizando...",
        body: "Atualizando..."
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 204]);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq("Atualizando...");
    });
  });

  it('DELETE', () => {
    cy.api({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/100'
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 204]);
    });
  });

});
```

---

## :memo: Observações

- A API utilizada é pública e **não realiza alterações reais**.
- O plugin `cypress-plugin-api` simplifica e melhora as requisições HTTP.
- `expect(response.status).to.be.oneOf([200, 204])` permite validar múltiplos status.

---

## :handshake: Contribuições

Sinta-se à vontade para abrir issues ou pull requests com sugestões e melhorias.

---

## :email: kaique.1996@live.com

Caso tenha dúvidas ou sugestões, entre em contato!

---

## :page_facing_up: Licença

Este projeto está sob a licença MIT.
