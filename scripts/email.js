// Inicializa o EmailJS com o seu User ID
(function(){
    emailjs.init("-hjOau9iUZtxNFkXG"); // Substitua YOUR_USER_ID pelo seu user ID do EmailJS
})();

function showNotification(message, type) {
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
    var notification = document.getElementById('notification');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        loadingOverlay.style.display = 'block'; // Exibe a tela de loading
        document.body.classList.add('no-scroll'); // Bloqueia o scroll

        emailjs.sendForm('service_73zdw4j', 'template_wf9dp3x', form)
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
