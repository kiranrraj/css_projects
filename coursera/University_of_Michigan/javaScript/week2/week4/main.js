
function billingFunction(){
    const check = document.getElementById("same");
    const billingName = document.getElementById("billingName");
    const billingZip = document.getElementById("billingZip");

    if(check.checked == true){
        const custName = document.getElementById("shippingName").value;
        const custZip = document.getElementById("shippingZip").value;
        billingName.value = custName;
        billingZip.value = custZip;
        
    }else{
        billingName.value = "";
        billingZip.value = "";
    }
}

