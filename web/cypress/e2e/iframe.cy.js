describe('iFrame', () => {

    it('Deve tocar o video', () => {
        cy.login()

        cy.contains('Video').click()

        //thinking time
        cy.wait(3000)

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayers')

        cy.get('@iFramePlayers')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayers')
            .find('.pause-button')
            .should('be.visible')
    })
})