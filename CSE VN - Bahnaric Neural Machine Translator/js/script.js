document.querySelector('#btn-navbar').addEventListener('click', function(){
    document.querySelector('.navbar').style.transform = "none";
})

document.querySelector('#btn-navbar').addEventListener('blur', function(){
    document.querySelector('.navbar').style.transform = "translate(300px, 0px)";
})
