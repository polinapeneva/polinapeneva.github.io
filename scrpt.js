function chbg(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}


//STICKY HEADER SCROLL
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var scrollPos = 0;

window.addEventListener('scroll', function(){

if ((document.body.getBoundingClientRect()).top > scrollPos){
    header.classList.add("sticky");
}
else{
    header.classList.remove("sticky");
}
    scrollPos = (document.body.getBoundingClientRect()).top;
});

//================================================================