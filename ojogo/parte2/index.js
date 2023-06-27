var hasKey = false;

    document.getElementById("key").addEventListener("click", function() {
      if (!hasKey) {
        hasKey = true;
        alert("Você encontrou a chave!");
        this.style.display = "none";
      } else {
        alert("Você já pegou a chave!");
      }
    });

    document.getElementById("door").addEventListener("click", function() {
      if (hasKey) {
        alert("Parabéns! Você usou a chave para abrir a porta e escapar da sala!");
          window.location.href = "../parte3/index.html";
      } else {
        alert("A porta está trancada. Você precisa encontrar a chave para abri-la.");
      }
    });