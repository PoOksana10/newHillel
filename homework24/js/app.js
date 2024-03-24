document.addEventListener('DOMContentLoaded', () => {
    const dataBase = JSON.parse(localStorage.getItem('userList'))
    if (dataBase.length) {
        showUsers();
    } else {
        localStorage.setItem('userList', JSON.stringify(users))
        showUsers()
    }
});

document.querySelector('.add_btn').addEventListener('click', () => {
    document.querySelector('#info').innerHTML = ''
    cleanElements()
    document.querySelector('#view').classList.add('hidden');
    document.querySelector('#form').classList.remove('hidden');
});

