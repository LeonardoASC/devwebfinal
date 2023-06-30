var charadas = [
  { pergunta: "Qual é o animal mais antigo do mundo?", resposta: "a" },
  { pergunta: "O que é que quanto maior menos se vê?", resposta: "a" },
  { pergunta: "O que é o que é, uma casinha branca com muitos bichinhos dentro?", resposta: "a" },
  { pergunta: "Qual é a palavra que os homens usam frequentemente mas as mulheres odeiam?", resposta: "a" },
  { pergunta: "O que é que sempre se quebra ao ser falado?", resposta: "a" }
];

var charadaIndex = 0;
var respostas = [];

function verificarResposta() {
  var inputResposta = document.getElementById("resposta");
  var resposta = inputResposta.value;

  if(resposta.toLowerCase() === charadas[charadaIndex].resposta.toLowerCase()) {
    respostas.push({ pergunta: charadas[charadaIndex].pergunta, resposta: resposta });
    charadaIndex++;

    if (charadaIndex < charadas.length) {
      inputResposta.value = ""; // Limpa o campo de resposta
      exibirCharada();
    } else {
      mostrarRespostas();
      setTimeout(function() {
        window.location.href = "../parte4/index.html";
        alert('Parabens voce passou!');
      }, 5000); // Aguarda 200ms antes de exibir o alert
    }
  } else {
    alert("Resposta incorreta. Tente novamente!");
  }
}

function exibirCharada() {
  var charadaContainer = document.getElementById("charadaContainer");
  var charada = charadas[charadaIndex].pergunta;

  charadaContainer.innerHTML = `
    <p id="charada">${charada}</p>
    <label for="resposta"></label>
    <input type="text" id="resposta" required>
  
    <button onclick="verificarResposta()">Verificar</button>
  `;
}

function mostrarRespostas() {
  var respostasDiv = document.getElementById("respostas");
  respostasDiv.innerHTML = "";

  respostas.forEach(function(item) {
    var p = document.createElement("p");
    p.innerHTML = "<strong>" + item.pergunta + ":</strong> " + item.resposta;
    respostasDiv.appendChild(p);
  });
}

// Inicializa a exibição da primeira charada
exibirCharada();