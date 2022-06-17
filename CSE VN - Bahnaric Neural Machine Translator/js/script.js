// navbar button
document.querySelector('#btn-navbar').addEventListener('click', function(){
    document.querySelector('.navbar').style.transform = "translate(-300px, 0)";
})

// click outside of the navbar will close it
document.addEventListener('click', function(e) {
    var navbar = document.querySelector('.navbar');
    var btn_navbar = document.querySelector("#btn-navbar");
    if (!navbar.contains(e.target) && !btn_navbar.contains(e.target)) {
        navbar.style.transform = "none";
    }
});

// text option button
document.querySelector(".btn-translation-type:nth-child(1)").addEventListener('click', function(){
    document.querySelector(".text-input").classList.remove("no-display");
    document.querySelector(".file-input").classList.add("no-display");
})

// file option button
document.querySelector(".btn-translation-type:nth-child(2)").addEventListener('click', function(){
    document.querySelector(".text-input").classList.add("no-display");
    document.querySelector(".file-input").classList.remove("no-display");
})

// upload button
document.querySelector("#btn-file-upload").addEventListener('change', function(){
    document.querySelector(".lb-file-upload").style.display = 'none';
    document.querySelector(".uploaded-file").style.display = 'flex';
    document.querySelector("#uploaded-file-name").textContent = this.files[0].name;
    var size = this.files[0].size;
    var count = 0;
    while(size >= 1024){
        size /= 1024;
        count++;
    }
    const unit = [' B', ' KB', ' MB', ' GB', ' TB']
    document.querySelector("#uploaded-file-size").textContent = Math.round(size) + unit[count];
})

// uploaded file display
document.querySelector(".uploaded-file button").addEventListener('click', function(){
    document.querySelector(".lb-file-upload").style.display = 'block';
    document.querySelector(".uploaded-file").style.display = 'none';
})