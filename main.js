  function main() {
    var tabuada = Number(document.getElementById("tab").value)
    var vezes = Number(document.getElementById("vz").value)
    var res = document.getElementById("res")

    var controle = vezes

    vezes = 1

    alert(tabuada + vezes)

    while (vezes <= controle) {
        res.innerHTML += `<br> <p>${tabuada} X ${vezes} = ${tabuada * vezes}</p>`
        vezes++
    }
}
