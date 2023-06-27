
document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var answer = this.value.toLowerCase();
    if (answer === "morcego") {
      document.getElementById("message").textContent = "Resposta correta! Parabéns, você passou para a próxima tela.";
      window.location.href = "../parte4/index.html";
    } else {
      document.getElementById("message").textContent = "Resposta incorreta. Tente novamente.";
      this.value = "";
    }
  }
});