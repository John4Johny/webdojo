describe('Simulando Mouseover', () => {
    it('Deve exibir o texto assar o mouse', () => {
        cy.login()

        cy.contains('Isso é Mouseover').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover').should('exist')
    })
})