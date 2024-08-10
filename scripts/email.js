// Inicializa o EmailJS com o seu User ID
(function(){
    emailjs.init("-hjOau9iUZtxNFkXG"); // Substitua YOUR_USER_ID pelo seu user ID do EmailJS
})();

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('email-form');
    var loadingOverlay = document.getElementById('loading');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        loadingOverlay.style.display = 'block'; // Exibe a tela de loading
        document.body.classList.add('no-scroll'); // Bloqueia o scroll

        emailjs.sendForm('service_73zdw4j', 'template_wf9dp3x', form)
            .then(function() {
                console.log('E-mail enviado com sucesso!');
                alert('E-mail enviado com sucesso!');
                loadingOverlay.style.display = 'none'; // Oculta a tela de loading
                document.body.classList.remove('no-scroll'); // Libera o scroll
            }, function(error) {
                console.log('Erro ao enviar e-mail:', error);
                alert('Erro ao enviar e-mail, tente novamente.');
                loadingOverlay.style.display = 'none'; // Oculta a tela de loading
                document.body.classList.remove('no-scroll'); // Libera o scroll
            });
    });
});
