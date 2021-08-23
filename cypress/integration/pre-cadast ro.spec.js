/// <reference types="cypress" />

var faker = require('faker')

describe('Funcionalidade Pré Cadastro', () => {

beforeEach(() => {
    cy.visit('my-account/')
});

    it('Deve completar o pré ca dastro com sucesso', () => {
        let fakerName = faker.name.firstName()
        let fakerEmail = faker.internet.email(fakerName)
        let fakerLastName = faker.name.lastName()
        let fakerPassword = faker.internet.password()

        cy.get('#reg_email').type(fakerEmail)
        cy.get('#reg_password').type(fakerPassword)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain.text','Olá')        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(fakerName)
        cy.get('#account_last_name').type(fakerLastName)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')

    });
});
