// Name: Rebecca Cathey
// Source of Code: <!-- Source of Code: Originated from https://github.com/wesbos/JavaScript30/blob/master/08%20-%20Fun%20with%20HTML5%20Canvas/index-FINISHED.html I did reference this website https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage  to learn more about canvases and elements that go with it-->
// Description: Updated the page to have the ability to clear the drawing and have a control panel.

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// Adjust canvas size to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// Event listeners for drawing actions
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; // Set initial position when mouse is pressed
});

canvas.addEventListener('mousemove', draw); // Continuously draw while moving the mouse
canvas.addEventListener('mouseup', () => isDrawing = false); // Stop drawing when mouse is released
canvas.addEventListener('mouseout', () => isDrawing = false); // Stop drawing if mouse leaves canvas

// Draw function
function draw(e) {
  if (!isDrawing) return; // Prevents drawing when mouse is not pressed

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Dynamically change stroke color
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // Start from the previous position
  ctx.lineTo(e.offsetX, e.offsetY); // Draw to the current position
  ctx.stroke(); // Execute the drawing

  [lastX, lastY] = [e.offsetX, e.offsetY]; // Update the last position for the next line

  hue++; // Increment hue for color cycling
  if (hue >= 360) {
    hue = 0;
  }

  // Handle line width animation (expand and contract)
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction; // Toggle direction
  }

  if (direction) {
    ctx.lineWidth++; // Increase line width
  } else {
    ctx.lineWidth--; // Decrease line width
  }
}

// Control elements functionality
const lineWidthInput = document.querySelector('#lineWidth');
const colorPicker = document.querySelector('#colorPicker');
const backgroundColorPicker = document.querySelector('#backgroundColor');
const clearBtn = document.querySelector('#clearBtn');
const saveBtn = document.querySelector('#saveBtn');

// Line width control
lineWidthInput.addEventListener('input', (e) => {
  ctx.lineWidth = e.target.value;
});

// Color picker control
colorPicker.addEventListener('input', (e) => {
  ctx.strokeStyle = e.target.value;
});

// Background color control
backgroundColorPicker.addEventListener('input', (e) => {
  canvas.style.backgroundColor = e.target.value;
});

// Clear canvas button
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save drawing button
saveBtn.addEventListener('click', () => {
  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'drawing.png';
  link.click();
});

// Resize canvas when window size changes
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
