describe("Tables", () => {
    beforeEach(() => {
        cy.visit("/tables.html")
    })

    it("Test 01", () => {
        cy.findTable(["Column 1", "Column 2"]).then((tbl) => {
            cy.log(Cypress.$(tbl).html())
        })
    })

    it("Test 02", () => {
        cy.findTable(["Column A"]).then((tbl) => {
            cy.log(Cypress.$(tbl).html())
        })
    })

    it("Test 03", () => {
        cy.findTable(["Column A", "Column B"]).then((tbl) => {
            cy.log(Cypress.$(tbl).html())
        })
    })

    it("Test 04", () => {
        cy.findTable(["Column 2", "Column B"]).then((tbl) => {
            cy.log(Cypress.$(tbl).html())
        })
    })
})