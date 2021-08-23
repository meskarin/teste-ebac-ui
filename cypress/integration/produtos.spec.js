/// <reference types="cypress"/>

describe('Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .contains("Atlas Fitness Tank")
            .click()
    });

    it('Deve adicionar ao carrinho com sucesso', () => {
        var quantidade = 6

        cy.get('[class="product-block grid"]')
            .contains("Atlas Fitness Tank")
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho - Comando customizado', () => {
        cy.addProduto("Abominable Hoodie", "XS", "Blue", 3)
        
    });

    it.only('Deve adicionar produto ao carrinho - Comando customizado', () => {
        cy.addProduto("Apollo Running Short", "32", "Black", 30)
        
    });
});