const imgs = document.getElementById ("imgca");
const imgca = document.querySelectorAll("#imgca img")

 let idx = 0;

 function carrossel(){
    idx++;

    if(idx > imgca.length -1 ){
        idx = 0;
    }
    imgs.style.transform = "translatex(${-idx * 500} px";

 }

 setInterval(carrossel, 1800); 