
describe("Index", () => {
    beforeEach(() => {
        cy.visit("/shadow.html")
    })

    it("Test 01", () => {
        cy.get("p").each((el, idx, l) => {
            cy.log(idx+". "+Cypress.$(el).text())
        })
    })

    it("Test 02", () => {
        Cypress.$("p").each((idx, el) => {
            cy.log(idx+". "+Cypress.$(el).text())
        })
    })
})