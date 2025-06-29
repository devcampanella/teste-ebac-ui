/// <reference types="cypress"/>

describe=('funcionalidade de login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('https://www.ebac.shop/minha-conta/')
        cy.get('#username').type('rodrigo.testee@testr.coom.br')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > .woocommerce-MyAccount-title').should('contain', 'Olá, Rodrigo Teste')

    })
      
      
})