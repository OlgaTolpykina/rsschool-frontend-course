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
        nameError.textContent = "You need to enter your name.";
    } else if (nameInput.validity.patternMismatch) {
        nameError.textContent = "Value entered should consist of cyrillic/latin letters.";
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
    } else if (email.validity.patternMismatch) {
        emailError.textContent = "Value entered should be an email";
    }

    email.classList.add('_invalid');
    emailError.classList.add('input__error_active');
}

//Валидация телефона

phone.addEventListener('blur', function(event) {
    if (phone.validity.valid  && !phoneError.className.includes('input__error_active')) {
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
    } else if (phone.validity.patternMismatch) {
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
        if (b[i] >= 0){
            count += 1;
        }
    }
    if (count > 10) {
        phoneError.textContent = 'Please enter no more than 10 digits.'
        phone.classList.add('_invalid');
        phoneError.classList.add('input__error_active');
    } else if (count >= 0 && count <= 10) {
        phone.classList.remove('_invalid');
        phoneError.classList.remove('input__error_active');
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
    if (!phone.validity.valid || phoneError.className.includes('input__error_active')) {
        event.preventDefault();
        showErrorPhone();
    }
});