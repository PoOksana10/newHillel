function showCategories() {
    const parent = document.getElementById('categories');
    data.forEach(category => {
        const myCategoryElement = document.createElement('div');
        myCategoryElement.textContent = category.name;
        myCategoryElement.setAttribute('data-category', category.key);
        parent.appendChild(myCategoryElement);
    });
}

function showProductsByCategory(categoryId) {
    const selectedCategory = data.find(category => category.key === categoryId);
    const parent = document.getElementById('products');
    parent.innerHTML = '';
    selectedCategory.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.setAttribute('data-product', product.id);
        productElement.setAttribute('data-category', categoryId);
        parent.appendChild(productElement);
    });
}

function orderForm() {
    document.getElementById('info').innerHTML = ''
    document.getElementById('userBasket').setAttribute('class', 'hidden')
    const products = JSON.parse(localStorage.getItem('myOrders'))
    const parent1 = document.getElementById('wrapper3')
    products.forEach(element => {
        const newTag = document.createElement('p')
        newTag.innerText = element.itemName
        parent1.appendChild(newTag)
    })
    document.querySelector('form[name=mainForm]').classList.remove('hidden');
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
    document.getElementById('info').innerHTML = message
    localStorage.removeItem('myOrders')
}

function showProductInfo(categoryId, productId) {
    const selectedCategory = data.find(category => category.key === categoryId);
    const selectedProduct = selectedCategory.products.find(product => product.id == productId);
    const parent = document.getElementById('product');
    parent.innerHTML = `
    <h2>${selectedProduct.name}</h2>
    <p>Price: $${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
  `;
    const buyButton = document.createElement('input');
    buyButton.setAttribute('type', 'button');
    buyButton.setAttribute('value', 'Buy');
    buyButton.setAttribute('id', 'purchaseBtn');
    parent.appendChild(buyButton);
    localStoragePush(buyButton, selectedProduct)
}

function localStoragePush(buyButton, selectedProduct) {
    buyButton.addEventListener('click', () => {
        const orders = []
        const currentStoredOrder = JSON.parse(localStorage.getItem('myOrders'))
        if (currentStoredOrder) {
            currentStoredOrder.forEach(element => {
                if (element.itemName !== selectedProduct.name) orders.push(element)
            })
        }
        localStorage.setItem('myOrders', '')
        const newOrder = {
            'itemId': selectedProduct.id, 'itemName': selectedProduct.name, 'itemPrice': selectedProduct.price,
        }
        console.log(newOrder)
        console.log('Orders', orders)
        orders.push(newOrder)
        localStorage.setItem('myOrders', JSON.stringify(orders))
    })
}

function userOrders() {
    document.getElementById('info').innerHTML = ''
    const finalOrderList = JSON.parse(localStorage.getItem('myOrders'))
    if (finalOrderList) {
        const orderConfirmationBtn = document.createElement('input')
        orderConfirmationBtn.setAttribute('type', 'button')
        orderConfirmationBtn.setAttribute('class', 'confirmation')
        orderConfirmationBtn.setAttribute('value', 'Press to confirm order')
        const parent = document.getElementById('info')
        finalOrderList.forEach(element => {
            const subParent = document.createElement('div')
            subParent.setAttribute('class', 'subParent')
            parent.appendChild(subParent)
            subParent.innerHTML = `<p><input type="text" value=${element.itemName} class="itemName" readonly="readonly">: 
        <input type="text" value=${element.itemPrice} class="itemPrice" readonly="readonly"> USD  
        <input type='button' class='delItem' value='Delete' id="${element.itemId}">
        <input type='number' min='1' value='1' id="${element.itemId}" class="orderQty"></p>`
        })
        parent.appendChild(orderConfirmationBtn)
        const btnCatalogue = document.querySelector('.productCatalogue')
        btnCatalogue.classList.remove('hidden')
        btnCatalogue.addEventListener('click', () => {
            const info = document.getElementById('info')
            info.innerHTML = ''
            showElements()
        })
        delOrder()
    } else {
        basketNotice()
    }
}

function totalPriceByItem(name, price, qty) {
    const nodeListNames = []
    const nodeListPrices = []
    const nodeListQty = []
    const finalOrderConfirmed = []
    name.forEach(element => {
        if (element.classList.contains('itemName')) {
            if (element.value !== 'undefined') {
                nodeListNames.push(element.value)
            }
        }
    })
    price.forEach(element => {
        if (element.classList.contains('itemPrice')) {
            if (element.value !== 'undefined') {
                nodeListPrices.push(element.value)
            }
        }
    })
    qty.forEach(element => {
        if (element.classList.contains('orderQty')) {
            if (element.value !== 'undefined') {
                nodeListQty.push(element.value)
            }
        }
    })
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
        orderConfirmation(userData)
    }
}

function userDataTable(userData) {
    document.querySelector('.container').classList.add('hidden');
    let message;
    message = `<p> First name : ${userData.firstName}</p>
               <p> Last name : ${userData.lastName}</p>
               <p> Date of Birth : ${userData.birthDate}</p> 
               <p> Gender : ${userData.userGender}</p>
               <p> City : ${userData.userCity}</p>
               <p> Languages : ${userData.userLanguages}</p>
               <p> Email : ${userData.userEmail}</p>  
               <p> Login : ${userData.userLogin}</p>
               <p> Password : ${userData.userPass}</p> `

    const parent = document.getElementById('info')
    parent.innerHTML = message
    const closeBtn = document.createElement('input')
    closeBtn.setAttribute('type', 'button')
    closeBtn.setAttribute('id', 'closeBtn')
    closeBtn.setAttribute('class', 'closeForm')
    closeBtn.setAttribute('value', 'Press to continue')
    closeBtn.addEventListener('click', function () {
        parent.innerHTML = ''
        showElements()
    })
    parent.appendChild(closeBtn)
}

function basketNotice() {
    const info = document.getElementById("info")
    info.innerHTML = '<p>You don`t have any orders yet... Please press back to go to catalogue! ' +
        ' <input type="button" class="backHistory" value="Back to catalogue"></p>'
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.backHistory')
        if (target) {
            info.innerHTML = ''
            target.classList.add('hidden')
            showElements()
        }
    })
}

function showElements() {
    document.getElementById('categories').classList.remove('hidden');
    document.getElementById('product').classList.remove('hidden');
    document.getElementById('products').classList.remove('hidden');
}

function hideElements() {
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('product').classList.add('hidden');
    document.getElementById('products').classList.add('hidden');
}