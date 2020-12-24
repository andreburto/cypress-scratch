const makeHeader = (columnHeaders) => {
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    for (let header of columnHeaders) {
        let th = document.createElement("th")
        th.innerHTML = header
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    return thead
}

const makeRow = (columns) => {
    let tr = document.createElement("tr")
    for (let column of columns) {
        let td = document.createElement("td")
        td.innerHTML = column
        tr.appendChild(td)
    }
    return tr
}

const makeTable = (id, header, rows) => {
    let div = document.getElementById(id)
    let table = document.createElement("table")
    let tbody = document.createElement("tbody")
    table.appendChild(makeHeader(header))
    for (row of rows) {
        tbody.appendChild(makeRow(row))
    }
    table.appendChild(tbody)
    div.appendChild(table)
}

const startUp = () => {
    setTimeout(() => makeTable("contentB", ["Column A", "Column B"], [["Row 1, Column A", "Row 1, Column B"], ["Row 2, Column A", "Row 2, Column B"]]), 5000)
}