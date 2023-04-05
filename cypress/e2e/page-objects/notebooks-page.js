import BasePage from "./base-page";

export default class NoteBooksPage extends BasePage {

    setReadyForDeliveryOption() {
        cy.get('[data-id="in_stock"]').click();
    }

    setDiscountedOption() {
        cy.get('[data-id="markdown"]').click();
    }

    setPrices(minPrice, maxPrice) {
        cy.get('.f-range__form > :nth-child(1)').clear();
        cy.get('.f-range__form > :nth-child(1)').type(minPrice.toString());
        cy.get('.f-range__form > :nth-child(2)').clear();
        cy.get('.f-range__form > :nth-child(2)').type(maxPrice.toString());
    }
    sortElements(sortBy) {
        cy.get('div[class="sort-by__select"]').trigger('mouseover');
        cy.contains(sortBy).click();
    }
}