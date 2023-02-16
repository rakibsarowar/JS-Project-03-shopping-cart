// ফিল্ড এর ভ্যালু প্লাস চাপ দিলে ১,২,৩ করে বাড়ার জন্য;

function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease){
        newPhoneNumber = previousPhoneNumber +1;
    }
    else{
        newPhoneNumber = previousPhoneNumber -1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    // updatePhoneNumber(true);
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();


    // calculate total
    // const phoneTotalElement = document.getElementById('phone-total');
    // const currentPhoneTotalString = phoneTotalElement.innerText;
    // const currentPhoneTotal = parseInt(currentPhoneTotalString);

    


    
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);

        updatePhoneTotalPrice(newPhoneNumber);
        calculateSubTotal();

})