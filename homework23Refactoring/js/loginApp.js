window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('regContainer').classList.add('hidden')
});

document.getElementById('regLink').addEventListener('click', () => {
    document.getElementById('regContainer').classList.remove('hidden')
    document.getElementById('logContainer').classList.add('hidden')
})

document.getElementById('logLink').addEventListener('click', () => {
    document.getElementById('regContainer').classList.add('hidden')
    document.getElementById('logContainer').classList.remove('hidden')
})

document.getElementById('logUser').addEventListener('click', () => {
    const logForm = document.loginForm
    const login = logForm.userName.value
    const password = logForm.userPassword.value
    if (login && password) {
        const identity = loginCheck(login, password)
        if (identity) {location.replace('shop.html')}  
    } else {alert('Please enter both login and password to continue!')}
    
})

document.querySelector('#regContainer').addEventListener("mouseover", function () {
    const parent = document.getElementById('userCity')
    cityList(parent)
}, {once: true})

document.querySelector('.regFormSubmit').addEventListener('click', () => {
    const form = document.registrationForm;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const birthDate = form.birthDate.value;
    const userGender = form.userGender.value;
    const userCity = form.userCity.value;
    const languages = []
    const userEmail = form.userEmail.value;
    const userAddress = form.value;
    const userLogin = form.value;
    const userPass = form.userPass.value;

    document.registrationForm.userLanguages.forEach(languageCheckBox => {
        if (languageCheckBox.checked) {
            let data = languageRef.filter(lang => lang.id === languageCheckBox.value)[0].lan
            languages.push(data);
        }
    })

    const userData = {
        'firstName': firstName,
        'lastName': lastName,
        'birthDate': birthDate,
        'userGender': userGender,
        'userCity': userCity,
        'userLanguages': languages,
        'userEmail': userEmail,
        'userAddress': userAddress,
        'userLogin': userLogin,
        'userPass': userPass,
    }
    const userCheck = userValidation(userData)
    if (userCheck) {
        localStorage.setItem('Users', JSON.stringify(userData))
        userDataTable(userData);
    } else {
        alert('Please fill up all required fields...')
    }

})

