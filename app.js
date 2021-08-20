// variable declair  
const memory16GB = document.getElementById('memory-16GB');
const storage512 = document.getElementById('storage-512');
const storage1TB = document.getElementById('storage-1TB');
const chargedDelivery = document.getElementById('charged-delivery');
const initialPrice = document.getElementById('initial-price');
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const applyButton = document.getElementById('apply-button');
const grandTotal = document.getElementById('grand-total');
const promoInput = document.getElementById('promo-input');
const memory8GB = document.getElementById('memory-8GB');
const storage256 = document.getElementById('storage-256');
const freeDelivery = document.getElementById('free-delivery');

// addEventListener section
memory8GB.addEventListener('click', function () {
    extraMemoryCost.innerText = 0;
    commonAddition()
})

memory16GB.addEventListener('click', function () {
    individual(extraMemoryCost, 180);
    commonAddition()
})

storage256.addEventListener('click', function () {
    extraStorageCost.innerText = 0;
    commonAddition()
})

storage512.addEventListener('click', function () {
    individual(extraStorageCost, 100);
    commonAddition()
})

storage1TB.addEventListener('click', function () {
    individual(extraStorageCost, 180);
    commonAddition()
})

freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = 0;
    commonAddition()
})

chargedDelivery.addEventListener('click', function () {
    individual(deliveryCharge, 20);
    commonAddition()
})

// addEventListener for promo Code
// promoInput
applyButton.addEventListener('click', function () {
    let promoCode = "steveKaku";
    let discountAmount = 20 / 100 * parseFloat(grandTotal.innerText);
    let newGrandTotal = parseFloat(grandTotal.innerText) - discountAmount;

    if (promoInput.value = promoCode) {
        grandTotal.innerText = newGrandTotal;
        promoInput.value = '';
    }
})

// function for individual addition
function individual(clickedButtonVariableName, price) {
    let initialValueInNumber = parseFloat(clickedButtonVariableName.innerText);
    if (initialValueInNumber == 0 || 180 || 100 || 20) {
        initialValueInNumber = 0;
        let updatedValue = initialValueInNumber + price;
        clickedButtonVariableName.innerText = updatedValue;
        return updatedValue;
    }
}

// function for common addition
function commonAddition() {
    let initialPirceInNumber = parseFloat(initialPrice.innerText);
    let extraMemoryCostInNumber = parseFloat(extraMemoryCost.innerText);
    let extraStorageCostInNumber = parseFloat(extraStorageCost.innerText);
    let deliveryChargeInNumber = parseFloat(deliveryCharge.innerText);
    /* let totalPriceInNumber = parseFloat(totalPrice.innerText);
        let grandTotalInNumber = parseFloat(grandTotal.innerText); */
    let result = initialPirceInNumber + extraMemoryCostInNumber + extraStorageCostInNumber + deliveryChargeInNumber;
    totalPrice.innerText = result;
    grandTotal.innerText = result;
    return result;

}

// function for promo code





// horizontal line for total price
const hrLine = document.getElementById('hr-line');
hrLine.style.borderTop = "2px solid black";