class packages {
    constructor(daily, weekly, monthly) {
        this.daily = daily
        this.weekly = weekly
        this.monthly = monthly

    }
    printPackages() {
        console.log(this.daily, this.weekly, this.monthly)
    }


    // payMethod(){
    //     if(isNaN(parseInt(this.daily))){
    //         this.daily=0
    //         return false
    //     }
    //     if(isNaN(parseInt(this.weekly))){
    //         this.weekly=0
    //         return false
    //     }
    //     if(isNaN(parseInt(this.monthly))){
    //         this.monthly=0
    //         return false
    //     }
    //     var totalPay=(parseInt(this.daily)+ parseInt(this.weekly)+ parseInt(this.monthly))

    // }

}



$(document).ready(function () {
    $("#btn2").click(function () {
        var dailyPay = parseInt($("#daily option:selected").val());
        var weeklyPay = parseInt($("#weekly option:selected").val());
        var monthlyPay = parseInt($("#monthly option:selected").val());
        var payment = $("#payment-option option:selected").val();


        // alert("Your total pay is "+weeklyPay + " which you are required to  through " + payment + " within a week.")
        // alert("Your total pay is "+monthlyPay + " which you are required to  through " + payment + " within a week.")
        var finalPay = new packages(dailyPay, weeklyPay, monthlyPay)

        if (isNaN(parseInt(this.daily))) {
            this.daily = 0
            return false
        }
        if (isNaN(parseInt(this.weekly))) {
            this.weekly = 0
            return false
        }
        if (isNaN(parseInt(this.monthly))) {
            this.monthly = 0
            return false
        }

        console.log(finalPay)
        for (const key in finalPay) {


            finalPrice = `${finalPay[key]}`
            console.log(finalPrice)
        }


        var totalPay = (parseInt(this.daily) + parseInt(this.weekly) + parseInt(this.monthly))
        // console.log(totalPay)
    })

})

// function phonenumber() {
//     var phoneNumber = document.getElementById("phone").value
//     var phoneno = /^\d{10}$/;
//     if (phoneNumber.match(phoneno)) {

//         return true;
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Put a valid phone Number!',
//             footer: '<a href="">Why do I have this issue?</a>'
//           })
//         return false;
//     }
// }

// function ValidateEmail() {
//     var inputtedEmail=document.getElementById("email").value
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputtedEmail.match(mailformat)) {
//         alert("Valid email address!");
//         // document.form1.text1.focus();
//         return true;
//     } else {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Error',
//             text: 'Put a valid email address!',
//             footer: '<a href="">Why do I have this issue?</a>'
//           })
//         // document.form1.text1.focus();
//         return false;
//     }
// }

// function locationForm() {
//     var subcounty= document.getElementById("sub-county").value
//     var budget= document.getElementById("budget").value
//     if(subcounty===""||budget=="") {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'This field is required!',
//           })
//           return false
//     }
// }

function validateForm() {
    var phoneNumber = document.getElementById("phone").value
    var phoneno = /^\+(?:[0-9] ?){6,14}[0-9]$/
    var inputtedEmail=document.getElementById("email").value
    var mailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
    }else if (inputtedEmail.match(mailformat)||inputtedEmail==""||inputtedEmail==null){
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
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Response recorded',
            text: 'Thank you for reaching us. We will get to you back shortly.',
          })
          return true
    }

    
}