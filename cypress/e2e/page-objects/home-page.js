export default class HomePage {

    navigateToCategory(categoryName) {
        cy.get('.mm__list').contains(categoryName).click();
    }
    proceedToNotebooksPage() {
        cy.get(':nth-child(1) > .portal-group__title > .portal-group__title-link').click();
    }
    proceedToSubCategory(title) {
        cy.get(`a[title="${title}"]`).click();
    }
}