export default class BasePage {

    choseElement(title) {
        cy.get(`a[title="${title}"]`).click();
    }
    waitForResult() {
        cy.get('span.f-popup__btn-message').click().wait(2000);
        return this;
    }
    addFirstItemToTheBasket() {
        cy.get('div[class="product-card"]').first().then(($card) => {
            let name = $card.find('.product-card__title').text();
            cy.wrap(name).as('ProductName');

            cy.wrap($card).find('.v-btn--cart').trigger('mouseover').wait(1000).click();
        });

        cy.get('.checkout_modal').then($modal => {
            cy.get('@ProductName').then(name => {
                cy.wrap($modal).should('contain', name);
            });
        });
        return this;
    }
    closeItem() {
        cy.get('.checkout_modal').then($modal => {
            if ($modal.is(':visible')) {
                cy.wrap($modal).find('[class="comeback"]').click();
            }
        });
        return this;
    }
    closeRemove() {
        cy.get('.vi__close.remove').each(($el) => {
            cy.wrap($el).first().click();
        })
        return this;
    }
    navigateToBasket() {
        cy.get('.mh-cart > .mh-button').click().wait(2000);
    }
}