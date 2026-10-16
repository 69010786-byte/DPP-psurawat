const ballon = document.getElementById('balloon');

const colors = ['red', 'blue', 'green'];
const MIN_SIZE = 200;
const MAX_SIZE = 420;

let size = 200;
let colorIndex = 0;

function update() {
    ballon.style.width = size + 'px';
    ballon.style.height = size + 'px';
    ballon.style.backgroundColor = colors[colorIndex];
}

ballon.addEventListener('click', function () {
    size += 10;

    if (size > MAX_SIZE) {
        size = MIN_SIZE;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % 3;
    }
    update();
});
balloon.addEventListener('mouseleave', function () {
    if (size > MIN_SIZE) {
        size -= 5;
    }
    colorIndex = (colorIndex + 2) % 3;
    update();
});