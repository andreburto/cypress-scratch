describe("Tables", () => {
    beforeEach(() => {
        cy.visit("/tables.html")
    })

    // it("Test 01", () => {
    //     cy.waitUntil(() => cy.get("table").should("have.length", 2), {timeout: 10000, interval: 200})
    // })
    //
    // it("Test 02", () => {
    //     cy.findTable(["Column 1", "Column 2"])
    // })

    it("Test 03", () => {
        cy.findTable(["Column A"]).findRow({})
    })
})