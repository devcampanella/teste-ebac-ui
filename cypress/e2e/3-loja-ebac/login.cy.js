/// <reference types="cypress"/>

describe('funcionalidade de login', () => {

        beforeEach(() => {
            cy.visit('https://www.lojaebac.ebaconline.art.br/minha-conta/')
            
        });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('rodrigo.testee@testr.coom.br')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > .woocommerce-MyAccount-title').should('contain', 'Olá, Rodrigo Teste')

    })
      
     it('Deve exibir uma menssagem de erro ao inserir usuario invalido', () => {

        cy.get('#username').type('rodrigo.testee@testr.coom.br')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail')
        cy.get('.woocommerce-error').should('existe')
     }); 

     it.only('deve exibir uma mensagem de erro', () => {
        
     });
})