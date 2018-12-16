window.onload = function() {
    var tag = document.getElementsByTagName('img');
    for (var i = 0; i < tag.length; i++) {
        if(tag[i].alt == "YOUTUBE") {
        	var src = tag[i].src;
        	src = src.match(".+/(.+?)$")[1]
        	alert(src);
        	tag[i].innerHTML = "<video width=\"320\" height=\"240\" controls>\
        	<source src=\"https://www.youtube.com/watch?v=ylp--oVggFw\">\
        	Your browser does not support the video tag.\
        	</video>";
        }
    }
}