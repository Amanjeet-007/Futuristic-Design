const icon = document.querySelector(".vid i");

var change = 0;
icon.addEventListener("click",()=>{
    if(change==0){
        icon.parentElement.innerHTML = "<i class=\"ri-pause-line\"></i>";
        change = 1;
    }
    else{
        icon.parentElement.innerHTML = "<i class=\"ri-play-line\"></i>"
        change = 0;
    }
})