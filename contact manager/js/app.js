const form=document.getElementById("form");

if(localStorage.getItem("contacts")==undefined)
{
    localStorage.setItem("contacts","[]");
}

let result="";
let contacts=JSON.parse(localStorage.getItem("contacts"));

for(var i=0; i<contacts.length; i++)
{
    result+=` 
        <div class="contact_item">
            <i class="far fa-user fa-2x color-primary"></i>
         
            <div class="contact_item_info">
                <h4>${contacts[i].name}</h4>
                <p>+91 ${contacts[i].phone}</p>
            </div>

            <i class="fas fa-times-circle color-primary" onclick="Delete('${contacts[i].id}')"></i>
        </div>
            `;
}

document.getElementsByClassName("contact_body")[0].innerHTML=result;

form.addEventListener("submit", (e)=>
{
    e.preventDefault();
    submit();
});

function submit()
{
  
    const Name=document.getElementById("name").value;
    const Phone=document.getElementById("ph_no").value;
    console.log(Name);
    let contacts=JSON.parse(localStorage.getItem("contacts"));

    if(Name=="")
    {
        document.getElementById("msg1").innerHTML="Name field is Empty";
    }else if(Phone=="")
    {
        document.getElementById("msg2").innerHTML="Phone No field is Empty";
    }else if(Phone.length<10 || Phone.length>10)
    {
        document.getElementById("msg2").innerHTML="Phone No length should be 10";
    }
    else if(isNaN(Phone))
    {
        document.getElementById("msg2").innerHTML="Alphbet and symbol not allowed here";   
    }
    else
    {
    let contact=
    {
        id:Math.random().toString(36).substr(2,9),
        name:Name,
        phone:Phone
    }

    console.log(contact.name+""+contact.phone);
    contacts.unshift(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(contacts);

    document.getElementById("name").value="";
    document.getElementById("ph_no").value="";
    
    location.reload();
  }
}

function Delete(id)
{
    console.log(id);
    let contacts=JSON.parse(localStorage.getItem("contacts"));
    
    contacts=contacts.filter(function(contact)
    {
        return contact.id != id;
    })

    localStorage.setItem("contacts", JSON.stringify(contacts));
    location.reload();
}