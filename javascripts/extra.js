window.onload = function() {
    if(document.getElementsByTagName("YOUTUBE")) {
        var id = document.getElementsByTagName("YOUTUBE").attr('src').split('/')[$(this).attr('src').split('/').length - 1];
        var video = '<iframe style="width: 100%;height: 450px;" src="https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
        document.getElementsByTagName("YOUTUBE").setHtml(video);
    }
}