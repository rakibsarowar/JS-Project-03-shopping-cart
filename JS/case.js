/*
1. add evnet listner to the plus button.
2. get the value from the field.
3. convert the number to th interger.
4. calculate the new case number.
5. set the value to the case number field. 
*/

function updateCaseNumber (isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouscaseNumber = parseInt(caseNumberString);

    // const newCaseNumber = previouscaseNumber + 1;
    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previouscaseNumber + 1;
    }
    else{
        newCaseNumber = previouscaseNumber -1;
    }



    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice (newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

// add total money in text place;
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber =  updateCaseNumber(true);

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    // using function to avoid above code;

})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previouscaseNumber = parseInt(caseNumberString);

    // const newCaseNumber = previouscaseNumber - 1;
    // caseNumberField.value = newCaseNumber;

    const newCaseNumber = updateCaseNumber(false);

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById ('case-total');
    // caseTotalElement.innerText = caseTotalPrice;
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

    // skip this for adding above value
    // updateCaseNumber(false);

})