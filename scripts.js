function onload() {

    menuClick();
    console.log("Loaded")

}

function dropdown() {

    let content = document.getElementsByClassName("dropdownContent");
    let border = document.getElementsByClassName("dropdownButton");

    if (content[0].style.visibility == "visible") {
        for (let i = 0; i < content.length; i++) {
            content[i].style.visibility = "hidden";
        }
        border[0].style.height = "0em";
        border[0].style.border = "solid rgb(255, 255, 255) 0px";
    } else {
        for (let i = 0; i < content.length; i++) {
            content[i].style.visibility = "visible";
        }
        border[0].style.height = "6em";
        border[0].style.border = "solid rgb(255, 255, 255) 1px";
        border[0].style.paddingRight = "1em";
    }
}

function menuClick() {
    var extraOffset;

    $("#scroll1").click(function () {
        if (screen.width <= 950) {
            extraOffset = 250;
        } else {
            extraOffset = 200;
        }
        $('html, body').animate({
            scrollTop: $("#text1").offset().top - extraOffset
        }, 2000);
    });

    $("#scroll2").click(function () {
        if (screen.width <= 950) {
            extraOffset = 250;
        } else {
            extraOffset = 200;
        }
        $('html, body').animate({
            scrollTop: $("#img1").offset().top - extraOffset
        }, 2000);
    });

    $("#scroll3").click(function () {
        if (screen.width <= 950) {
            extraOffset = 250;
        } else {
            extraOffset = 200;
        }
        $('html, body').animate({
            scrollTop: $("#form1").offset().top - extraOffset
        }, 2000);
    });
}