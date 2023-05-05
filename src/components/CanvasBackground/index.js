import { useEffect, useRef } from "react";
import Circle from "./circle";
import { resizeCanvasToDisplaySize } from "./canvas-helper";

const CanvasBackground = (props) => {
  const canvasRef = useRef(null);

  const circles = [];

  const init = (canvas) => {
    console.log("Initiate...");
    const circlesConfig = [
      {
        x: Math.floor(canvas.width * 0.9),
        y: Math.floor(canvas.height - canvas.height / 6),
        r: Math.floor(canvas.height / 6),
        color: "#00f",
      },
      {
        x: Math.floor(canvas.width * 0.8),
        y: Math.floor(canvas.height * 0.5),
        r: Math.floor(canvas.height * 0.1),
        color: "#00FFFF",
      },
      {
        x: Math.floor(canvas.width * 0.1),
        y: Math.floor(canvas.height * 0.2),
        r: Math.floor(canvas.height / 10),
        color: "#00f",
      },
      {
        x: Math.floor(canvas.width * 0.2),
        y: Math.floor(canvas.height * 0.1),
        r: Math.floor(canvas.height * 0.05),
        color: "#00FFFF",
      },
    ];

    for (const config of circlesConfig) {
      circles.push(new Circle(config.x, config.y, config.r, config.color));
    }

    console.log("circles=", circles);
  };

  const update = (ctx, frameCount) => {
    for (const circle of circles) {
      circle.update(ctx, frameCount);
    }
  };

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // drawCircle(ctx, canvas.width / 2, canvas.height / 2, frameCount);

    for (const circle of circles) {
      circle.draw(ctx, frameCount);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    /* Resize the canvas to match screen density */
    resizeCanvasToDisplaySize(canvas);
    // resizeCanvas(canvas);

    let frameCount = 0;
    let animationFrameId;

    // ctx.filter = "blur(60px)";

    init(canvas);

    const render = () => {
      frameCount++;
      update(ctx, frameCount);
      draw(ctx, frameCount);
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
