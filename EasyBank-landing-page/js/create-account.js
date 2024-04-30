const dataCreateAccount = document.querySelector('[data-create-account]');
const dataInputUserName = document.querySelector('[data-input-user-name]');
const dataInputUserEmail = document.querySelector('[data-input-user-email]');
const dataInputUserPassword = document.querySelector('[data-input-user-password]');

dataCreateAccount.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = dataInputUserName.value;
    const userEmail = dataInputUserEmail.value;
    const userPassword = dataInputUserPassword.value;

    const data = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
    };

    fetch('https://easy-bank-server.onrender.com/create-account', {
    // fetch('http://localhost:3000/create-account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.ok) {
                const dynamicRoute = data.redirectRoute || 'initial.html';
                window.location.href = dynamicRoute;
                console.log('Redirected successfully');
            } else {
                if (data.validationErrors) {
                    if (data.validationErrors.userName) {
                        window.alert('Erro no nome: ' + data.validationErrors.userName);
                    }
                    if (data.validationErrors.userEmail) {
                        window.alert('Erro no e-mail: ' + data.validationErrors.userEmail);
                    }
                    if (data.validationErrors.userPassword) {
                        window.alert('Erro na senha: ' + data.validationErrors.userPassword);
                    }
                } else {
                    window.alert(data.error);
                }
            }
        })
        .catch(error => {
            console.log(data)
            alert('Preencha o formulário corretamente no front', error);
            console.error('Error - Preencha o formulário corretamente no front', error);
        })
});
