const password = document.querySelector("#form-password");
const passwordConfirm = document.querySelector("#form-confirmPassword");

function validatePassword() {
    if (password.value != passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Passwords Don't Match");
    } else {
        passwordConfirm.setCustomValidity('');
    }
}

password.onchange = validatePassword;
passwordConfirm.onkeyup = validatePassword;