import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps';

Given('User opens url {string}',url=>{
    cy.visit(url);
})
When('User searches for {string}',text=>{
    cy.get('#search_form_input_homepage').type(`${text}{enter}`);
})
Then('User can see {string}',text=>{
    cy.xpath(`//body//*[text()="${text}"]`)
      .should('have.length',1);
    cy.go('back');
   // cy.go(-1);
})