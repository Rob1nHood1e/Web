function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function disco(){
    return document.querySelectorAll('.days  div')
        [randomInteger(0, document.querySelectorAll('.days  div').length)].style.backgroundColor = getRandomColor();
}

document.getElementById("Disco").addEventListener("click", () => {
    setInterval(disco, 150)
});
