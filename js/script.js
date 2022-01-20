 function validate(){

    var email=document.getElementById("email").Value;
    var password=document.getElementById("password").Value;
    if(username=="admin"&& password == "user")
    {
        alert("Successful!");
        return false;
    }
    else{
        alert("Failed!")
    }
 }