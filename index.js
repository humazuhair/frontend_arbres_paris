async function get() {
    let data = await fetch("http://localhost:8081/backend-1.0/api/arrondissement")
    let json = await data.json()

    let elementArr = document.querySelector("#arrondissements")
    json.forEach(el => {
        let arr = document.createElement("span")
        arr.innerText = el[0] + " "
        let count = document.createElement("span")
        count.innerText = el[1]
        let hr = document.createElement("hr")
        elementArr.appendChild(arr)
        elementArr.appendChild(count)
        elementArr.appendChild(hr)

    })
}

let input = document.querySelector("#genre")
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        genre(input.value)
    }
});

async function genre(text) {
    let data = await fetch("http://localhost:8081/backend-1.0/api/count-genre/" + text)
    let resultEl = document.querySelector("#result_genre")
    let json = await data.json()
    if (json.error) {
        resultEl.innerText = json.error
    } else {
        resultEl.innerText = json
    }
}
