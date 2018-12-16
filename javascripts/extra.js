window.onload = function() {
    var tag = document.getElementsByTagName('img');
    for (var i = 0; i < tag.length; i++) {
        if(tag[i].alt == "YOUTUBE") {
        	var src = tag[i].src;
        	src = src.match(".+/(.+?)$")[1];
        	tag[i].outerHTML 
        	var out = "<iframe width=\"560\" height=\"315\"";
        	out += "src=\"https://www.youtube.com/embed/" + src + "\"";
        	out += "frameborder=\"0\"\
        	allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\ 
        	allowfullscreen></iframe>";
        	tag[i].outerHTML = out;
        }
    }
}