
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
    ["🔁", "while"],
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
    ["🔺", "MAX_SAFE_INTEGER"],
    ["🔻", "MIN_SAFE_INTEGER"],
    ["🏔️", "MAX_VALUE"],
    ["🏝️", "MIN_VALUE"],
    ["🌞", "POSITIVE_INFINITY"],
    ["👹", "NEGATIVE_INFINITY"],
    ["📉", "EPSILON"],
    ["🔣", "isInteger"],
    ["🛡️", "isSafeInteger"],
    ["🪢", "String"],
    ["📏", "length"],
    ["🅰", "charAt"],
    ["🎼", "charCodeAt"],
    ["🎯", "at"],
    ["✂️", "slice"],
    ["🪜", "substring"],
    ["🌀", "substring"],
    ["🎩", "toUpperCase"],
    ["🎓", "toLowerCase"],
    ["⚡", "concat"],
    ["🧽", "trim"],
    ["↖", "trimStart"],
    ["↘", "trimEnd"],
    ["🅿", "padStart"],
    ["🆙", "padEnd"],
    ["➿", "repeat"],
    ["♻", "replace"],
    ["📮", "replaceAll"],
    ["🍨", "split"],
    ["📍", "indexOf"],
    ["🔚", "lastIndexOf"],
    ["🔎", "search"],
    ["🧩", "match"],
    ["🧷", "matchAll"],
    ["🔍", "includes"],
    ["👶", "startsWith"],
    ["👴", "endsWith"],
    ["🍫", `\\\\`],
    ["😅", `\\\'`],
    ["😂", `\\\"`],
    ["🔙", `\\\b`],
    ["⏬", `\\\f`],
    ["🪡", `\\\n`],
    ["🔽", `\\\r`],
    ["🔜", `\\\t`],
    ["🔝", `\\\v`],
    ["💯", "Number"],
    ["🔡", "toString"],
    ["🧐", "isNaN"],
    ["🌀", "NaN"],
    ["♾️", "Infinity"],
    ["🔩", "toFixed"],
    ["🐂", "Boolean"],
    ["🌑", "null"],
    ["📋", "[]"],
    ["🗂️", "Array"],
    ["📤", "push"],
    ["🚚", "shift"],
    ["↩️", "unshift"],
    ["📑", "copyWithin"],
    ["📐", "isArray"],
    ["🧵", "join"],
    ["🎈", "pop"],
    ["🛖", "flat"],
    ["🗺️", "flatMap"],
    ["➔", "=>"],
    ["🧬", "splice"],
    ["🔀", "toSpliced"],
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


document.getElementById("qtd").innerText = dicionario.length;