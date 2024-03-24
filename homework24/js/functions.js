function showUsers() {
    const parent = document.querySelector('#grid');
    parent.addEventListener('click', gridClickHandler)
    const usersLocal = JSON.parse(localStorage.getItem('userList')) || users
    // dataset data-* (data-attributes)

    for (let user of usersLocal) {
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
        // const userId = event.target.parentNode.parentNode.getAttribute('data-id');
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
                alert("DELETE button" + userId);
                break;
        }
    }
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

function showUserData(user) {
    document.querySelector('#view').classList.remove('hidden');
    document.querySelector('#view').innerHTML = `<div class="viewUser"><p><h3>User Name: <b id="b">${user.name}</b></h3></p>
<p><h3>User Login: <b id="b">${user.login}</b></p></h3> </div>`;
}

function editUserData(user) {
    document.querySelector('#form').classList.remove('hidden')
    const editForm = document.querySelector('form[name=userForm]')
    editForm.name.value = user.name
    editForm.login.value = user.login
    editForm.email.value = user.email
    editForm.age.value = user.age
    document.querySelector('.save_btn').setAttribute('data-id', `${user.id}`)
}
