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

function orderForm(cities, selectedProduct) {
    document.getElementById('categories').setAttribute('class', 'hidden')
    document.getElementById('products').setAttribute('class', 'hidden')
    document.getElementById('product').setAttribute('class', 'hidden')
    document.querySelector('.productName').setAttribute('value', selectedProduct.name)
    document.querySelector('.productPrice').setAttribute('value', selectedProduct.price)
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
    let message;
    message = `<p>Ordered ${userData.lastName} , ${userData.firstName} , ${userData.middleName} </p
         <p>Order to be delivered to ${userData.city} , by Nova Posta  to the branch below</p>
         <p>${userData.mail}</p>
         <p>Way of payment : ${userData.payments}</p>
         <p>Ordered product : ${userData.prodName}</p>
         <p>Total price: ${userData.orderNumber * userData.prodPrice} USD</p>
         <p>Comments from client: ${userData.comments}</p>`
    document.getElementById('info').innerHTML = message
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
    buyButton.addEventListener('click', function () {
        orderForm(cities, selectedProduct)
    })
    parent.appendChild(buyButton);
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
    closeBtn.setAttribute('value', 'Press to continue')
    closeBtn.addEventListener('click', function () {
        parent.innerHTML = ''
        document.getElementById('categories').classList.remove('hidden');
        document.getElementById('product').classList.remove('hidden');
        document.getElementById('products').classList.remove('hidden');
    })
    parent.appendChild(closeBtn)
}