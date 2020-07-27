describe('test inputs and submit form', function(){
    beforeEach(function() {
        cy.visit('http://localhost:3000/')  
    })
   it('Add test to inputs and submitm form',function(){
    cy.get('input[name="username"]')
    .type("stacey")
    .should("have.value","stacey")
    cy.get("input[name='password']")
    .type('password')
    .should('have.value','password')
    .click()
   })
});