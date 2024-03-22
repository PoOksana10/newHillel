window.addEventListener('DOMContentLoaded', userOrders)

document.addEventListener("click", function (e) {
    const target = e.target.closest(".confirmation")
    if (target) {
        const name = document.querySelectorAll('.itemName')
        const price = document.querySelectorAll('.itemPrice')
        const qty = document.querySelectorAll('.orderQty')
        totalPriceByItem(name, price, qty)
        orderForm()
    }
})

document.addEventListener("click", function (e) {
    const target = e.target.closest(".delItem")
    if (target) {
        delOrder(target)
    }
})

document.querySelector('.backToOrder').addEventListener('click', () => {
    document.querySelector('.mainF').classList.add('hidden')
    userOrders()
})

document.addEventListener('click', (e) => {
    const target = e.target.closest('.productCatalogue')
    if (target) {location.replace('shop.html')}
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
