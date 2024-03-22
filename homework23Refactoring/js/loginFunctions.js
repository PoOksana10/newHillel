function userDataTable(userData) {
    document.getElementById('regContainer').classList.add('hidden');
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
    parent.classList.add('container')
    parent.innerHTML = message
    const closeBtn = document.createElement('input')
    closeBtn.setAttribute('type', 'button')
    closeBtn.setAttribute('id', 'closeBtn')
    closeBtn.setAttribute('class', 'closeForm')
    closeBtn.setAttribute('value', 'Press to continue')
    closeBtn.addEventListener('click', function () {
        parent.innerHTML = ''
        location.replace('login.html')
    })
    parent.appendChild(closeBtn)
}

function loginCheck(login, password) {
    const user = users.find(element => element.userLogin == login)
    if (user) {
        if (user.userLogin == login && user.userPass == password) {
            return true
        } 
    } else {
        document.getElementById('error').innerHTML = 'Wrong login or password...! Please try again!'
        return false
    }
}

function cityList(parent) {
    for (let city of cities) {
        const cityOption = document.createElement('option');
        cityOption.textContent = city.name;
        cityOption.setAttribute('id', city.id);
        parent.appendChild(cityOption);
    }
}

function userValidation(user) {
    const checkList = [user.firstName, user.lastName, user.birthDate, user.userEmail, user.userLogin, user.userPass]
    let count = 0
    checkList.forEach(element => {
        if (element === '') {count++}
    })
    if (count > 0) {
        let e = document.querySelectorAll('.errorAlert')
        e.forEach(element => element.innerHTML='This is required...')
        return false
    } else {return true}
}

