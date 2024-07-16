const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const body=document.querySelector('body');

function updateColorBox() {
    const hue = input.value;
    h1.style.color = `hsl(${hue}, 100%, 50%)`;
    body.style.backgroundColor=`hsl(${hue}, 100%, 50%)`
}

input.addEventListener('input', updateColorBox);
updateColorBox(); 