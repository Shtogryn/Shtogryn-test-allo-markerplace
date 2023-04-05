import HomePage from '../page-objects/home-page.js';
import NoteBooksPage from '../page-objects/notebooks-page.js';

const homePage = new HomePage();
const noteBooksPage = new NoteBooksPage();

beforeEach(() => {
    console.log("STARTUP")
    cy.visit('');
});

describe('Summary: Verify if the price filter working correctly for the following marketplaces', () => {
    it('Verify if the price filter working correctly for the Allo marketplaces', () => {
        console.log('Verify that the marketplace URl is correct');
        cy.url().should('be.eq', Cypress.config('baseUrl'));
        cy.title().should('include', 'АЛЛО - національний маркетплейс із найширшим асортиментом')
        console.log("Proceed to Notebooks category");
        homePage.navigateToCategory('Ноутбуки, ПК та планшети');
        homePage.proceedToSubCategory('Ноутбуки');

        console.log("Set up filter option: " +
            +'- "Готовий до відправки"\n' +
            +'- "Уцінений товар" \n' +
            +'- "Prices "15000", "26000"\n');
        noteBooksPage.setReadyForDeliveryOption();
        noteBooksPage.setDiscountedOption();
        noteBooksPage.setPrices("15000", "26000");
        noteBooksPage.sortElements('від дорогих до дешевих');
        /*
        // cy.get('.product').each((product) => {
        //     expect(product.title).to.contain('iPhone 13')
        // });
        //*/
    });
});