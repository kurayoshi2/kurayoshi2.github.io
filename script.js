const startBtn = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');
const notepadWindow = document.getElementById('notepad-window');

startBtn.onclick = () => {
  startMenu.classList.toggle('hidden');
};

startMenu.querySelector('p:nth-child(2)').onclick = () => {
  notepadWindow.classList.remove('hidden');
};

const titleBar = document.querySelector('.title-bar');
let isDragging = false, offsetX, offsetY;

titleBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    notepadWindow.style.left = `${e.pageX - offsetX}px`;
    notepadWindow.style.top = `${e.pageY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
