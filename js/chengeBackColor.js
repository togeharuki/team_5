function changeBackgroundColor() {
    var colors = ["#f8b400", "#f85f36", "#6a0572", "#3c3c3c", "#007f5f"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);
});
