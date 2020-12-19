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

const makeBody = (columns) => {
    let tbody = document.createElement("tbody")
    let tr = document.createElement("tr")
    for (let column in columns) {
        let td = document.createElement("td")
        td.innerHTML = column
        tr.appendChild(td)
    }
    tbody.appendChild(tr)
    return tbody
}

const makeTable = (id, header, row) => {
    let div = document.getElementById(id)
    let table = document.createElement("table")
    table.appendChild(makeHeader(header))
    table.appendChild(makeBody(row))
    div.appendChild(table)
}

const startUp = () => {
    setTimeout(() => makeTable("contentB", ["Column A"], ["Row 1, Column A"]), 5000)
}