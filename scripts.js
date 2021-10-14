function onload() {

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