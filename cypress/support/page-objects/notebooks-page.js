import BasePage from "./base-page";

export default class NoteBooksPage extends BasePage {

    setReadyForDeliveryOption() {
        cy.get('[data-id="in_stock"]').click();
        this.waitForResult();
    }

    setDiscountedOption() {
        cy.get('[data-id="markdown"]').click();
        this.waitForResult();
    }

    setPrices(minPrice, maxPrice) {
        cy.get('.f-range__form > :nth-child(1)').clear().type(minPrice.toString()).wait(2000);
        cy.get('.f-range__form > :nth-child(2)').clear().type(maxPrice.toString()).wait(2000);
    }
    sortElements(sortBy) {
        cy.get('div[class="sort-by__select"]').trigger('mouseover');
        cy.contains(sortBy).click();
    }
}