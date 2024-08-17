function showNotification(message, type) {
    var notification = document.getElementById('notification');

    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.transition = 'transform 0.5s ease';
    notification.style.transform = 'scale(1)';

    setTimeout(function() {
        notification.classList.remove('show');
        notification.style.transition = 'transform 0.5s ease';
        notification.style.transform = 'scale(0)';
    }, 2000); 
}


var form = document.getElementById('email-form');
var loadingOverlay = document.getElementById('loading');


document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    loadingOverlay.style.display = 'block';
    document.body.classList.add('no-scroll');

    const formData = new FormData(this);
    
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            subject: formData.get('subject'),
            content: formData.get('content')
        })
    })
    .then(response => response.text())
    .then(data => {
        showNotification('E-mail enviado com sucesso!', 'success');
        loadingOverlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
    })
    .catch(error => {
        showNotification('Erro ao enviar e-mail, tente novamente.', 'error');
        loadingOverlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });
});