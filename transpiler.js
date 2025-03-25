
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
    ["↘️", "else"],
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
    ["🔦", "find"],
    ["🛜", "findIndex"],
    ["🌙", "findLast"],
    ["🗿", "findLastIndex"],
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
    ["🌪️", "NaN"],
    ["♾️", "Infinity"],
    ["🔩", "toFixed"],
    ["🐂", "Boolean"],
    ["✅", "true"],
    ["❌", "false"]
    ["🌑", "null"],
    ["📋", "[]"],
    ["🗂️", "Array"],
    ["🕹️", "push"],
    ["📤", "from"],
    ["🗝️", "keys"],
    ["🚚", "shift"],
    ["↩️", "unshift"],
    ["📑", "copyWithin"],
    ["🤝", "with"],
    ["🌌", "..."],
    ["📐", "isArray"],
    ["🧵", "join"],
    ["🎈", "pop"],
    ["🛖", "flat"],
    ["🛤️", "flatMap"],
    ["🥽", "filter"],
    ["⚙️", "reduce"],
    ["↪️", "reduceRight"],
    ["🌍", "every"],
    ["✨", "some"],
    ["➔", "=>"],
    ["🧬", "splice"],
    ["🔀", "toSpliced"],
    ["📚", "sort"],
    ["🧹", "toSorted"],
    ["🔄", "reverse"],
    ["🔃", "toReversed"],
    ["🍃", "forEach"],
    ["🗺️", "map"],
    ["⚖️", "Math"],
    ["🎲", "random"],
    ["🏠", "floor"],
    ["🌿", "min"],
    ["🌟", "max"],
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
    ["⭕", "()"],
    ["🕰️", "toDateString"],
    ["🌐", "toUTCString"],
    ["📈", "toISOString"],
    ["🔧", "parse"],
    ["🗓️", "getFullYear"],
    ["🎑", "getMonth"],
    ["📜", "getDate"],
    ["🌤️", "getDay"],
    ["⏰", "getHours"],
    ["🕒", "getMinutes"],
    ["⏳", "getSeconds"],
    ["⏱️", "getMilliseconds"],
    ["🕐", "getTime"],
    ["🕯️", "getUTCDate"],
    ["🌋", "getUTCFullYear"],
    ["🛤️", "getUTCMonth"],
    ["🪐", "getUTCDay"],
    ["🌎", "getUTCHours"],
    ["🕊️", "getUTCMinutes"],
    ["🌠", "getUTCSeconds"],
    ["💫", "getUTCMilliseconds"],
    ["🧭", "getTimezoneOffset"],
    ["🖋️", "setDate"],
    ["🌳", "setFullYear"],
    ["🕓", "setHours"],
    ["🕥", "setMinutes"],
    ["⏲️", "setMilliseconds"],
    ["🌾", "setMonth"],
    ["🕦", "setSeconds"],
    ["🕛", "setTime"],
    ["🧮", "E"],
    ["🥧", "PI"],
    ["➗", "SQRT2"],
    ["🟫", "SQRT1_2"],
    ["💡", "LN2"],
    ["🔟", "LN10"],
    ["🔣", "LOG2E"],
    ["⏺️", "LOG10E"],
    ["🔵", "round"],
    ["⬆️", "ceil"],
    ["🧳", "trunc"],
    ["🪧", "sign"],
    ["💣", "pow"],
    ["🟦", "sqrt"],
    ["🧲", "abs"],
    ["🍎", "sin"]
    ["🔔", "cos"],
    ["🪵", "log"],
    ["🥈", "log2"],
    ["🥈", "log2"],
    ["🔬", "log10"],
    ["🔕", "acos"],
    ["🎐", "acosh"],
    ["✝️", "asin"],
    ["☦️", "asinh"],
    ["⤴️", "atan"],
    ["🏹", "atan2"],
    ["🌊", "atanh"],
    ["🧊", "cbrt"],
    ["🏴‍☠️", "ceil"],
    ["🌉", "cosh"],
    ["🚀", "exp"],
    ["〰️", "sinh"],
    ["🎢", "tanh"]














]

function transpilar(codigo) {
    let novo_codigo = codigo;

    const mapa = new Map(dicionario.map(([key, value]) => [key, value]));

    const regex = new RegExp([...mapa.keys()].join('|'), 'g');

    novo_codigo = novo_codigo.replace(regex, match => mapa.get(match));

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