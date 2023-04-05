export default class BasePage {

    choseElement(title) {
        cy.get(`a[title="${title}"]`).click(20);
    }
}