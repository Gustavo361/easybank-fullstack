const dataLoginAccount = document.querySelector('[data-login-account]')
const dataInputUserEmail = document.querySelector('[data-input-user-email]')
const dataInputUserPassword = document.querySelector('[data-input-user-password]')

dataLoginAccount.addEventListener('submit', async (e) => {
    e.preventDefault()

    const userEmail = dataInputUserEmail.value
    const userPassword = dataInputUserPassword.value

    const data = {
        userEmail: userEmail,
        userPassword: userPassword,
    }

    fetch('https://easy-bank-server.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (!data.ok) {
                window.alert('Usuário não encontrado.');
            } else {
                const dynamicRoute = data.redirectRoute || 'initial.html';
                window.location.href = dynamicRoute;
                console.log('Redirected successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocorreu um erro ao fazer login.');
        });
})