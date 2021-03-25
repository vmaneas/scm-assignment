export function FindFlight(departurePort, destinationPort) {
  cy.get('[name=fromPort]').select(departurePort);
  cy.get('[name=toPort]').select(destinationPort);
  cy.contains('Find Flights').click();
}

export function ChooseFlight(departurePort, destinationPort) {
  cy.get('h3').contains(`Flights from ${departurePort} to ${destinationPort}`);
  cy.contains('Choose This Flight').click();
}

export function PurchaseFlight(firstName, address, city, state, zipCode, cardType,
  creditCardNumber, creditCardMonth, creditCardYear, nameOnCard) {
  cy.get('#inputName').clear().type(firstName);
  cy.get('#address').clear().type(address);
  cy.get('#city').clear().type(city);
  cy.get('#state').clear().type(state);
  cy.get('#zipCode').clear().type(zipCode);
  cy.get('#cardType').select(cardType);
  cy.get('#creditCardNumber').clear().type(creditCardNumber);
  cy.get('#creditCardMonth').clear().type(creditCardMonth);
  cy.get('#creditCardYear').clear().type(creditCardYear);
  cy.get('#nameOnCard').clear().type(nameOnCard);
  cy.contains('Purchase Flight').click();
}

export function ConfirmPurchase() {
  cy.contains('Thank you for your purchase today!');
  cy.get('tbody>tr').eq(0).should('contain', 'Id')
  cy.get('tbody>tr').eq(0).get('td').eq(1).should('have.length.gt', 0);
}