Cypress.Commands.add("findTable", (headers, checkCount) => {
    if (checkCount == undefined) {
        checkCount = 1
    }
    else {
        checkCount++
    }

    var headersLowercase = headers.map((h) => h.toLowerCase().trim())

    cy.get("table").then(($tbl) => {
        let tableFound = false

        $tbl.each((tblIndex, $tblEl) => {
            let columnsFound = 0
            Cypress.$($tblEl).find("th").each((thIndex, $thEl) => {
                let headerText = Cypress.$($thEl).text().trim().toLocaleLowerCase()
                if (headersLowercase.indexOf(headerText) != -1) {
                    columnsFound++
                }
            })
            if (columnsFound == headers.length) {
                tableFound = $tblEl
                return false
            }
        })

        // After the loop perform the logic to see how to proceed.
        if (!tableFound) {
            if (checkCount < 10) {
                cy.wait(1000, {"log": false})
                cy.findTable(headersLowercase, checkCount)
            }
            else {
                throw new Error("Could not find the table you wanted.")
            }
        }
        else {
            return tableFound
        }
    })
})

Cypress.Commands.add("findRow", {prevSubject: 'element'}, (element, columnValues, checkCount) => {
    if (checkCount == undefined) {
        checkCount = 1
    }
    else {
        checkCount++
    }

    cy.get(element).find("thead").then(($thead) => {
        cy.log($thead.text())
    })
})
