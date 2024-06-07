
function updateClock() {
    var now = new Date();
    var nowHour = now.getHours();
    var nowMinutes = now.getMinutes();
    var nowSeconds = now.getSeconds();
    
    // 時刻を2桁表示にするためのゼロパディング
    nowHour = ('0' + nowHour).slice(-2);
    nowMinutes = ('0' + nowMinutes).slice(-2);
    nowSeconds = ('0' + nowSeconds).slice(-2);
    
    var text = nowHour + "：" + nowMinutes + "：" + nowSeconds;
    document.getElementById("text").innerHTML = text;
}

setInterval(updateClock, 1000);
