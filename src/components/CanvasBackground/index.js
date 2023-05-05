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
  console.log(width, height);

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const ctx = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    console.log(canvas.width, canvas.height);
    ctx.scale(ratio, ratio);
    return true;
  }

  return false;
}

class Circle {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }
  draw(ctx, frameCount) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}

// function drawCircle(ctx, x, y, frameCount) {
//   ctx.fillStyle = "#00f";
//   ctx.beginPath();
//   ctx.arc(x, y, 50 + 100 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
//   ctx.fill();
// }

const CanvasBackground = (props) => {
  const canvasRef = useRef(null);

  let circles = [];
  const init = (canvas) => {
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

  const draw = (canvas, ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // drawCircle(ctx, canvas.width / 2, canvas.height / 2, frameCount);

    for (const circle of circles) {
      circle.draw(ctx, frameCount);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    resizeCanvasToDisplaySize(canvas);
    // resizeCanvas(canvas);

    let frameCount = 0;
    let animationFrameId;

    ctx.filter = "blur(60px)";

    init(canvas);

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
