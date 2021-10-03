import {Given,When,Then, And} from 'cypress-cucumber-preprocessor/steps';

Given('User opens url {string}',(url)=>{
    cy.visit(url); 
});

When('User types in {string}',(bookName)=>{
    cy.get('input[id="searchBox"]').type(bookName);
});

And('User clicks on {string}',(book)=>{
    cy.contains(book).click({force:true});
});

Then('User should see title {string}',(title)=>{
    cy.get('label[id="userName-value"]').should('be.visible');
});

And('User should see author {string}',(author)=>{
    cy.get('label[id="userName-value"]').should('be.visible');
});

And('User should see publisher {string}',(publisher)=>{
    cy.get('label[id="userName-value"]').should('be.visible');
})