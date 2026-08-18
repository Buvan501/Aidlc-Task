const today =new Date().toISOString().split('T')[0];
document.getElementById("DoB").setAttribute("max",today);

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

