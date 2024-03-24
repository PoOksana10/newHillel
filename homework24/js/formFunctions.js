document.querySelector('.save_btn').addEventListener('click', (event) => {
    const filledUserForm = document.querySelector('form[name=userForm]')
    const formElements = [
        filledUserForm.name.value,
        filledUserForm.login.value,
        filledUserForm.email.value,
        filledUserForm.age.value]
    formElements.forEach(element => {
        if (element === '') {
            alert('All fields must be filled!')
            const error = document.querySelectorAll('.error')
            error.forEach(element => element.innerHTML = 'This is required...')
        }
    })
    const userDataBase = JSON.parse(localStorage.getItem('userList'))
    console.log(userDataBase)
    const updatedUserList = []
    userDataBase.forEach( (element)=> {
        updatedUserList.push(element)
        console.log(element, userDataBase.length) }
    )
    const userId = event.target.getAttribute('data-id')
    const currentUser = userDataBase.find(element => element.id == userId)
    const currentUserIndex = userDataBase.indexOf(currentUser)

    if (currentUser) {
        updatedUserList[currentUserIndex] = {
            'id' : userId,
            'name' : filledUserForm.name.value,
            'login' : filledUserForm.login.value,
            'email' : filledUserForm.email.value,
            'age' : filledUserForm.age.value,
        }
        console.log(typeof updatedUserList, updatedUserList)
        localStorage.removeItem('userList')
        localStorage.setItem('userList', JSON.stringify(`${updatedUserList}`))
        event.target.removeAttribute('data-id')
        console.log(JSON.parse(localStorage.getItem('userList')))

        }

})