function showCategories() {
    const parent = document.getElementById('categories');
    parent.classList.add('container2')
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
    parent.classList.add('container2')
    parent.innerHTML = '';
    selectedCategory.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.setAttribute('data-product', product.id);
        productElement.setAttribute('data-category', categoryId);
        parent.appendChild(productElement);
    });
}

function showProductInfo(categoryId, productId) {
    const selectedCategory = data.find(category => category.key === categoryId);
    const selectedProduct = selectedCategory.products.find(product => product.id == productId);
    const parent = document.getElementById('product');
    parent.classList.add('container2')
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
                if (element.itemName !== selectedProduct.name) {
                    orders.push(element)
                }
            })
        }
        localStorage.setItem('myOrders', '')
        const newOrder = {
            'itemId': selectedProduct.id, 'itemName': selectedProduct.name, 'itemPrice': selectedProduct.price,
        }
        orders.push(newOrder)
        localStorage.setItem('myOrders', JSON.stringify(orders))
        alert(`${selectedProduct.name} has been added to your basket...`)
    })
}


document.querySelector('.logOut').addEventListener('click', () => location.replace('login.html'))
