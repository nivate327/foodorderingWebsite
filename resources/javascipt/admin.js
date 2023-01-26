//const { default: axios } = require("axios");
//const order = require("../../app/models/order");
//import moment from "../../routes/web";
let orders=[];
function initAdmin(socket) {
     let orderTablebody=document.querySelector("#orderTablebody");

   

    let markup="";

    axios.get("/admin/orders", {
        headers:
        {
            "X-Requested-With":"XMLHttpRequest"
        }
    }).then(res=>
        {
            orders=res.data
            markup=generateMarkup(orders)
            orderTablebody.innerHTML=markup
        }).catch(err=>
            {
                console.log(err);
            })

    function renderItems(items) {
        let parsedItems = Object.values(items)
        //console.log(parsedItems);
        return parsedItems.map((menuItem) => {
            return `
                <p>${ menuItem.items.name } - ${ menuItem.items.qty } pcs  - price : ${menuItem.items.price}</p>
                
            `
        }).join('')
      }


    let date=new Date();
    function generateMarkup(orders) {
        return orders.map(order => {
            return `
                <tr>
                <td>
                    <p>${ order._id }</p>
                    <div>${ renderItems(order.items) } TotalPrice - ${order.totalprice}</div>
                </td>
                <td>${order.customerID.name}</td>
                <td>${order.address}</td>
                <td>
                    <div>
                        <form action="/admin/status" method="POST">
                            <input type="hidden" name="orderId" value="${ order._id }">
                            <select name="status" onchange="this.form.submit()">
                                <option value="order_placed"
                                    ${ order.status === 'order_placed' ? 'selected' : '' }>
                                    Placed</option>
                                <option value="confirmed" ${ order.status === 'confirmed' ? 'selected' : '' }>
                                    Confirmed</option>
                                <option value="prepared" ${ order.status === 'prepared' ? 'selected' : '' }>
                                    Prepared</option>
                                <option value="delivered" ${ order.status === 'delivered' ? 'selected' : '' }>
                                    Delivered
                                </option>
                                <option value="completed" ${ order.status === 'completed' ? 'selected' : '' }>
                                    Completed
                                </option>
                            </select>
                        </form>
                    </div>
                </td>
                <td>
                ${ moment(order.datetime).format('hh:mm A') }
                 </td>
                <td>
                    ${ order.paymentStatus ? 'paid' : 'Not paid' }
                </td>
            </tr>
        `
        }).join('')

    }

  //  console.log("ok");

}



let statuses=document.querySelectorAll(".li");
let hidden=document.querySelector("#hidden");
let small=document.querySelector("small");
let order=hidden ? hidden.value : null;
let time=document.createElement("small");

order=JSON.parse(order);
//console.log(order);

function updateStatus(order) {
    let stepCompleted=true;

    statuses.forEach((status)=>
    {
        status.classList.remove("stepCompleted");
        status.classList.remove("current");
    })

    statuses.forEach((status)=>
    {
        let dataprop=status.dataset.status;

        if(stepCompleted)
        {
            status.classList.add("stepCompleted");
        }

        if (dataprop===order.status) {
            stepCompleted=false;
            
            

            time.innerHTML=moment(order.datetime).format('hh:mm A');
            status.appendChild(time);
            if(status.nextElementSibling)
            {
                status.nextElementSibling.classList.add("current");
            }
        }
    })
}

updateStatus(order);


//Socket
let socket=io()
initAdmin(socket);

if(order){
    socket.emit('join', `order_${order._id}`)
}

let adminAreaPath = window.location.pathname
if(adminAreaPath.includes('admin')) {
    initAdmin(socket)
    socket.emit('join', 'adminRoom')
}

socket.on('orderUpdated', (data) => {
    const updatedOrder = { ...order }
    updatedOrder.datetime = moment().format()
    updatedOrder.status = data.status
    updateStatus(updatedOrder)
  // console.log(data);

  orders.unshift(order)
  orderTablebody.innerHTML='';
  orderTablebody.innerHTML=generateMarkup(orders);
})

