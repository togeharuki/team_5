window.onload = function () {
    // おみくじ
    // この順番が良い順番らしい（吉と中吉が逆になることも）
    const list = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];

    document.getElementById("button").onclick = function () {
        var random = Math.floor(Math.random() * list.length);
        document.getElementById("result").textContent = list[random];
    }

    // サブウィンドウを開く処理
    document.getElementById("subWindowLink").onclick = function(event) {
        event.preventDefault(); // リンクのデフォルト動作をキャンセル
        window.open("おみやげ,html", "subwin", "width=300,height=300");
    };
}