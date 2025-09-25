import { useEffect, useRef } from "react";

export default function CanvasGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    document.addEventListener("keydown", (event) => {
  const step = 20; // how fast paddle moves per press
  if (event.key === "ArrowUp") {
    user.y -= step;
  } else if (event.key === "ArrowDown") {
    user.y += step;
  }
});


    // Ball object
    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 10,
      speedX: 4,
      speedY: 4,
    };

    // Paddle settings
const paddleWidth = 10;
const paddleHeight = 100;

let user = {
  x: 0,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: "lime",
};

let ai = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: "red",
};


    function drawBall() {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawPaddle(paddle) {
  ctx.fillStyle = paddle.color;
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}


    function update() {
      ball.x += ball.speedX;
      ball.y += ball.speedY;

      // bounce top/bottom
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.speedY *= -1;
      }

      // bounce left/right
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.speedX *= -1;
      }
      // AI follows the ball (simple)
ai.y += (ball.y - (ai.y + ai.height / 2)) * 0.09;

    }

    function gameLoop() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawBall();
  drawPaddle(user);
  drawPaddle(ai);
      update();

      requestAnimationFrame(gameLoop);
    }

    gameLoop();
  }, []);

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} width={800} height={500} className="border-2 border-gray-700" />
    </div>
  );
}
