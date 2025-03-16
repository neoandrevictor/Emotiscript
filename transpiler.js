
function translocar(codigo) {
    document.getElementById("transpilado").value = transpilar(codigo);
}

function executar() {
    eval(document.getElementById("transpilado").value);
}

let dicionario = [
    ["🛠️", "function"],
    ["📄", "document"],
    ["🔖", "getElementById"],
    ["🩲", "innerHTML"],
    ["🧦", "innerText"],
    ["🪶", "write"],
    ["📔", "src"],
    ["🖌️", "style"],
    ["🪟", "display"],
    ["📅", "Date"],
    ["⭕", "()"]
]

function transpilar(codigo) {

    let novo_codigo = codigo;

    for (let k = 0; k < dicionario.length; k++) {
        let regex = new RegExp(dicionario[k][0], 'g');
        novo_codigo = novo_codigo.replace(regex, dicionario[k][1]);

    }


    return novo_codigo;

}

function codigos() {
    let codigosDiv = document.getElementById("codigos");

    for (let k = 0; k < dicionario.length; k++) {
        let p = document.createElement("p");
        p.innerHTML = "<button onclick='digita(this.innerText)'>" + dicionario[k][0] + "</button> - " + dicionario[k][1];
        codigosDiv.appendChild(p);

    }
}

codigos();

function digita(emoji) {
    document.getElementById("codigo").value = document.getElementById("codigo").value + emoji;
    document.getElementById("transpilado").value = transpilar(document.getElementById("codigo").value);
}