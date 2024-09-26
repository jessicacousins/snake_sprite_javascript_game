window.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "ArrowUp") Snake.moveUp();
  else if (event.key === "ArrowDown") Snake.moveDown();
  else if (event.key === "ArrowLeft") Snake.moveLeft();
  else if (event.key === "ArrowRight") Snake.moveRight();
});

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = GAME.width;
  canvas.height = GAME.height;
  ctx.font = "40px Impact";
  ctx.textBaseline = "top";

  console.log(Snake);

  canvas.addEventListener("click", () => {
    if (GAME.gameOver) {
      resetGame();
      GAME.loop = setInterval(animate, 500);
    }
  });
  resetGame();
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Snake.draw(ctx);
    Snake.update();
    Food.draw(ctx);

    if (GAME.gameOver) {
      ctx.textAlign = "center";
      ctx.fillStyle = "black";
      ctx.font = "40px Impact";
      ctx.fillText(
        "Game Over",
        GAME.width * 0.5,
        GAME.height * 0.5,
        GAME.width * 0.95
      );
      ctx.font = "20px Impact";
      ctx.fillText(
        "Click Here To Restart",
        GAME.width * 0.5,
        GAME.height * 0.4,
        GAME.width * 0.95
      );
      clearInterval(GAME.loop);
    }
  }
  GAME.loop = setInterval(animate, 500);
});
