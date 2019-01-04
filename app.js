// * Form Blur Event Listeners  
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('postal').addEventListener('blur', validatePostal);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    //* starts a to z small or big between 2 or 10 letters $ -> ends here
    const re = /^[a-zA-z]{2,10}$/;

    // * value -> gets the input
    if (!re.test(name.value)) {
        //If that is invalid add this class:
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validatePostal() {
    const postal = document.getElementById('postal');
    // * ? makes it optional
    const re = /^[0-9]{4}(-[0-9]{3})?$/;


    if (!re.test(postal.value)) {
        postal.classList.add('is-invalid');
    } else {
        postal.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    // example 
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,9})$/;


    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

}

function validatePhone() {
    const phone = document.getElementById('phone');
    // example 
    // more internation doesn't work with pt numbers
    // const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    // pt phone numbers i believe
    const re = /^\(?\d{9}\)?$/;


    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }

}