
let width = 0;
let height = 0;
let size = 0;
let curve = 0;
let angle = 0;
let color = 0;

function createSnowflakes(i) {
  width = cos(2 * PI * i / snowflakes) * 350;
  height = sin(2 * PI * i / snowflakes) * 350;
  size = map(sin((PI / snowflakes) * (i * 2 + angle * 8)), -1, 1, 50, 95);
  curve = map(sin((PI / snowflakes) * (i * 2 + angle * 8)), -1, 1, 0, 60);
  color = map(sin((PI / snowflakes) * (i * 2 + angle * 8)), -1, 1, 195, 50);

  push();
  translate(center[0] + width, center[1] + height);
  rotate(rotateAngle);
  fill(color, color, color);
  rect(0, 0, size, size, curve);
  pop();
  angle += 0.0015;
}