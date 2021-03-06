class packages {
    constructor(daily, weekly, monthly) {
        this.daily = daily
        this.weekly = weekly
        this.monthly = monthly

    }
    printPackages() {
        console.log(this.daily, this.weekly, this.monthly)
    }


}

$(document).ready(function () {
    $("#btn2").click(function () {
        var dailyPay = parseInt($("#daily option:selected").val());
        var weeklyPay = parseInt($("#weekly option:selected").val());
        var monthlyPay = parseInt($("#monthly option:selected").val());
        var payment = $("#payment-option option:selected").val();


        Swal.fire({
            icon: 'success',
            title: 'Response recorded',
            text: "Your total pay is "+monthlyPay + " which you are required to  through " + payment + " within a week.",
          })
        return true
    })

})


function validateForm() {
    var phoneNumber = document.getElementById("phone").value
    var phoneno = /^\+(?:[0-9] ?){6,14}[0-9]$/
    var inputtedEmail=document.getElementById("email").value
    var mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var subcounty= document.getElementById("sub-county").value
    var budget= document.getElementById("budget").value
    var address= document.getElementById("street-address").value
    
    if (phoneNumber.match(phoneno)||phoneNumber==""||phoneNumber==null){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Put a valid phone Number!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        return false
    }else if (inputtedEmail==""||inputtedEmail==null){
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Put a valid email address!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        // document.form1.text1.focus();
        return false;
    } else if(subcounty===""||subcounty==null){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Subcounty field is required!',
          })
          return false
    } else if(budget==""||budget==null){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Budget field is required!',
          })
          return false
    }else if(address==""||address==null){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Address field is required!',
          })
          return false
    } else if(inputtedEmail.match(mailformat)){
        document.getElementById("valid").innerHTML = "valid email address";
        Swal.fire({
            icon: 'success',
            title: 'Response recorded',
            text: 'Thank you for reaching us. We will get to you back shortly.',
          })
        return true
    }else {
        Swal.fire({
            icon: 'warning',
            title: 'invalid email address',
          })
          return true
    }

    
}