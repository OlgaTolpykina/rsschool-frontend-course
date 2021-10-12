const form = document.querySelector('.buy__form');

const nameInput = document.querySelector('.input__name');
const nameError = document.querySelector('.name-error');
const email = document.querySelector('.input__email');
const emailError = document.querySelector('.email-error');
const phone = document.querySelector('.input__phone');
const phoneError = document.querySelector('.phone-error');

//Валидация имени

nameInput.addEventListener('blur', function (event) {
    if (nameInput.validity.valid) {
        nameError.textContent = '';
        nameError.className = 'input__error';
        nameInput.classList.remove('_invalid');
    } else {
        showErrorName();
    }
});

function showErrorName() {
    if(nameInput.validity.valueMissing) {
        nameError.textContent = "You need to enter your email.";
    } else if (nameInput.validity.typeMismatch) {
        nameError.textContent = "Value entered should be an email";
    }

    nameInput.classList.add('_invalid');
    nameError.classList.add('input__error_active');
};

//Валидация имейла

email.addEventListener('blur', function(event) {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'input__error';
        email.classList.remove('_invalid');
    } else {
        showErrorEmail();
    }
});

function showErrorEmail() {
    if(email.validity.valueMissing) {
        emailError.textContent = "You need to enter your email.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Value entered should be an email";
    }

    email.classList.add('_invalid');
    emailError.classList.add('input__error_active');
}

//Валидация телефона

phone.addEventListener('blur', function(event) {
    if (phone.validity.valid) {
        phoneError.textContent = '';
        phoneError.className = 'input__error';
        phone.classList.remove('_invalid');
    } else {
        showErrorPhone();
    }
});

function showErrorPhone() {
    if(phone.validity.valueMissing) {
        phoneError.textContent = "You need to enter your phone.";
    } else if (phone.validity.typeMismatch) {
        phoneError.textContent = "Value entered should be a phone";
    }

    phone.classList.add('_invalid');
    phoneError.classList.add('input__error_active');
}

phone.oninput = function () {
    a = phone.value;
    b = a.split('');
    let count = 0;
    for (let i = 0; i < b.length; i++ ) {
        console.log(b[i] >= 0);
        if (b[i] >= 0){
            count += 1;
        }
    }
    if (count > 10) {
        phoneError.textContent = 'Please enter no more than 10 digits.'
        phone.classList.add('_invalid');
        phoneError.classList.add('input__error_active');
    }
};


form.addEventListener('submit', function (event) {
    if (!nameInput.validity.valid) {
        event.preventDefault();
        showErrorName();
    }
    if (!email.validity.valid) {
        event.preventDefault();
        showErrorEmail();
    }
    if (!phone.validity.valid ) {
        event.preventDefault();
        showErrorPhone();
    }
    if (phoneError.textContent='Please enter no more than 10 digits.') {
        event.preventDefault();
        showErrorPhone();
        phoneError.textContent='Please enter no more than 10 digits.'
    }
});