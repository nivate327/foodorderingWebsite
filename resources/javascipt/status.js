
let statuses=document.querySelectorAll(".li");
let hidden=document.querySelector("#hidden");
let small=document.querySelector("small");
let order=hidden ? hidden.value : null;
let time=document.createElement("small");

order=JSON.parse(order);
console.log(order);

function updateStatus(order) {
    let stepCompleted=true;

    statuses.forEach((status)=>
    {
        let dataprop=status.dataset.status;

        if(stepCompleted)
        {
            status.classList.add("stepCompleted");
        }

        if (dataprop===order.status) {
            stepCompleted=false;
            
            

            time.innerHTML=order.datetime;
            status.appendChild(time);
            if(status.nextElementSibling)
            {
                status.nextElementSibling.classList.add("current");
            }
        }
    })
}

updateStatus(order);
