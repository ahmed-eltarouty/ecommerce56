divItem = document.querySelectorAll(".BSP-item");
carousel= document.querySelectorAll(".BSP-slide");
divItem.forEach(function(item){
    let test =function(){
        carousell= item.querySelectorAll(".BSP-slide");
        carousell.forEach(function(one){
            one.classList.toggle('actives');
        })
    }
    item.addEventListener("mouseenter",test);
    item.addEventListener("mouseleave",test);
    })

toTop = document.querySelector(".toTop");
window.onscroll = function(){
    scrollY >= 300 ? toTop.style.display="block" : toTop.style.display="none";
}
toTop.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}