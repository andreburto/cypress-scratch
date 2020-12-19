const insertHtml2 = () => {
    let div = document.getElementById("content")
    let p = div.querySelector("p")
    p.innerText = "Hello"
}

const insertHtml = () => {
    let div = document.getElementById("content")
    div.innerHTML = "<p>Ok</p>"
}

const startUp = () => {
    setTimeout(insertHtml, 6000)
    setTimeout(insertHtml2, 9000)
}