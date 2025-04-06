const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const time = Date.now() * 0.002;
  const x = canvas.width / 2 + Math.sin(time) * 200;
  const y = canvas.height / 2 + Math.cos(time) * 200;

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  requestAnimationFrame(draw);
}

draw();
