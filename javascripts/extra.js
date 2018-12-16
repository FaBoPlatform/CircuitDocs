window.onload = function() {
    var tag = document.getElementsByTagName('img');
    for (var i = 0; i < tag.length; i++) {
        if(imgs[i].alt == "YOUTUBE") {
        	var src = imgs[i].src;
        	srcn = src.match(".+/(.+?)$")[1]
        	alert(src);
        }
    }
}