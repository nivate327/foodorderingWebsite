let close=document.querySelector(".closebtn");
let menu=document.querySelector(".menu");

close.addEventListener("click", ()=>
{
    document.querySelector(".slidebar").style.width="0";
})


menu.addEventListener("click", ()=>
{
    document.querySelector(".slidebar").style.width="17rem";
})