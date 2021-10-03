import {Given,When,Then, And} from 'cypress-cucumber-preprocessor/steps';

Given('User opens url {string}',(url)=>{
    cy.visit(url);
});

When('User type in firstName {string}',(firstName)=>{
    cy.get('input[id="firstName"]').type(firstName);
});

And('User type in lastName {string}',(lastName)=>{
    cy.get('input[id="lastName"]').type(lastName);
});

And('User type in email {string}',(email)=>{
    cy.get('input[id="userEmail"]').type(email);
});

And('User selects gender {string}',(gender)=>{
    if(gender==='Male'){
        cy.get('input[id="gender-radio-1"]').click({force:true});
    }
    else if(gender==='Female'){
        cy.get('input[id="gender-radio-2"]').click({force:true});
    }
    else{
        cy.get('input[id="gender-radio-3"]').click({force:true});
    }
});

And('User type in mobile number {string}',(number)=>{
    cy.get('input[id="userNumber"]').type(number);
});

And('User type in dob {string}',(dob)=>{
    cy.get('input[id="dateOfBirthInput"]').click();
    cy.xpath('//div[contains(@class,"react-datepicker__day--012")]').click();
});

And('User type in subjets {string}',(subjects)=>{
    cy.get('input[id="subjectsInput"]').type(subjects);
});

And('User selects hobbies as {string}',(hobbies)=>{
    if(hobbies==='Sports'){
        cy.get('input[id="hobbies-checkbox-1"]').click({force:true});
    }
    else if(hobbies==='Reading'){
        cy.get('input[id="hobbies-checkbox-2"]').click({force:true});
    }
    else{
        cy.get('input[id="hobbies-checkbox-3"]').click({force:true});
    }
});

And('User types in address {string}',(address)=>{
    cy.get('textarea[id="currentAddress"]').type(address);
});

And('User selects state as {string}',(state)=>{
   // cy.get('input[id="react-select-3-input"]').type(`${state}{downarrow}{enter}{force:true}`);
});

And('User selects city as {string}',(city)=>{
  //  cy.get('input[id="react-select-4-input"]').type(city,{downarrow},{enter});
});

When('User clicks submit',()=>{
    cy.get('button[id="submit"]').click();
});

Then('User should see {string}',(message)=>{
   // cy.get('div[id="example-modal-sizes-title-lg"]').should
   cy.contains(message).should('be.visible');
})