const today =new Date().toISOString().split('T')[0];
document.getElementById("DoB").setAttribute("max",today);

const form=document.getElementById("biodata");
const error=document.getElementById("error");

document.getElementById("biodata").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const doB = document.getElementById("DoB").value;
    const gender = document.getElementById("Gender").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("PhoneNumber").value;
    const address = document.getElementById("address").value;
    const nationality = document.getElementById("Nationality").value;
    const maritalStatus = document.getElementById("Marital").value;
    
    const output=document.getElementById("output");

    let messages=[];
    if(name===""||name==null){
        messages.push('Name is required');
    }
    if(doB===""||doB==null){
        messages.push('Date of Birth is required');
    }
    if(gender===""||gender==null){
        messages.push('Gender is required');
    }
    if(email===""||email==null){
        messages.push('Email is required');
    }
    if(phoneNumber===""||phoneNumber==null){
        messages.push('Phone Number is required');
    }
    else if(!/^\d{10}$/.test(phoneNumber)){
        messages.push('Phone Number must be 10 digits');
    }
    if(address===""||address==null){
        messages.push('Address is required');
    }
    if(messages.length>0){
        error.innerHTML=messages.join('<br>');
        event.preventDefault();
        error.innerText=messages.join(', ');
    }
    output.innerHTML=`
    <h2>Bio Data Details</h2>
    <div id="list">
    <p><i><b>Name:</b></i>${name}</p>
    <p><i><b>Date of Birth:</b></i>${doB}</p>
    <p><i><b>Gender:</b></i>${gender}</p>
    <p><i><b>Email:</b></i>${email}</p>
    <p><i><b>Phone Number:</b></i>${phoneNumber}</p>
    <p><i><b>Address:</b></i>${address}</p>
    <p><i><b>Nationality:</b></i>${nationality||"Not Listed"}</p>
    <p><i><b>Marital Status:</b></i>${maritalStatus}</p>
    </div>
`; 

});

