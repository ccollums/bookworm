describe('must reads page', () => {
	beforeEach(() => {
		cy.fixture('./books.json').then((allBooks) => {
			cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7BEqjWAPVc0JKC492JBAzIE04gAJFh2z', {
				statusCode: 200,
				body: allBooks
			})
			cy.visit('http://localhost:3000/#/');
			cy.get('input').type(10).should('have.value', 10)
			cy.get('button').click()
			cy.get('.goal-sentence > :nth-child(4)').contains(10)
			cy.get(':nth-child(1) > .book-cover').click()
			cy.get('.hamburger').click()
			cy.get(':nth-child(2) > .links').click()
		})
	})

	it('Will visit the must reads page and see the items rendered on the page', () => {
		cy.get('.title').contains('BookWorm')
		cy.get('h2').contains(`Your Must Reads`)
		cy.get('.goal-sentence > :nth-child(1)').contains('read')
		cy.get('.goal-sentence > :nth-child(2)').contains(0)
		cy.get('.goal-sentence > :nth-child(3)').contains('of your')
		cy.get('.goal-sentence > :nth-child(4)').contains(10)
		cy.get('.goal-sentence > :nth-child(5)').contains('goal')
		cy.get('button').should('be.visible')
		cy.get('.bottom-box').contains(`Click books you've completed to add to your goal`)
		cy.get('.book-cover').should('be.visible')
		cy.get('.hamburger')
		cy.get(':nth-child(1) > .links').contains('Home')
		cy.get(':nth-child(2) > .links').contains('Must Reads')
		cy.get(':nth-child(3) > .links').contains('Completed Books')
		cy.get(':nth-child(4) > .links').contains('About')
	})

	it('should be able to click one of the books and it update the books read goal', () => {
		cy.get('.book-cover').click()
		cy.get('.goal-sentence > :nth-child(2)').contains(1)
	})

	it('when a book is clicked it will be removed from the page', () => {
		cy.get('.book-cover').click()
		cy.get('.right-side > p').should('be.visible')
	})

	it('When the clear button gets clicked, it will clear the goals and must reads', () => {
		cy.get('.clear-button').click()
		cy.get('.goal-sentence > :nth-child(2)').contains(0)
		cy.get('.goal-sentence > :nth-child(4)').contains(0)
		cy.get('.right-side > p').contains('Go Home and add some books to your must read list!')
	})

	it('once the must reads are cleared the user can click the home button to go back to the main page', () => {
		cy.get('.clear-button').click()
		cy.get('.link').click()
		cy.get('h2').contains(`Best Seller's List`)
	})

})