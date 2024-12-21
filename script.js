function menu(evt, menubar) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let buttons = document.getElementsByClassName("click");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    document.getElementById(menubar).style.display = "block";
    evt.currentTarget.className += " active";
}

    window.onload = function () {
    document.getElementById("defaultOpen").click();
};
