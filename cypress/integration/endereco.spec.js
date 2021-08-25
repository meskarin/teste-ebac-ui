/// <reference types="cypress" />

import EnderecoPage from "../support/page-object/endereco.page"
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereço - Faturamente e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Beto', 'araujo','Cooper','Brasil','av Brasil','36','Rio de janeiro','Rio de janeiro','87023150','44998660027','rafael.ide0602@outlook.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
    it('Deve fazer cadastro de faturamento com sucesso - Arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email)

        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

});