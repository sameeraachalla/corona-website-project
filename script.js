var items=document.querySelectorAll(".Timeline li");
function isItemVisible(el){
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function my_function(){
    for(var i=0;i<items.length;i++){
        if(isItemVisible(items[i])){
           items[i].classList.add("in-view");
        }
    
    
    }

}
window.addEventListener("scroll",my_function);
