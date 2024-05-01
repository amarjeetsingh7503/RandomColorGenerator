let btn = document.querySelector('button');
btn.addEventListener('click', randomColor);

function randomColor() {
    let color = generateColor();

    let div = document.querySelector('div');
    div.style.backgroundColor = color;
    div.innerText = `Generated Color: ${color}`
    console.log('color generated');
}

function generateColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}