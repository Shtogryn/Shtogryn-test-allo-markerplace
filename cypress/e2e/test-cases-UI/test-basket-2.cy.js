import HomePage from '../page-objects/home-page.js';
import NoteBooksPage from '../page-objects/notebooks-page.js';

const homePage = new HomePage();
const noteBooksPage = new NoteBooksPage();

beforeEach(() => {
    console.log("STARTUP")
    cy.visit('');
});

describe('Summary: Add items to the basket', () => {
    it('Verify that the marketplace URl is correct”', () => {
        console.log('Verify that the marketplace URl is correct');
        cy.url().should('be.eq', Cypress.config('baseUrl'));
        cy.title().should('include', 'АЛЛО - національний маркетплейс із найширшим асортиментом');
        console.log("Proceed to 'Ноутбуки, ПК та планшети' category");
        homePage.navigateToCategory('Ноутбуки, ПК та планшети');
        homePage.proceedToSubCategory('Ноутбуки');
        noteBooksPage.setReadyForDeliveryOption();
        noteBooksPage.setDiscountedOption();
        noteBooksPage.setPrices(15000, 30000);
        noteBooksPage.sortElements('від дорогих до дешевих');
        noteBooksPage.choseElement("Ноутбук Mi RedmiBook 15 i3/8/256 (JYU4436ID) (У1)");
        /*
        console.log("Proceed to 'Смартфони та телефони' category");
        homePage.navigateToCategory('Смартфони та телефони');
        homePage.proceedToSubCategory('Смарт-годинники');
        //choseElement("Смарт-годинник Amazfit Bip 3 Pink");
        // cy.get('.product').each((product) => {
        //     expect(product.title).to.contain('iPhone 13')
        // });
        //*/
    });
});