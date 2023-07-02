
const card = document.querySelector('#random-color');


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


card.addEventListener('mouseenter', () => {

  const randomColor = getRandomColor();

  card.style.backgroundColor = randomColor;
});


card.addEventListener('mouseleave', () => {

  card.style.backgroundColor = '#ccc';
});

// I Dont know how to add random colors in background so i copy from google..you can cut my marks if you think that this is not right .