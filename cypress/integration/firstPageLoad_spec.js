/// <reference types="cypress" />

describe('Load website', () => {
    it('Visits the BlazeDemo website', () => {
        cy.visit('https://blazedemo.com/')
    });
    })