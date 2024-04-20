function validation(df) {
    const formElements = [df.firstName, df.lastName, df.age];
    const emptyCheckCount = emptyCheck(formElements);
    let isValid = false;
    let matchCheckCount;
    if (emptyCheckCount == 0) {
        matchCheckCount = matchCheck(formElements);
    }
    if (emptyCheckCount == 0 && matchCheckCount == 0) {
        isValid = true;
    }
    return isValid;
}

function emptyCheck(formElements) {
    let emptyCount = formElements.length;
    formElements.forEach(element => {
        document.querySelector(`label[for="${element.id}"]`).style.color = 'bisque';
        document.getElementById(element.id).classList.remove('error');
        document.getElementById(element.id + 'Error').innerHTML = '';
        if (element.value === '') {
            element.classList.add('error');
            errorAlert(element, 'emptyCheck');
        } else {
            emptyCount--;
        }
    });
    return emptyCount;
}

function matchCheck(formElements) {
    let matchCheckCount = formElements.length;
    formElements.forEach(element => {
        if (element.id !== 'age') {
            if (!element.value.match(/^[A-Z]{1}[a-z]{1,30}$/)) {
                errorAlert(element, 'matchCheck');
            } else {
                matchCheckCount--;
            }
        } else {
            if (!element.value.match(/^[0-9]{2,3}$/) || parseInt(element.value) < 18) {
                errorAlert(element, 'matchCheck');
            } else {
                matchCheckCount--;
            }
        }
    });
    return matchCheckCount;
}

function errorAlert(element, initialCheck) {
    document.getElementById(element.id).classList.add('error');
    document.querySelector(`label[for="${element.id}"]`).style.color = 'darkred';
    document.getElementById(element.id + 'Error').style.color = 'darkred';
    if (initialCheck === 'emptyCheck') {
        let message = 'This is required...';
        if (element.id === 'age') {
            message = 'Number is required!';
        }
        document.getElementById(element.id + 'Error').innerHTML = message;
    } else {
        let message;
        if (element.id === 'firstName') {
            message = 'John, Sarah, ...';
        } else if (element.id === 'lastName') {
            message = 'Smith, Conor, ...';
        } else {
            message = '18,19,20...100';
        }
        const alertError = document.getElementById(element.id + 'Error');
        alertError.innerHTML = '<p>Wrong entry! Example:' + message + '</p';
        alertError.style.color = 'red';
    }
}

function Person() {
    this.getInfo = function () {
        document.querySelector('.input-group').innerHTML = 'Mr. ' + this._firstName + ' ' + this._lastName;
    };
}


function MyCar(firstName, lastName, age, base) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this.base = base;
    this.getPro = function () {
        document.querySelectorAll('.input-group-text').forEach(element =>
            element.classList.add('isHidden'));
        const n = document.querySelector('.input-group');
        n.innerHTML += '<p>By prediction of our crystal ball, your car should be: </p>' + '<p>' + this.base + '</p>';
        const btn = document.createElement('input');
        btn.setAttribute('value', 'One more prediction');
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'prediction');
        n.append(btn);
    };
}

function ExtraPrediction() {
    this.getExtraPrediction = function () {
        const mainForm = document.querySelector('.input-group');
        mainForm.innerText = 'Sorry, we have to take your car back - next time do not be so greedy!💰';
        setTimeout(function () {
            location.reload()
        }, 5000);
    };
}