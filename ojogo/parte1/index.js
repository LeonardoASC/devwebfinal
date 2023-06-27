var valoresEscondidos = [];
var quadradosClicados = 0;

function gerarValoresEscondidos() {
    for (var i = 0; i < 4; i++) {
        valoresEscondidos.push(Math.floor(Math.random() * 10));
    }
}

function exibirValorQuadrado(quadrado) {
    var square = document.getElementById("square" + quadrado);
    square.innerHTML = valoresEscondidos[quadrado - 1];
    square.style.backgroundColor = "green";
    square.style.cursor = "default";
    square.onclick = null;
    quadradosClicados++;
}

function verificarCodigo() {
    if (quadradosClicados < 4) {
        alert("Você precisa encontrar os 4 números antes de abrir a porta.");
        return;
    }

    var codigoInput = document.getElementById("codeInput").value;
    var codigo = codigoInput.split(" ").map(Number);

    if (codigo.length !== 4) {
        alert("Digite os 4 números separados por espaços.");
        return;
    }

    var codigoCorreto = true;
    for (var i = 0; i < 4; i++) {
        if (codigo[i] !== valoresEscondidos[i]) {
            codigoCorreto = false;
            break;
        }
    }

    if (codigoCorreto) {
        alert("Parabéns! Você abriu a porta!");
        window.location.href = "../parte2/index.html";
    } else {
        alert("Código incorreto. Tente novamente.");
    }
}

gerarValoresEscondidos();

// Adicionando evento de clique aos quadrados
document.getElementById("square1").onclick = function() {
    exibirValorQuadrado(1);
};
document.getElementById("square2").onclick = function() {
    exibirValorQuadrado(2);
};
document.getElementById("square3").onclick = function() {
    exibirValorQuadrado(3);
};
document.getElementById("square4").onclick = function() {
    exibirValorQuadrado(4);
};