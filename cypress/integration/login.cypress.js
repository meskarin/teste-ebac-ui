/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac (não é aluno_ebac? Sair)')
    })

    it('Deve exibir uma mensagem de erro caso login esteja errado', () => {
        cy.get('#username').type('aluno_naoexiste@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    })

    it('Deve exibir uma mensagem de erro caso a senha esteja errada', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senha errada')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })
})
