describe("Index", () => {
    beforeEach(() => {
        cy.visit("/index.html")
    })

    it("Test 01", () => {
        cy.get("div#content").within(() =>

            cy.waitUntil(() => cy.get("p", {timeout: 30000}).should("contain.text", "Hello"),
                {
                    errorMsg: "No p",
                    timeout: 10000,
                    interval: 200,
                    verbose: true,
                    log: true,
                    customCheckMessagez: "Checking"
                }
            )
        )
    })

    it("Test 02", () => {
        cy.get("div#content").within(() =>

            cy.waitUntil(() => cy.get("p", {timeout: 30000}).should("contain.text", "Ok"),
                {
                    errorMsg: "No p",
                    timeout: 10000,
                    interval: 200,
                    verbose: true,
                    log: true,
                    customCheckMessagez: "Checking"
                }
            )
        )
    })
})