/// <reference types="cypress" />

describe('Book your flight', () => {

it('Visits the BlazeDemo website', () => {
        cy.visit('https://blazedemo.com/')
});

it('Departure and destination city exists', () => {
    cy.contains('Choose your departure city:')
    cy.contains('Choose your destination city:')
})

it('City selectors are visible', () => {
    cy.get('[name=fromPort]').should('be.visible')
    cy.get('[name=toPort]').should('be.visible')
})

it('Select departure', () => {
    cy.contains('[name=fromPort]','Boston').select('Boston')
})

it('Select destination', () => {
    cy.contains('[name=toPort]','Dublin').select('Dublin')
})

it('Search for flights', () => {
    cy.get('input.btn.btn-primary',).contains('Find Flights').click()
})

it('Confirm you have results', () => {
    cy.get('.table').should('be.visible')
    cy.contains('Flights from')
    cy.contains('Choose')
    cy.contains('Flight #')
    cy.contains('Airline')
    cy.contains('Departs: Boston')
    cy.contains('Arrives: Dublin')
    cy.contains('Price')
})

it('"Choose this flight" button, is available', () => {
    cy.get('input.btn.btn-small').should('be.visible')
})

it('Select the first combination', () => {
    cy.get('input.btn.btn-small',).contains('Choose This Flight').click()
})

it('Land to reservation page', () => {
    cy.contains('Please submit the form below to purchase the flight.')
})

it('Complete and Submit the form', () => {
    const inputName = 'Vasilis Maneas'
    const address = 'My Address 888'
    const city = 'Copenhagen'
    const state = 'Capital City'
    const zipCode = '2300'
    const creditCardNumber = '5555 5555 5555 5555'
    const creditCardMonth = '11'
    const creditCardYear = '1821'
    const nameOnCard = 'Vasilis Maneas'


    cy.get('[id=inputName]').type(inputName)
    cy.get('[id=address]').type(address)
    cy.get('[id=city]').type(city)
    cy.get('[id=state]').type(state)
    cy.get('[id=zipCode]').type(zipCode)
    cy.contains('[name=cardType]','Visa').select('Visa')
    cy.get('[id=creditCardNumber]').type(creditCardNumber)
    cy.get('[id=creditCardMonth]').clear().type(creditCardMonth)
    cy.get('[id=creditCardYear]').clear().type(creditCardYear)
    cy.get('[id=nameOnCard]').type(nameOnCard)
    cy.get('input.btn.btn-primary',).contains('Purchase Flight').click()
})

it('Confirm the purchase', () => {
    cy.contains('Thank you for your purchase today!')
});
})