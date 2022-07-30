let rocks = document.getElementById('rocks');
let text = document.getElementById('text');
let button = document.getElementById('button');
let martis = document.getElementById('martis');
let header = document.querySelector('header');
window.addEventListener('scroll',function() {
    let value = window.scrollY;
    rocks.style.top = value * 0.88 + 'px';
    martis.style.top = value * 0 + 'px';
    text.style.marginBlockEnd = value * 4 +'px'; 
    text.style.marginTop = value * 1.5 + 'px';
    button.style.marginBlockEnd= value * 1.5  + 'px';
    header.style.top = value*0.5+'px';
});
const totop = document.querySelector("#totop");
totop.addEventListener('click', function() {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });

});
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
    behavior:"smooth";
});
