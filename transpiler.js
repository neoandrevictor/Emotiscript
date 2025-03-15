
function translocar(codigo) {
    document.getElementById("transpilado").value = transpilar(codigo);
}

function executar() {
    eval(document.getElementById("transpilado").value);
}

function transpilar(codigo) {

    let novo_codigo = codigo;

    novo_codigo = novo_codigo.replace(/🛠️/g, "function");
    novo_codigo = novo_codigo.replace(/📄/g, "document");
    novo_codigo = novo_codigo.replace(/🔖/g, "getElementById");
    novo_codigo = novo_codigo.replace(/🩲/g, "innerHTML");
    novo_codigo = novo_codigo.replace(/📔/g, "src");
    novo_codigo = novo_codigo.replace(/🖌️/g, "style");
    novo_codigo = novo_codigo.replace(/🪟/g, "display");
    novo_codigo = novo_codigo.replace(/📅/g, "Date");
    novo_codigo = novo_codigo.replace(/⭕/g, "()");

    return novo_codigo;

}

