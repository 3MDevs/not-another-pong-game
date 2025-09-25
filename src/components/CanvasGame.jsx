import { useEffect, useRef } from "react";

export default function CanvasGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Ball object
    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 10,
      speedX: 4,
      speedY: 4,
    };

    function drawBall() {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
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
    }

    function gameLoop() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawBall();
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
