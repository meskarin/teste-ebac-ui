/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('my-account/')
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

    it('Deve fazer login com sucesso - Arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac (não é aluno_ebac? Sair)')
    })

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

        })

    
    
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
