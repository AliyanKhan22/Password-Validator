document.addEventListener('DOMContentLoaded', (event) => {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const lengthIndicator = document.getElementById('length');
    const letterIndicator = document.getElementById('letter');
    const capitalIndicator = document.getElementById('capital');
    const numberIndicator = document.getElementById('number');
    const specialIndicator = document.getElementById('special');
    passwordInput.onkeyup = function() {
        // Validate length
        if (passwordInput.value.length >= 8) {
            lengthIndicator.classList.remove('invalid');
            lengthIndicator.classList.add('valid');
        } else {
            lengthIndicator.classList.remove('valid');
            lengthIndicator.classList.add('invalid');
        }
        // Validate lowercase letters
        const lowerCaseLetters = /[a-z]/g;
        if (passwordInput.value.match(lowerCaseLetters)) {
            letterIndicator.classList.remove('invalid');
            letterIndicator.classList.add('valid');
        } else {
            letterIndicator.classList.remove('valid');
            letterIndicator.classList.add('invalid');
        }
        // Validate capital letters
        const upperCaseLetters = /[A-Z]/g;
        if (passwordInput.value.match(upperCaseLetters)) {
            capitalIndicator.classList.remove('invalid');
            capitalIndicator.classList.add('valid');
        } else {
            capitalIndicator.classList.remove('valid');
            capitalIndicator.classList.add('invalid');
        }
        // Validate numbers
        const numbers = /[0-9]/g;
        if (passwordInput.value.match(numbers)) {
            numberIndicator.classList.remove('invalid');
            numberIndicator.classList.add('valid');
        } else {
            numberIndicator.classList.remove('valid');
            numberIndicator.classList.add('invalid');
        }
        // Validate special characters
        const specialCharacters = /[!@#$%^&*]/g;
        if (passwordInput.value.match(specialCharacters)) {
            specialIndicator.classList.remove('invalid');
            specialIndicator.classList.add('valid');
        } else {
            specialIndicator.classList.remove('valid');
            specialIndicator.classList.add('invalid');
        }
    }
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });
});
