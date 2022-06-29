

var navLinks = document.getElementById("navLinks")
function showtab(){
    navLinks.style.right = "0px";
}
function hidetab(){
    navLinks.style.right = "-200px";
}

// text option button
document.querySelector(".btn-translation-type:nth-child(1)").addEventListener('click', function(){
    document.querySelector(".text-input").classList.remove("no-display");
    document.querySelector(".file-input").classList.add("no-display");
})

// file option button
document.querySelector(".btn-translation-type:nth-child(2)").addEventListener('click', function(){
    document.querySelector(".text-input").classList.add("no-display");
    document.querySelector(".file-input").classList.remove("no-display");
    console.log('abc');
})

// upload button
document.querySelector("#btn-file-upload").addEventListener('change', function(){
    document.querySelector(".lb-file-upload").classList.add("no-display");
    document.querySelector(".uploaded-file").classList.remove("no-display");
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



