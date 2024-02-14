/*
+0) prepare data
+1) show all products with prices
+2) show prompt with request to enter product number (validation)
+3) show prompt with request to enter product amount (validation)
+4) calculate price
+5) check if discount available
+6) if so - calculate discount
+7) then show final price

*/


// 1
let productNumber;
let productAmount;
let productToBuy;
let userInvoice;
let discount = 1;

function showProducts() {
    for (let i = 0; i < products.length; i++) {
        document.write(`#${i + 1} ${products[i].name} - $${products[i].price} <br>`);
    }
}

// 2
function customerProductNumber() {
    do {
        productNumber = parseInt(prompt('Enter product number to purchase'));
    } while (productNumber < 1 || productNumber > products.length || isNaN(productNumber));
    console.log(productNumber);
    return productNumber
}

// 4
function getProductData(productNumber) {
    productToBuy = products[productNumber - 1];
    console.log(productToBuy);
    return productToBuy
}

// 3
function getProductAmount(productToBuy) {
    do {
        productAmount = parseInt(prompt('Enter amount of products you wanna buy').trim());
    } while (productAmount < 1 || productAmount > productToBuy.availability || isNaN(productAmount));
    console.log(productAmount);
    return productAmount
}

function customerInvoice(productToBuy) {
    userInvoice = productToBuy.price * productAmount;
    console.log(userInvoice);
    return userInvoice
}

function customerDiscount(userInvoice) {
    const discountStartsFrom = 10000;
    if (userInvoice >= discountStartsFrom) {
        discount = 0.8;
    }
    console.log(userInvoice);
    return discount
}

// 5
function customerDiscountPrice(productAmount, discount, productToBuy) {
    // 6
    const finalPrice = productAmount * productToBuy.price * discount;
    console.log(finalPrice);
    if (discount === 1) {
        document.write(`You do not have any discount. Your final price is ${finalPrice}!`);
    } else {
        document.write(`Congrats! You get discount!. Your final price is ${finalPrice}!`);
    }
}

function customerPurchase() {
    customerProductNumber()
    getProductData(productNumber);
    getProductAmount(productToBuy);
    customerInvoice(productToBuy);
    customerDiscount(userInvoice);
    customerDiscountPrice(productAmount, discount, productToBuy);
}

showProducts()