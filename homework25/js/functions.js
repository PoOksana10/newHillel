function showUsers() {
    const parent = document.querySelector('#grid');
    parent.addEventListener('click', gridClickHandler)
    const usersLocal = JSON.parse(localStorage.getItem('userList'))
    usersLocal.forEach(user => {
        createRow(user, parent)
    })
}

function createRow(user, parent) {
    const userRow = document.createElement('div');
    userRow.classList.add('user_row');
    userRow.setAttribute('data-id', user.id);
    createElement('div', {className: 'user_id'}, user.id, userRow);
    createElement('div', {className: 'user_name'}, user.name, userRow);
    const divButtons = createElement('div', {className: 'user_buttons'}, '', userRow);
    createElement('input', {type: 'button', value: 'View', 'data-action': 'view'}, '', divButtons);
    createElement('input', {type: 'button', value: 'Edit', 'data-action': 'edit'}, '', divButtons);
    createElement('input', {type: 'button', value: 'Delete', 'data-action': 'delete'}, '', divButtons);
    parent.appendChild(userRow);
}

function createElement(tagName, attributes, content, parent, eventHandlers) {
    const element = document.createElement(tagName);
    for (let key in attributes) {
        const attribute = key === 'className' ? 'class' : key;
        element.setAttribute(attribute, attributes[key]);
    }
    for (let event in eventHandlers) {
        element.addEventListener(event, eventHandlers[event]);
    }
    element.textContent = content;
    parent.appendChild(element);
    return element;
}

function gridClickHandler(event) {
    if (event.target.nodeName === 'INPUT') {
        const dataAction = event.target.getAttribute('data-action');
        const userId = event.target.closest('.user_row').getAttribute('data-id');
        const user = getUserById(userId);
        switch (dataAction) {
            case 'view':
                showUserData(user);
                break;
            case 'edit':
                editUserData(user)
                break;
            case 'delete':
                deleteUserData(user);
                break;
        }
    }
}

function getUserById(id) {
    return JSON.parse(localStorage.getItem('userList')).find(user => user.id === id);
}

function showUserData(user) {
    document.querySelector('#form').classList.add('hidden')
    document.querySelector('#view').classList.remove('hidden');
    document.querySelector('#view').innerHTML = `<div class="viewUser"><p><h3>User Name: <b id="b">${user.name}</b></h3></p>
<p><h3>User Login: <b id="b">${user.login}</b></p></h3> </div>`;
}

function editUserData(user) {
    document.querySelector('#view').innerHTML = ''
    document.querySelector('#view').classList.add('hidden');
    document.querySelector('#form').classList.remove('hidden')
    const editForm = document.querySelector('form[name=userForm]')
    editForm.userName.value = user.name
    editForm.login.value = user.login
    editForm.email.value = user.email
    editForm.age.value = user.age
    editForm.pass.value = user.password
    editForm.credit.value = user.creditCard
    editForm.userPhone.value = user.userPhone
    document.querySelector('.save_btn').setAttribute('data-id', `${user.id}`)
}

function updateUserInfo(userId, name) {
    const userUpdate = document.querySelector(`div[data-id="${userId}"]`)
    userUpdate.querySelector('.user_name').innerHTML = name
}

function formValidation(event) {
    const filledUserForm = document.querySelector('form[name=userForm]')
    const formElements = [filledUserForm.userName, filledUserForm.email, filledUserForm.country, filledUserForm.userPhone, filledUserForm.age, filledUserForm.credit, filledUserForm.login, filledUserForm.pass]
    const outputData = phoneApplication()
    const namePattern = /^[A-Z][a-z]{1,50}\s[A-Z][a-z]{1,50}$/
    const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    const userPhonePattern = new RegExp('[0-9]{' + outputData[1] + '}')
    const creditCardPattern1 = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/i
    const creditCardPattern2 = /[0-9]{16}/i
    const falseCheckList = [
        {'id': 'check1', 'output': false, 'message': 'credit card number', 'elementId': filledUserForm.credit.id,},
        {'id': 'check2', 'output': false, 'message': 'name', 'elementId': filledUserForm.userName.id,},
        {'id': 'check3', 'output': false, 'message': 'phone number', 'elementId': filledUserForm.userPhone.id,},
        {'id': 'check4', 'output': false, 'message': 'email address', 'elementId': filledUserForm.email.id,},
    ]
    let emptyElementCount = formElements.length;
    formElements.forEach(element => {
        if (element.value === "") {
            let error = element.id + "Error"
            document.getElementById(error).innerHTML = "This is required..."
        } else {
            emptyElementCount -= 1
        }
    })
    if (emptyElementCount == 0) {
        const creditUserCard = filledUserForm.credit.value.trim()
        const userName = filledUserForm.userName.value.trim()
        const userPhoneValue = filledUserForm.userPhone.value.trim()
        const userEmail = filledUserForm.userEmail.value.trim()
        if ((creditUserCard.length == 16 && creditUserCard.match(creditCardPattern2))
            || (creditUserCard.length == 19 && creditUserCard.match(creditCardPattern1))) {
            falseCheckList[0].output = true
        }
        if (userName.match(namePattern)) {
            falseCheckList[1].output = true
        }
        if (userPhoneValue.length == outputData[1]) {
            if (userPhoneValue.match(userPhonePattern)) {
                falseCheckList[2].output = true
            }
        }
        if (userEmail.match(emailPattern)) {
            falseCheckList[3].output = true
        }
        let count = falseCheckList.length;
        falseCheckList.forEach(element => {
            if (element.output === false) {
                document.getElementById(element.elementId).classList.add('error')
                document.querySelector(`label[for="${element.elementId}"]`).style.color = 'red'
                alert(`The ${element.message} is wrong! Please check and try again...`)
            } else {
                count -= 1
            }
        })
        if (count == 0) {
            falseCheckList.forEach(element => {
                document.getElementById(element.elementId).classList.remove('error')
                document.querySelector(`label[for="${element.elementId}"]`).style.color = 'black'
            })
            saveData(filledUserForm, event)
        }
    }
}

function saveData(filledUserForm, event) {
    const userDataBase = JSON.parse(localStorage.getItem('userList'))
    let createNewUser;
    let userId = event.target.getAttribute('data-id')
    let currentUserIndex;
    if (userId) {
        const currentUser = userDataBase.find(element => element.id == userId)
        if (currentUser) {
            currentUserIndex = userDataBase.indexOf(currentUser)
            updateUserInfo(userId, filledUserForm.userName.value)
        }
    } else {
        userId = generateKey()
        currentUserIndex = userDataBase.length
        createNewUser = true
    }
    userDataBase[currentUserIndex] = {
        'id': userId,
        'name': filledUserForm.userName.value,
        'email': filledUserForm.email.value,
        'countryCode': filledUserForm.country.value,
        'userPhone': filledUserForm.userPhone.value,
        'age': filledUserForm.age.value,
        'creditCard': filledUserForm.credit.value,
        'login': filledUserForm.login.value,
        'password': filledUserForm.pass.value,
    }
    localStorage.removeItem('userList')
    localStorage.setItem('userList', JSON.stringify(userDataBase))
    if (createNewUser) {
        createRow(userDataBase[currentUserIndex], document.querySelector('#grid'))
    }
    cleanElements()
    event.target.removeAttribute('data-id')
    document.querySelector('#form').classList.add('hidden')
}

function deleteUserData(user) {
    document.querySelector('#form').classList.add('hidden');
    if (confirm('Please confirm to delete user!')) {
        const localData = JSON.parse(localStorage.getItem('userList'))
        const currentUser = localData.find(data => data.id === user.id)
        const currentIndex = localData.indexOf(currentUser)
        localData.splice(currentIndex, 1)
        localStorage.setItem('userList', JSON.stringify(localData))
        document.querySelector(`div[data-id="${user.id}"]`).innerHTML = ''
        if (localData.length == 0) {
            document.querySelector('#info').innerHTML = '<p>There is no users in database left! 🥲</p>'
        }
    }
}

function cleanElements() {
    const filledUserForm = document.querySelector('form[name=userForm]')
    filledUserForm.userName.value = ''
    filledUserForm.login.value = ''
    filledUserForm.email.value = ''
    filledUserForm.age.value = ''
    filledUserForm.pass.value = ''
    filledUserForm.credit.value = ''
    filledUserForm.userPhone.value = ''

}

function generateKey() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < 5) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    return result;
}

function createCountryCodeList() {
    const parent = document.getElementById('country')
    countryCodes.forEach(element => {
        const child = document.createElement('option')
        if (element.label === 'Ukraine') {
            child.setAttribute('selected', 'selected')
            document.getElementById('countryCode').setAttribute('value', `+${element.phone}`)
        }
        child.setAttribute('id', `${element.code}`)
        child.innerText = element.label
        parent.appendChild(child)
    })
}

function phoneApplication() {
    const filledUserForm = document.querySelector('form[name=userForm]')
    const outputData = []
    const userCountry = filledUserForm.country.value
    let userCountryPhoneCode
    let phoneLengthByCountry
    countryCodes.forEach(element => {
        if (element.label === userCountry) {
            userCountryPhoneCode = element.phone
            phoneLengthByCountry = element.phoneLength
            outputData.push(userCountryPhoneCode)
            outputData.push(phoneLengthByCountry)
        }
    })
    return outputData
}

function showUserPhoneCode() {
    const outputData = phoneApplication()
    document.getElementById('countryCode').setAttribute('value', `${outputData[0]}`)
}
