window.onload = function() {
    var tag = document.getElementsByTagName('img');
    for (var i = 0; i < tag.length; i++) {
        if(tag[i].alt == "YOUTUBE") {
        	var src = tag[i].src;
        	srcn = src.match(".+/(.+?)$")[1]
        	alert(src);
        }
    }
}