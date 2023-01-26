
let price=document.getElementById("price");
let Qty=document.querySelector(".qty-input");

const addToCart=document.querySelector(".buy");
const cartCounter=document.querySelector(".cartCounter");
let Qtyfetch = document.querySelector(".qty-input");



function updateCart(food) {
    axios.post('/updateCart', food).then(res =>{
        console.log(res);
        alert(food.name+" Added Sucessfully")
        cartCounter.innerHTML=res.data.totalQty;
        let Qty=Qtyfetch.value;
        
    }).catch(err => {
        alert(err+" Added UnSucessfully !server error")
      
        
    })
}

addToCart.addEventListener("click", (e)=>
{
//console.log(e);
let food=JSON.parse(addToCart.dataset.food);
food.price=price.innerHTML;
food.qty=Qty.value;

updateCart(food);
//console.log(food);
})

//change order status
