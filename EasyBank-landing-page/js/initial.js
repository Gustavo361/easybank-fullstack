document.getElementById('logoutButton').addEventListener('click', function() {
    fetch('https://easy-bank-server.onrender.com/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (response.ok) {
            // window.location.href = 'https://easy-bank-ui.onrender.com'
            console.log(response.ok)
        } else {
            console.error('Erro ao fazer logout');
        }
    })
    .catch(error => {
        console.error('Erro ao fazer logout', error);
    });
});