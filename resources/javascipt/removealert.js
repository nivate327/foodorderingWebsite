
let altmsg=document.querySelector("#alertmsg");

if(altmsg)
{
    setTimeout(()=>
    {
        altmsg.remove();
    }, 2000);
}