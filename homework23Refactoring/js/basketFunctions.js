function userOrders() {
    const parent = window.document.getElementById('infoBasket')
    parent.innerHTML = ''
    parent.classList.add('container')
    const finalOrderList = JSON.parse(localStorage.getItem('myOrders'))
    if (finalOrderList.length > 0) {
        const orderConfirmationBtn = document.createElement('input')
        orderConfirmationBtn.setAttribute('type', 'button')
        orderConfirmationBtn.setAttribute('class', 'confirmation')
        orderConfirmationBtn.setAttribute('value', 'Press to confirm order')
        const catalogueBtn = document.createElement('input')
        catalogueBtn.setAttribute('class', 'productCatalogue')
        catalogueBtn.setAttribute('type', 'button')
        catalogueBtn.setAttribute('value', 'Continue Shopping')
        let count = 0
        finalOrderList.forEach(element => {
            const subParent = document.createElement('div')
            count += 1
            subParent.setAttribute('class', 'subParent')
            parent.appendChild(subParent)
            subParent.innerHTML = `<p><h1>ORDER № ${count}</h1></p>
        <p><label for="item">Product: </label>
        <input type="text" id="item" value=${element.itemName} class="itemName" readonly="readonly">: 
        <label for="item_price">Price: </label>
        <input type="text" value=${element.itemPrice} id="item_price" class="itemPrice" readonly="readonly"> USD  
        <input type='button' class='delItem' value='Delete' id="${element.itemId}">
        <label for="${element.itemId}">Quantity to order: </label>
        <input type='number' min='1' value='1' id="${element.itemId}" class="orderQty"></p>`
        })
        parent.appendChild(orderConfirmationBtn)
        parent.appendChild(catalogueBtn)
        delOrder()
    } else {
        basketNotice()
    }
}

function totalPriceByItem(name, price, qty) {
    const finalOrderConfirmed = []

    function segregationOfData(item1, item2) {
        let varList = []
        item1.forEach(element => {
            if (element.classList.contains(item2)) {
                if (element.value !== 'undefined') {
                    varList.push(element.value)
                }
            }
        })
        return varList
    }

    const nodeListNames = segregationOfData(name, 'itemName')
    const nodeListPrices = segregationOfData(price, 'itemPrice')
    const nodeListQty = segregationOfData(qty, 'orderQty')
    for (let i = 0; i <= nodeListNames.length; i++) {
        const finalItems = {
            'itemName': '', 'itemPrice': '', 'itemQty': '',
        }
        finalItems.itemName = nodeListNames[i]
        finalItems.itemPrice = nodeListPrices[i]
        finalItems.itemQty = nodeListQty[i]
        finalOrderConfirmed.push(finalItems)
        if (finalOrderConfirmed.length === nodeListNames.length) {
            localStorage.setItem('myOrders', JSON.stringify(finalOrderConfirmed))
            break
        }
    }
}

function basketNotice() {
    const info = document.getElementById("infoBasket")
    info.innerHTML = '<p>You don`t have any orders yet... Please press back to go to catalogue! ' +
        ' <input type="button" class="backHistory" value="Back to catalogue"></p>'
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.backHistory')
        if (target) {
            info.innerHTML = ''
            location.replace('shop.html')
        }
    })
}

function crossCheck(userData) {
    let form1;
    let form2;
    let form3;
    let form4;
    if (userData.firstName === '') {
        document.querySelector('.errorAlert1').innerHTML = 'This field is required'
        form1 = false
    } else {
        form1 = true
    }
    if (userData.lastName === '') {
        document.querySelector('.errorAlert2').innerHTML = 'This field is required'
        form2 = false
    } else {
        form2 = true
    }
    if (userData.city === '') {
        document.querySelector('.errorAlert3').innerHTML = 'This field is required'
        form3 = false
    } else {
        form3 = true
    }
    if (userData.middleName === '') {
        document.querySelector('.errorAlert4').innerHTML = 'This field is required'
        form4 = false
    } else {
        form4 = true
    }
    if (form1 === true && form2 === true && form3 === true && form4 === true) {
        document.getElementById('infoBasket').classList.add('container')
        document.getElementById('mainF').classList.remove('container')
        document.getElementById('mainF').classList.add('hidden')
        orderConfirmation(userData)
    }
}

function delOrder(target) {
    if (target) {
        let order = JSON.parse(localStorage.getItem('myOrders'))
        order.forEach(element => {
            if (element.itemId.toString() === target.id) {
                const itemIndex = order.indexOf(element)
                order.splice(itemIndex, 1)
                localStorage.setItem('myOrders', JSON.stringify(order))
                userOrders()
            }
        })
    }
}

function orderConfirmation(userData) {
    document.querySelector('form[name=mainForm]').classList.add('hidden')
    const orderInfo = JSON.parse(localStorage.getItem('myOrders'))
    let sum = 0
    orderInfo.forEach(element => {
        element = parseInt(element.itemPrice) * parseInt(element.itemQty)
        sum += element
    })
    let message;
    message = `<p>Ordered ${userData.lastName} , ${userData.firstName} , ${userData.middleName} </p
         <p>Order to be delivered to ${userData.city} , by Nova Posta  to the branch below</p>
         <p>${userData.mail}</p>
         <p>Way of payment : ${userData.payments}</p>
         <p>Total amount to pay: ${sum} USD</p>
         <p>Comments from client: ${userData.comments}</p>`
    document.getElementById('infoBasket').innerHTML = message
    localStorage.removeItem('myOrders')
    timedCount()
}

function orderForm() {
    const info = document.getElementById('infoBasket')
    info.innerHTML = ''
    info.classList.remove('container')
    const products = JSON.parse(localStorage.getItem('myOrders'))
    const parent1 = document.getElementById('wrapper3')
    products.forEach(element => {
        const newTag = document.createElement('p')
        newTag.innerText = element.itemName
        parent1.appendChild(newTag)
    })
    document.querySelector('.mainF').classList.remove('hidden');
    document.querySelector('.mainF').classList.add('container');
    const parent = document.querySelector('.cityList')
    cityList(parent)
    branches(parent);
}

function branches(parent) {
    parent.addEventListener('change', function () {
        document.getElementById("novaPosta").innerHTML = "";
        const option = document.querySelector('.cityList').options.selectedIndex;
        const branchOption = document.createElement('option');
        const parent2 = document.getElementById('novaPosta')
        branchOption.textContent = cities.filter(city => city.id === option)[0].branch
        parent2.appendChild(branchOption)
    })
}

function cityList(parent) {
    for (let city of cities) {
        const cityOption = document.createElement('option');
        cityOption.textContent = city.name;
        cityOption.setAttribute('id', city.id);
        parent.appendChild(cityOption);
    }
}


function timedCount() {
    setTimeout(locationChange, 5000);
    function locationChange() {
        alert('You will be redirected to main page! Thank you for purchase!')
        location.replace('shop.html')
    }
}

