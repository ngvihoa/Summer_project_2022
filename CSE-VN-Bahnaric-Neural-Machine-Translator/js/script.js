function openCity(evt, tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("Home").style.display = "none";
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}

document.querySelector('#btn-navbar').addEventListener('click', function(){
    document.querySelector('.navbar').style.transform = "none";
})

// function openPart(partname) {
//     switch(partname) {
//         case 'home-about': {
//             document.getElementById('home-about').classList.add('show');
//             document.getElementById('translator-vn-ban').classList.remove('show')
//             document.getElementById('contact-part').classList.remove('show');
//         }
//         case 'translator-vn-ban': {
//             document.getElementById('home-about').classList.remove('show');
//             document.getElementById('translator-vn-ban').classList.add('show')
//             document.getElementById('contact-part').classList.remove('show');
//         }
//         case 'contact-part': {
//             document.getElementById('home-about').classList.remove('show');
//             document.getElementById('translator-vn-ban').classList.remove('show')
//             document.getElementById('contact-part').classList.add('show');
//         }
//     }
// }