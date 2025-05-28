describe('Testes API Rest', () => {

  it('GET', () => {
    cy.api('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      expect(response.status).to.be.oneOf([200,204]); 
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
      expect(response.status).to.be.oneOf([200,201]);
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
      expect(response.status).to.be.oneOf([200,204]);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq("Atualizando...");
    });
  });

  it('DELETE', () => {
    cy.api({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/100'
    }).then((response) => {
      expect(response.status).to.be.oneOf([200,204]);
    });
  });

});
