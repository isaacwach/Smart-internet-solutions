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



$(document).ready(function() {
    $("#btn2").click(function(){
        var dailyPay=parseInt($("#daily option:selected").val());
        var weeklyPay=parseInt($("#weekly option:selected").val());
        var monthlyPay=parseInt($("#monthly option:selected").val());
        var payment = $("#payment-option option:selected").val();

       
        // alert("Your total pay is "+weeklyPay + " which you are required to  through " + payment + " within a week.")
        // alert("Your total pay is "+monthlyPay + " which you are required to  through " + payment + " within a week.")
        var finalPay= new packages(dailyPay, weeklyPay, monthlyPay)
        
        if(isNaN(parseInt(this.daily))){
            this.daily=0
            return false
        }
        if(isNaN(parseInt(this.weekly))){
            this.weekly=0
            return false
        }
        if(isNaN(parseInt(this.monthly))){
            this.monthly=0
            return false
        }

        console.log(finalPay)
        for (const key in finalPay) {

            
           finalPrice=`${finalPay[key]}`
        console.log(finalPrice)
        }
        
        
        var totalPay=(parseInt(this.daily)+ parseInt(this.weekly)+ parseInt(this.monthly))
        // console.log(totalPay)
    })
})

function phonenumber(){
    var phoneNumber=document.getElementById("phone").value
  var phoneno = /^\d{10}$/;
  if(phoneNumber.match(phoneno)){
        
      return true;
        }
      else
        {
        alert("Please put a valid phone number");
        return false;
        }
}



