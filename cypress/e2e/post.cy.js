import { createPost } from "./factories/post";

describe('Rota /', () => {

  it('receber os posts', () => {

    cy.visit('http://localhost:3000/');
  });

  it('Enviar um post', async () => {

    const post = await createPost()

    cy.visit('http://localhost:3000/');
    cy.get("input").eq(0).type(post.title)
    cy.get("textarea").type(post.body)

    cy.get("input").eq(1).click()


    cy.url().should('equal', 'http://localhost:3000/');
  });

  it('Deletar um post', async () => {

    const post = await createPost()

    cy.visit('http://localhost:3000/');

    cy.get("svg").eq(1).click()
    cy.get("button").eq(1).click()


    cy.url().should('equal', 'http://localhost:3000/');
  });

});
