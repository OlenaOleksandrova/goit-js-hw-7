// 1.2
document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();

 const { email, password } = event.target.elements;

    const emailEl = email.value.trim();
    const passwordEl = password.value.trim();
    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
    }