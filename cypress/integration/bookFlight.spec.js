import { FindFlight, ChooseFlight, PurchaseFlight, ConfirmPurchase } from "../objects/book-flight";

describe('Book your flight', () => {
  beforeEach(function () {
    cy.fixture('flight-details').as('testData');
    cy.visit('https://blazedemo.com/');
  });

  it('Successful booking', () => {
    cy.get('@testData').then((testData) => {
      // Find Flights
      FindFlight(testData.departurePort, testData.destinationPort);

      // Choose flight
      ChooseFlight(testData.departurePort, testData.destinationPort);

      // Purchase flight
      PurchaseFlight(testData.firstName, testData.address, testData.city, testData.state,
        testData.zipCode, testData.cardType, testData.creditCardNumber, testData.creditCardMonth,
        testData.creditCardYear, testData.nameOnCard)

      // Confirm Purchase
      ConfirmPurchase()
    });
  });
})