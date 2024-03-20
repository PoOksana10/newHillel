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

document.querySelector('.container').addEventListener("mouseover", function () {
    const parent = document.getElementById('userCity')
    cityList(parent)
}, {once: true})

document.querySelector('.userOrders').addEventListener('click', () => {
    hideElements()
    userOrders()
})

document.addEventListener("click", function (e) {
    const target = e.target.closest(".delItem")
    if (target) {
        delOrder(target)
    }
})

document.addEventListener("click", function (e) {
    const target = e.target.closest(".confirmation")
    if (target) {
        const name = document.querySelectorAll('.itemName')
        const price = document.querySelectorAll('.itemPrice')
        const qty = document.querySelectorAll('.orderQty')
        document.querySelector('.productCatalogue').classList.add('hidden')
        totalPriceByItem(name, price, qty)
        orderForm()
    }
})

document.addEventListener("click", function (event) {
    const target = event.target.closest(".closeForm")
    if (target) {
        document.querySelector('.userOrders').classList.remove('hidden')
    }
})

document.querySelector('.formSubmit').addEventListener('click', event => {
    const form = document.mainForm
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const middleName = form.middleName.value;
    const city = form.city.value;
    const mail = form.postMail.value;
    const payment = form.payment.value;
    const comments = form.comments.value;

    const userData = {
        'firstName': firstName,
        'lastName': lastName,
        'middleName': middleName,
        'city': city,
        'mail': mail,
        'payments': payment,
        'comments': comments,
    }
    crossCheck(userData)
})

document.querySelector('.regFormSubmit').addEventListener('click', event => {
    const form = document.registrationForm;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const birthDate = form.birthDate.value;
    const userGender = form.userGender.value;
    const userCity = form.userCity.value;
    const languages = []
    const userEmail = form.userEmail.value;
    const userAddress = form.value;
    const userLogin = form.value;
    const userPass = form.userPass.value;

    document.registrationForm.userLanguages.forEach(languageCheckBox => {
        if (languageCheckBox.checked) {
            let data = languageRef.filter(lang => lang.id === languageCheckBox.value)[0].lan
            languages.push(data);
        }
    })

    const userData = {
        'firstName': firstName,
        'lastName': lastName,
        'birthDate': birthDate,
        'userGender': userGender,
        'userCity': userCity,
        'userLanguages': languages,
        'userEmail': userEmail,
        'userAddress': userAddress,
        'userLogin': userLogin,
        'userPass': userPass,
    }
    userDataTable(userData);
})