class packages {
    constructor(daily, weekly, monthly, payment) {
        this.daily = daily
        this.weekly = weekly
        this.monthly = monthly
        this.payment = payment
    }

    payMethod(){
        var payPeriod=(this.daily, this.weekly, this.monthly)
    }
    
}



$(document).ready(function() {
    $("#btn2").click(function(){
        var dailyPay=parseInt($("#daily option:selected").val());
        var weeklyPay=parseInt($("#wekly option:selected").val());
        var monthlyPay=parseInt($("#monthly option:selected").val());
        var payment = parseInt($("#payment-option option:selected").val());
        alert(dailyPay)
        var finalPay= new packages(dailyPay, weeklyPay, monthlyPay)
        
    })
})