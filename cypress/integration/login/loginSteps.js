import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('User open {string}',(url)=>{
    cy.visit(url);
});

When('User type in',(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('input[type="email"]').clear();
        cy.get('input[type="email"]').type(element.username);
        cy.get('input[type="password"]').clear();
        cy.get('input[type="password"]').type(element.password);
    });  
});

And('User click on sign in button',()=>{
    cy.get('.button-1').contains('Log in').should('be.visible').click();
});

Then('{string} should be visible',(text)=>{
    cy.contains(text,{timeout:3000}).should('be.visible');
});