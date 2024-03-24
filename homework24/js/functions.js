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

// attributes: { value: 'Delete', type: 'button', className: 'delete_btn' }
// eventHandlers: { click: () => {}, mouseover: () => {}... }
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
    editForm.name.value = user.name
    editForm.login.value = user.login
    editForm.email.value = user.email
    editForm.age.value = user.age
    document.querySelector('.save_btn').setAttribute('data-id', `${user.id}`)
}

function updateUserInfo(userId, name) {
    const userUpdate = document.querySelector(`div[data-id="${userId}"]`)
    userUpdate.querySelector('.user_name').innerHTML = name
}

function formValidation(event) {
    const filledUserForm = document.querySelector('form[name=userForm]')
    const formElements = [filledUserForm.name.value, filledUserForm.login.value, filledUserForm.email.value, filledUserForm.age.value]
    formElements.forEach(element => {
        if (element === '') {
            const error = document.querySelectorAll('.error')
            error.forEach(element => element.innerHTML = 'This is required...')
        }
    })
    saveData(filledUserForm, event)
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
            updateUserInfo(userId, filledUserForm.name.value)
        }
    } else {
        userId = generateKey()
        currentUserIndex = userDataBase.length
        createNewUser = true

    }
    userDataBase[currentUserIndex] = {
        'id': userId,
        'name': filledUserForm.name.value,
        'login': filledUserForm.login.value,
        'email': filledUserForm.email.value,
        'age': filledUserForm.age.value,
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
    filledUserForm.name.value = ''
    filledUserForm.login.value = ''
    filledUserForm.email.value = ''
    filledUserForm.age.value = ''
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
