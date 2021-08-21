
// update extra charge function

function extraCharge(price,extraProduct){

    document.getElementById(extraProduct +"-price").innerText = price;
    updateTotalPrice ()

}

// capture element by id function

function captureElement(elementId){

    const productPrice = document.getElementById(elementId);
    return productPrice;
}

// convert string to number function 

function convertIntNumber(elementId){
    const productPrice = parseInt(captureElement(elementId).innerText);
    return productPrice;
}
// update total price function 

function updateTotalPrice (){
    const laptopPrice= convertIntNumber("laptop-price");
    const extraRamPrice= convertIntNumber("ram-price");
    const extrStoragePrice= convertIntNumber("storage-price");
    const deliveryCharge = convertIntNumber("delivery-price");
    const totalPrice = captureElement("total-price");
    totalPrice.innerText = laptopPrice + extraRamPrice + extrStoragePrice+ deliveryCharge;
    captureElement("discount-total-price").innerText = totalPrice.innerText;

}
// 16 gb ram button  event handler

document.getElementById("more-ram").addEventListener("click", function(){

    extraCharge(180,"ram");
})

// 8 gb ram button  event handler

document.getElementById("base-ram").addEventListener("click", function(){

    extraCharge(0,"ram");
})

// 256 gb storage button event handler

document.getElementById("base-storage").addEventListener("click", function(){
    extraCharge(0,"storage");
})

// 512 gb storage button event handler

document.getElementById("more-storage").addEventListener("click", function(){
    extraCharge(100,"storage");
})

// 1TB storage button event handler

document.getElementById("more-extra-storage").addEventListener("click", function(){
    extraCharge(180,"storage");
})

// Normal Delivary Charge button event handler

document.getElementById("normal-delivery").addEventListener("click", function(){
    extraCharge(0,"delivery");
})

// exclusive Delivary Charge button event handler

document.getElementById("exclusive-delivery").addEventListener("click", function(){
    extraCharge(20,"delivery");
})

// promo button even handler 

document.getElementById("discount-btn").addEventListener("click", function(){
   
    const promofield = captureElement("promo-field");
    const promoButton= captureElement("discount-btn");
    const discountTotalPrice= captureElement("discount-total-price"); 
    
    if( promofield.value == "stevekaku"){
    discountTotalPrice.innerText = parseInt(discountTotalPrice.innerText)*.80; 
    promofield.value = "";
    }
})