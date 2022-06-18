const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll",function(){
    // moc hien thi 400
    if(document.documentElement.scrollTop > 400) {
        btnTop.style.display = "block";

    }else {
        btnTop.style.display = "none";
    }
})
btnTop.addEventListener("click", function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})