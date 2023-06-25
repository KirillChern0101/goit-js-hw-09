const buttonOn = document.querySelector('[data-start]');
const buttonOff = document.querySelector('[data-stop]');

let interval = null;

buttonOn.addEventListener('click', startColorChange);
buttonOff.addEventListener('click', stopColorChange);

function startColorChange() {
  buttonOn.disabled = true;
  interval = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  buttonOn.disabled = false;
  clearInterval(interval);
}

function changeBackgroundColor() {
  const gradientColors = generateRandomGradientColors(2);
  document.body.style.backgroundImage = `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`;
}

function generateRandomGradientColors(count) {
  const randomColors = [];
  for (let i = 0; i < count; i++) {
    const randomColor = getRandomHexColor();
    randomColors.push(randomColor);
  }
  return randomColors;
}

function getRandomHexColor() {
  const gradientColors = [
    '#FFC3A0',
    '#FFAFBD',
    '#FFA0C2',
    '#FF8CBF',
    '#FF8CC9',
    '#A0C1FF',
    '#A0E4FF',
    '#A0FFE4',
    '#A0FFC1',
    '#A0FFB0',
    '#FFD700',
    '#FF69B4',
    '#00FFFF',
    '#00BFFF',
    '#FF00FF',
    '#FF1493',
    '#8A2BE2',
    '#00FF00',
    '#FF7F50',
    '#FF4500',
  ];

  return gradientColors[Math.floor(Math.random() * gradientColors.length)];
}
