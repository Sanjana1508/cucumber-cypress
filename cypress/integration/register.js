import HomePage from '../support/pageObjects/HomePage';

describe('Automation Test Suite ', function() {

    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it.only('Cypress Test Case', function() {

    const homePage=new HomePage();
    cy.visit('https://shop.demoqa.com/my-account/');
    homePage.getUserName().type(this.data.Username);
    homePage.getEmail().type(this.data.Email);
    homePage.getPassword().type(this.data.NewPassword);
    homePage.getRegisterButton().click();

    homePage.getLoginUserName().should('have.value',this.data.Username);

    // this.data.productName.forEach(function(element){
    //     cy.selectProduct(element[0],element[1],element[2]);

    // })
})
})