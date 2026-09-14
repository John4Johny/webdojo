describe('Links abrindo nova guia/janela', () => {

    it('Validando o atributo do link do Instagram', () => {
        cy.login()

        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .should('have.attr', 'target', '_blank')
    })

    it('Validando o atributo do link do Facebook', () => {
        cy.login()

        cy.contains('Formulários').click()

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('Aceitação dos Termos')
            .should('be.visible')

    })

})