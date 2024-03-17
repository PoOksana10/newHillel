window.addEventListener('DOMContentLoaded', showCategories);

document.getElementById('categories').addEventListener('click', event => {
    const categoryId = event.target.getAttribute('data-category');
    showProductsByCategory(categoryId);
});

document.getElementById('products').addEventListener('click', event => {
    const productId = event.target.getAttribute('data-product');
    const categoryId = event.target.getAttribute('data-category');

    showProductInfo(categoryId, productId);
});


document.getElementById('')

document.querySelector('.formSubmit').addEventListener('click', event => {
    const firstName = document.forms.mainForm.elements.firstName.value;
    const lastName = document.forms.mainForm.lastName.value;
    const middleName = document.forms.mainForm.middleName.value;
    const city = document.forms.mainForm.city.value;
    const mail = document.forms.mainForm.postMail.value;
    const payment = document.forms.mainForm.payment.value;
    const prodName = document.forms.mainForm.productName.value;
    const price = document.mainForm.productPrice.value;
    const orderNumber = document.forms.mainForm.orderedNumber.value;
    const comments = document.forms.mainForm.comments.value;

    const userData = {
        'firstName': firstName,
        'lastName': lastName,
        'middleName': middleName,
        'city': city,
        'mail': mail,
        'payments': payment,
        'prodName': prodName,
        'prodPrice': price,
        'orderNumber': orderNumber,
        'comments': comments,
    }
    crossCheck(userData)
})