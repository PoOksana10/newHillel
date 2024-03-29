document.addEventListener('DOMContentLoaded', () => {
    const dataBase = localStorage.getItem('userList')
    if (dataBase) {
        if (JSON.parse(dataBase).length) {
            showUsers();
        } else if (JSON.parse(dataBase).length == 0) {
            localStorage.setItem('userList', JSON.stringify(users))
            showUsers()
        } else {
            localStorage.setItem('userList', '')
        }
    }
});

document.querySelector('.add_btn').addEventListener('click', () => {
    cleanElements()
    document.querySelector('#info').innerHTML = ''
    document.querySelector('#view').classList.add('hidden');
    document.querySelector('#form').classList.remove('hidden');
});

document.userForm.addEventListener('change', (event) => {
    const target = event.target.id
    if (target) {
        const e = target + 'Error'
        if (e !== 'countryError') {
            document.getElementById(e).innerHTML = ''
        }
    }
})

document.getElementById('country').addEventListener('change', showUserPhoneCode)