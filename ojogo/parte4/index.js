var player = document.getElementById("player");
var key = document.getElementById("key");
var door = document.getElementById("door");
var enemy = document.getElementById("enemy");

var isKeyPressed = {};
var playerPosition = { x: 0, y: 0 };
var enemyPosition = { x: 400, y: 220 };
var hasKey = false;
var gameEnded = false;

document.addEventListener("keydown", function(event) {
  isKeyPressed[event.key] = true;
});

document.addEventListener("keyup", function(event) {
  isKeyPressed[event.key] = false;
});

function updatePlayerPosition() {
  if (isKeyPressed.ArrowUp && playerPosition.y > 0) {
    playerPosition.y -= 5;
  }
  if (isKeyPressed.ArrowDown && playerPosition.y < 280) {
    playerPosition.y += 5;
  }
  if (isKeyPressed.ArrowLeft && playerPosition.x > 0) {
    playerPosition.x -= 5;
  }
  if (isKeyPressed.ArrowRight && playerPosition.x < 480) {
    playerPosition.x += 5;
  }

  player.style.top = playerPosition.y + "px";
  player.style.left = playerPosition.x + "px";
}

function updateEnemyPosition() {
  if (gameEnded) return;

  var playerCenterX = playerPosition.x + player.offsetWidth / 2;
  var playerCenterY = playerPosition.y + player.offsetHeight / 2;
  var enemyCenterX = enemyPosition.x + enemy.offsetWidth / 2;
  var enemyCenterY = enemyPosition.y + enemy.offsetHeight / 2;

  if (playerCenterX < enemyCenterX) {
    enemyPosition.x -= 3;
  } else {
    enemyPosition.x += 3;
  }

  if (playerCenterY < enemyCenterY) {
    enemyPosition.y -= 3;
  } else {
    enemyPosition.y += 3;
  }

  enemy.style.top = enemyPosition.y + "px";
  enemy.style.left = enemyPosition.x + "px";
  if (isColliding(player, enemy)) {
    alert("Você foi pego pelo inimigo! Fim de jogo.");
    gameEnded = true;
    // Adicione o código aqui para lidar com a derrota
  }
}

function checkCollision() {
  if (!hasKey && isColliding(player, key)) {
    hasKey = true;
    key.style.display = "none";
    alert("Você pegou a chave!");
  }

  if (hasKey && isColliding(player, door)) {
    alert("Parabéns! Você escapou da sala!");
    gameEnded = true;
    window.location.href = "../TelaFim/index.html";
    // Adicione o código aqui para passar para a próxima tela ou realizar alguma ação
  }

  if (!gameEnded) {
    updateEnemyPosition();
    checkEnemyCollision();
  }
}

function resetGame() {
    // Resete as variáveis do jogo
    hasKey = false;
    gameEnded = false;
    playerPosition.x = 0;
    playerPosition.y = 0;
    enemyPosition.x = 400;
    enemyPosition.y = 0;
  
    // Exiba novamente a chave
    key.style.display = "block";
  
    // Reinicie o loop do jogo
    gameLoop();
  }



function checkEnemyCollision() {
  if (isColliding(player, enemy)) {
    alert("Você foi pego pelo inimigo! Fim de jogo.");
    gameEnded = true;
    location.reload(); 
  }
}

function isColliding(elemento1, elemento2) {
  var rect1 = elemento1.getBoundingClientRect();
  var rect2 = elemento2.getBoundingClientRect();

  return (
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top &&
    rect1.left < rect2.right &&
    rect1.right > rect2.left
  );
}

function gameLoop() {
  updatePlayerPosition();
  checkCollision();
  requestAnimationFrame(gameLoop);
}

gameLoop();
