import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useEffect, useRef } from "react";

function resizeCanvasToDisplaySize(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
}

function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}

function drawCircle(ctx, x, y, frameCount) {
  ctx.fillStyle = "#00f";
  ctx.beginPath();
  ctx.arc(x, y, 50 + 100 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.fill();
}

const CanvasBackground = (props) => {
  const canvasRef = useRef(null);

  const draw = (canvas, ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawCircle(ctx, canvas.width / 2, canvas.height / 2, frameCount);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // resizeCanvasToDisplaySize(canvas);
    resizeCanvas(canvas);

    let frameCount = 0;
    let animationFrameId;

    ctx.filter = "blur(40px)";

    const render = () => {
      frameCount++;
      draw(canvas, ctx, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="bg-canvas"
      className="fixed top-0 left-0 w-screen h-screen z-[-1]"
      ref={canvasRef}
      {...props}
    ></canvas>
  );
};

export default CanvasBackground;
