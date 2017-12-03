$(function scroll1() {
    $(window).scroll(function () {
        var wintop = $(window).scrollTop(),
            docheight = $("#main").height(),
            winheight = $(window).height();
           //console.log(wintop);
        var totalScroll = (wintop / winheight) * 100;
        //    console.log("total scroll" + totalScroll);
        $("#progressBar1").css("width", totalScroll + "%");
        $("#roller1").css("left", totalScroll - 2 + "%");
    });
});
$(function scroll2() {
    $(window).scroll(function () {
        var wintop = $(window).scrollTop(),
            docheight = $("#main").height(),
            winheight = $(window).height();
        console.log(wintop);
        console.log(winheight);
        var totalScroll = ((wintop-950) / winheight) * 100;
        console.log("total scroll" + totalScroll);
        $("#progressBar2").css("width", totalScroll + "%");
        $("#roller2").css("left", totalScroll - 2 + "%");
    });
});
$(function scroll3() {
    $(window).scroll(function () {
        var wintop = $(window).scrollTop(),
            docheight = $("#main").height(),
            winheight = $(window).height();
        console.log(wintop);
        console.log(winheight);
        var totalScroll = ((wintop-1900) / winheight) * 100;
        console.log("total scroll" + totalScroll);
        $("#progressBar3").css("width", totalScroll + "%");
        $("#roller3").css("left", totalScroll - 2 + "%");
    });
});