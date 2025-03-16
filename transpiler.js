
function translocar(codigo) {
    document.getElementById("transpilado").value = transpilar(codigo);
}

function executar() {
    eval(document.getElementById("transpilado").value);
}

let dicionario = [
    ["📦", "let"],
    ["🗃️", "var"],
    ["🔒", "const"],
    ["➡️", "if"],
    ["🎚️", "switch"],
    ["🔂", "for"],
    ["⬅️", "return"],
    ["🎰", "try"],
    ["🛠️", "function"],
    ["🫗", "delete"],
    ["📢", "alert"],
    ["🖥️", "console.log"],
    ["🖨️", "window.print"],
    ["📄", "document"],
    ["🔖", "getElementById"],
    ["🩲", "innerHTML"],
    ["🧦", "innerText"],
    ["🪶", "write"],
    ["📔", "src"],
    ["🖌️", "style"],
    ["🪟", "display"],
    ["👉", "this"],
    ["💰", "values"],
    ["🚪", "entries"],
    ["📴", "of"],
    ["🔪", "JSON"],
    ["🎻", "stringify"],
    ["🥚", "new"],
    ["🎁", "Object"],
    ["📅", "Date"],
    ["🔢", "BigInt"],
    ["🪢", "string"],
    ["📏", "length"],
    ["🍫", `\\\\`],
    ["😅", `\\\'`],
    ["😂", `\\\"`],
    ["🔙", `\\\b`],
    ["⏬", `\\\f`],
    ["🪡", `\\\n`],
    ["🔽", `\\\r`],
    ["🔜", `\\\t`],
    ["🔝", `\\\v`],
    ["💯", "number"],
    ["🐂", "boolean"],
    ["🌑", "null"],
    ["📋", "[]"],
    ["🗄️", "{}"],
    ["🕳️", "undefined"],
    ["▫️", "''"],
    ["⬜", '""'],
    ["💥", "**"],
    ["➕", "++"],
    ["➖", "--"],
    ["🟰", "=="],
    ["♊", "==="],
    ["❗", "!="],
    ["‼️", "!=="],
    ["🐋", ">="],
    ["🐜", "<="],
    ["🧑‍🤝‍🧑", "&&"],
    ["⏸️", "||"],
    ["👁️", "typeof"],
    ["👁️‍🗨️", "instanceof"],
    ["⏪", "<<"],
    ["⏩", ">>"],
    ["⏯️", ">>>"],
    ["⚔️", "+="],
    ["🏹", "-="],
    ["🥊", "*="],
    ["🍕", "/="],
    ["🧀", "/="],
    ["🧨", "**="],
    ["🙈", "<<="],
    ["🙊", ">>="],
    ["🙉", ">>>="],
    ["🐕", "&="],
    ["🐀", "^="],
    ["🐈", "|="],
    ["🐺", "&&="],
    ["🦁", "||="],
    ["🦭", "??="],
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
        p.innerHTML = "<button class='emojiButton' onclick='digita(this.innerText)'>" + dicionario[k][0] + "</button>" + dicionario[k][1];
        codigosDiv.appendChild(p);

    }
}

codigos();

function digita(emoji) {
    document.getElementById("codigo").value = document.getElementById("codigo").value + emoji;
    document.getElementById("transpilado").value = transpilar(document.getElementById("codigo").value);
}