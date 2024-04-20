document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.querySelector('.input-group');
    userForm.classList.add('isHidden');
    if (window.confirm("Please confirm that you are above age of 18?")) {
        userForm.classList.remove('isHidden');
    } else {
        alert('You will leave the page now...');
        history.back();
    }
});

document.querySelector('.myCar').addEventListener('click', function () {
    const cars = ['BMW', 'VOLVO', 'AUDI', 'MERCEDES', 'MITSUBISHI'];
    const df = document.mainForm;
    const isValid = validation(df);
    if (isValid) {
        MyCar.prototype = new Person();
        const prediction = new MyCar(
            df.firstName.value,
            df.lastName.value,
            df.age.value,
            cars[Math.floor(Math.random() * cars.length)]
        )
        prediction.getInfo();
        prediction.getPro();
    }
});


document.addEventListener('click', (e) => {
    const target = e.target.closest('.prediction');
    if (target) {
        target.classList.add('isHidden');
        ExtraPrediction.prototype = new MyCar();
        const r = new ExtraPrediction();
        r.getInfo();
        r.getExtraPrediction();
    }
});


