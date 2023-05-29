export default class Circle {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.r = r;
    this.dr = r * 0.4;
    this.offset = Math.floor(Math.random() * 500);
    this.color = color;
  }
  update(ctx, frameCount) {
    if (this.x < 0) {
      this.vx = Math.abs(this.vx) * 0.8;
    }
    if (this.x > ctx.canvas.width) {
      this.vx = -Math.abs(this.vx) * 0.8;
    }
    if (this.y < 0) {
      this.vy = Math.abs(this.vy) * 0.8;
    }
    if (this.y > ctx.canvas.height) {
      this.vy = -Math.abs(this.vy) * 0.8;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.97;
    this.vy *= 0.97;
  }
  updateOnScroll(diff) {
    this.vy += diff * 0.005;
  }
  draw(ctx, frameCount) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.r + this.dr * Math.sin(this.offset + frameCount * 0.005),
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}
