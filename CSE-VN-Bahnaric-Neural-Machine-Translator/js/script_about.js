

var navLinks = document.getElementById("navLinks")
function showtab(){
    navLinks.style.right = "0px";
}
function hidetab(){
    navLinks.style.right = "-200px";
}


document.getElementById("Bahnaric").style.display = "block";
document.getElementById("Model").style.display = "none";
document.getElementById("Data augmentation").style.display = "none";
document.getElementById("Preprocessing").style.display = "none";
document.getElementById("References").style.display = "none";

function openCity(evt, tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById("Bahnaric").style.display = "none";
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}