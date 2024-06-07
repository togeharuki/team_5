// JavaScriptファイル内での実装
window.onload = function() {
    function changeBackgroundColor() {
        var colors = ["#f8b400", "#f85f36", "#6a0572", "#3c3c3c", "#007f5f"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }

    var changeColorBtn = document.getElementById("changeColorBtn");
    if (changeColorBtn) {
        changeColorBtn.addEventListener("click", changeBackgroundColor);
    } else {
        console.error("Element with id 'changeColorBtn' not found.");
    }
};
