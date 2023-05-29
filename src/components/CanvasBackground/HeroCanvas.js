import { useEffect, useRef } from "react";
import { resizeCanvasToDisplaySize } from "./canvas-helper";

const init = (canvas) => {
  /* Resize the canvas to match screen density */
  resizeCanvasToDisplaySize(canvas);
};

const update = (ctx, frameCount) => {};

const draw = (ctx, frameCount) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // ctx.strokeStyle = "#000";
  // ctx.lineWidth = 1;

  // ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // ctx.stroke();

  // ctx.save();

  // const logo = document.getElementById("mailtime-logo");
  // const { x, y, width, height } = logo.getBoundingClientRect();

  // ctx.translate(x + width / 2, y + height / 2);
  // let p = new Path2D(
  //   "M301.29 21.45C300.61 9.91 291.07 0.75 279.36 0.75C278.99 0.75 278.63 0.79 278.26 0.81C278.16 0.8 278.08 0.76 277.98 0.75H23.6C23.54 0.75 23.49 0.78 23.44 0.78C23.21 0.78 22.98 0.75 22.75 0.75C10.6 0.75 0.75 10.6 0.75 22.75C0.75 23.13 0.79 23.5 0.81 23.88C0.79 24.28 0.75 24.68 0.75 25.1V178.7C0.75 178.7 0.75 178.73 0.76 178.74C0.76 178.81 0.75 178.88 0.75 178.96C0.75 191.11 10.6 200.96 22.75 200.96C22.97 200.96 23.19 200.93 23.41 200.93C23.98 200.97 24.54 200.99 25.1 200.99H151.35C153.47 200.99 155.467 201.49 157.34 202.49L287.9 270.67C289.21 271.42 290.71 271.79 292.21 271.79C294.64 271.79 296.89 270.85 298.77 268.98C301.58 266.17 302.14 261.67 300.27 258.12L272.92 208.11C271.23 204.93 273.48 201.18 277.04 201.18C278.16 201.18 279.24 201.07 280.31 200.92C291.83 200.43 301.04 191.1 301.33 179.52C301.43 179.2 301.54 178.87 301.58 178.51V25.1C301.58 23.85 301.47 22.64 301.29 21.45Z"
  // );
  // ctx.stroke(p);

  // ctx.restore();
};

const HeroCanvas = (props) => {
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

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      className="absolute top-0 left-0 w-screen h-screen z-[-1]"
      ref={canvasRef}
      {...props}
    ></canvas>
  );
};

export default HeroCanvas;
