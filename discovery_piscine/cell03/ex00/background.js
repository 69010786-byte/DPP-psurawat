function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

var button = document.getElementById("btn");

button.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});