function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function smoothScroll(event, targetId) {
    event.preventDefault();

    var targetPosition;
    if (targetId === '#me') {
        targetPosition = 0; // Topo da página
    } else {
        var target = document.querySelector(targetId);
        targetPosition = target.offsetTop - 80; // Subtrai 80px do topo da seção
    }

    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 800; // Duração da rolagem em milissegundos
    var start = null;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var percent = Math.min(progress / duration, 1); // Percentagem concluída
        window.scrollTo(0, startPosition + distance * percent);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    });
}


function toggleBoxShadow() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset < 10) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgb(87, 87, 87)';
    }
}

// Adiciona o evento de rolagem para mostrar/esconder o box-shadow
window.addEventListener('scroll', toggleBoxShadow);

// Chama a função uma vez para definir o estado inicial
document.addEventListener('DOMContentLoaded', toggleBoxShadow);



document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector(".skills-animate");

    function checkVisibility() {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add("visible");
        } else if (rect.top >= window.innerHeight) {
            element.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica inicialmente se o elemento já está visível
});

