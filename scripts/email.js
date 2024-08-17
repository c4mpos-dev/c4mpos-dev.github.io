(function(){
    emailjs.init("-hjOau9iUZtxNFkXG");
})();

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

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('email-form');
    var loadingOverlay = document.getElementById('loading');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        loadingOverlay.style.display = 'block'; 
        document.body.classList.add('no-scroll'); 

        emailjs.sendForm('service_73zdw4j', 'template_wf9dp3x', form)
            .then(function() {
                showNotification('E-mail enviado com sucesso!', 'success');
                loadingOverlay.style.display = 'none'; 
                document.body.classList.remove('no-scroll'); 
            }, function(error) {
                showNotification('Erro ao enviar e-mail, tente novamente.', 'error');
                loadingOverlay.style.display = 'none'; 
                document.body.classList.remove('no-scroll'); 
            });
    });
});