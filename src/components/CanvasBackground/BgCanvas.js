import { useEffect, useRef } from "react";
import Circle from "./circle";
import { resizeCanvasToDisplaySize } from "./canvas-helper";

const circles = [];

const init = (canvas) => {
  /* Resize the canvas to match screen density */
  resizeCanvasToDisplaySize(canvas);

  /* create circles */
  circles.splice(0, circles.length);
  const circlesConfig = [
    {
      x: Math.floor(canvas.width * 0.9),
      y: Math.floor(canvas.height - canvas.height / 6),
      r: Math.floor(Math.min(canvas.width, canvas.height) * 0.2),
      color: "#356bff",
    },
    {
      x: Math.floor(canvas.width * 0.8),
      y: Math.floor(canvas.height * 0.5),
      r: Math.floor(Math.min(canvas.width, canvas.height) * 0.1),
      color: "#00FFFF",
    },
    {
      x: Math.floor(canvas.width * 0.7),
      y: Math.floor(canvas.height * 0.9),
      r: Math.floor(Math.min(canvas.width, canvas.height) * 0.1),
      color: "#00FFFF",
    },
    {
      x: Math.floor(canvas.width * 0.1),
      y: Math.floor(canvas.height * 0.2),
      r: Math.floor(Math.min(canvas.width, canvas.height) * 0.1),
      color: "#356bff",
    },
    {
      x: Math.floor(canvas.width * 0.2),
      y: Math.floor(canvas.height * 0.1),
      r: Math.floor(Math.min(canvas.width, canvas.height) * 0.05),
      color: "#00FFFF",
    },
    {
      x: Math.floor(canvas.width * 0.1),
      y: Math.floor(canvas.height * 0.4),
      r: Math.floor(Math.min(canvas.width, canvas.height) * 0.02),
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

  for (const circle of circles) {
    circle.draw(ctx, frameCount);
  }
};

const BgCanvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let frameCount = 0;
    let animationFrameId;

    init(canvas);

    const render = () => {
      frameCount++;
      update(ctx, frameCount);
      draw(ctx, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", () => {
      resizeCanvasToDisplaySize(canvasRef.current);
      init(canvasRef.current);
    });

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      let diff = lastScrollY - window.scrollY;
      lastScrollY = window.scrollY;
      console.log(diff);
      for (const circle of circles) {
        circle.updateOnScroll(diff);
      }
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      className="fixed top-0 left-0 w-screen h-screen z-[-2] filter blur-3xl"
      ref={canvasRef}
      {...props}
    ></canvas>
  );
};

export default BgCanvas;
