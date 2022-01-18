describe('completed page', () => {
	beforeEach(() => {
		cy.fixture('./books.json').then((allBooks) => {
			cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7BEqjWAPVc0JKC492JBAzIE04gAJFh2z', {
				statusCode: 200,
				body: allBooks
			})
			cy.visit('http://localhost:3000/#/');
			cy.get('input').type(10).should('have.value', 10)
			cy.get('button').click()
			cy.get(':nth-child(1) > .book-cover').click()
			cy.get(':nth-child(2) > .book-cover').click()
			cy.get('.hamburger').click()
			cy.get(':nth-child(2) > .links').click()
			cy.get('[src="https://storage.googleapis.com/du-prd/books/images/9780593465066.jpg"]').click()
			cy.get('.hamburger').click()
			cy.get(':nth-child(3) > .links').click()
		})
	})

	it('should contain all the elements on the completed page', () => {
		cy.get('.title').contains('BookWorm')
		cy.get('h2').contains(`Your Read Books`)
		cy.get('.goal-sentence > :nth-child(1)').contains('read')
		cy.get('.goal-sentence > :nth-child(2)').contains(1)
		cy.get('.goal-sentence > :nth-child(3)').contains('of your')
		cy.get('.goal-sentence > :nth-child(4)').contains(10)
		cy.get('.goal-sentence > :nth-child(5)').contains('goal')
		cy.get('.bottom-box').contains(`Look how far you've come!`)
		cy.get('.hamburger')
		cy.get(':nth-child(1) > .links').contains('Home')
		cy.get(':nth-child(2) > .links').contains('Must Reads')
		cy.get(':nth-child(3) > .links').contains('Completed Books')
		cy.get(':nth-child(4) > .links').contains('About')
	})

	it('should display the book that was marked read on must read page', () => {
		cy.get('.book-cover').should('be.visible')
	})

})