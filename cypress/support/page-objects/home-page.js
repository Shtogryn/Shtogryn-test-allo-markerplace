export default class HomePage {

    navigateToCategory(marketplace) {
        cy.wait(2000).get('[class="mh-catalog-btn"]').contains(marketplace).click();
        return this;
    }

    proceedToSubCategory(title) {
        cy.get('li[class="portal-category__item"] a[class="portal-category__item-link"]')
            .contains(title).click().wait(2000);
    }

    search(input) {
        cy.get('#search-form__input').type(input);
        cy.get('.search-form__submit-button').click();
    }

    login(number, password) {
        cy.get('.mh-profile').click();
        cy.get('.auth__enter-password > .a-button > .a-button__text').click().wait(2000);
        cy.get('[name="phoneEmail"]').type(number);
        cy.get('[name="password"]').type(password);
        cy.get('.a-form > .a-button > .a-button__text').click().wait(5000);
    }
}