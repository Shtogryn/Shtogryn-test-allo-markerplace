export default class HomePage {

    navigateToCategory(marketplace) {
        cy.wait(2000).get('[class="mh-catalog-btn"]').contains(marketplace).click();
        return this;
    }
    proceedToNotebooksPage() {
        cy.get(':nth-child(1) > .portal-group__title > .portal-group__title-link').click();
    }
    proceedToSubCategory(title) {
        cy.get('li[class="portal-category__item"] a[class="portal-category__item-link"]')
            .contains(title).click().wait(2000);
    }
    search(input) {
        cy.get('#search-form__input').type(input);
        cy.get('.search-form__submit-button').click();
    }
}