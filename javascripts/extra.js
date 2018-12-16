window.onload = function() {
    var tag = document.getElementsByTagName('img');
    for (var i = 0; i < tag.length; i++) {
        if(tag[i].alt == "YOUTUBE") {
        	var src = tag[i].src;
        	src = src.match(".+/(.+?)$")[1]
        	alert(src);
        	tag[i].innerHTML = "<span style='color: red;'>span要素に変更したよ！</span>";
        }
    }
}