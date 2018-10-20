const FPS     = 60,   // Frames per second
  NUM_STARS   = 100;  // Number of stars

const canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [], // Array that contains the stars
  mouse = {
    x: 0,
    y: 0
  };  // mouse location

// Push stars to array
for (let i = 0; i < NUM_STARS; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene
const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.globalCompositeOperation = 'lighter';

  stars.map(s => {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();
  });

  ctx.beginPath();

  stars.map(starI => {
    ctx.moveTo(starI.x,starI.y);
    if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);

    stars.map(starII => {
      if(distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x,starII.y);
      }
    });
  });
  ctx.lineWidth = 0.05;
  ctx.strokeStyle = 'white';
  ctx.stroke();
};

const distance = ( point1, point2 ) => {
  let xs = 0,
    ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt( xs + ys );
};

// Update star locations
const update = () => {
  stars.map( s => {
    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas.width)  s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  });
};

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw
const tick = () => {
  draw();
  update();
  requestAnimationFrame(tick);
};

tick();
