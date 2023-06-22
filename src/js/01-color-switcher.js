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
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
