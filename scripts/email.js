const config = require('./config'); // Importa o arquivo de configuração

(function(){
    emailjs.init(config.EMAILJS_SERVICE_ID); // Substitua YOUR_USER_ID pelo seu user ID do EmailJS
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
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário
	
        document.addEventListener('DOMContentLoaded', function() {

            emailjs.sendForm(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, form)
                .then(function() {
                    showNotification('E-mail enviado com sucesso!', 'success');
                    loadingOverlay.style.display = 'none'; // Oculta a tela de loading
                    document.body.classList.remove('no-scroll'); // Libera o scroll
                }, function(error) {
                    showNotification('Erro ao enviar e-mail, tente novamente.', 'error');
                    loadingOverlay.style.display = 'none'; // Oculta a tela de loading
                    document.body.classList.remove('no-scroll'); // Libera o scroll
            });
        }); 
    });
});