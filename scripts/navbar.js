// Trocar display do menu
function toggleMenu(isLogo) {
    var menu = document.getElementById("menu");
    var img = document.getElementById("hamburguer");
    img.classList.add('transition');

    if (isLogo == false) {
        if (img.src.endsWith("assets/icons/interface/menu.svg")) {
            // Troca icone hamburguer com animação de zoom
            img.classList.add('zoom-out');
            setTimeout(() => {
                img.src = "assets/icons/interface/close.svg";
                img.classList.remove('zoom-out');
            }, 200);

            // Troca as classes pro menu aparecer
            menu.classList.add("show");
            menu.classList.remove("hidden");
        } else {
            // Troca icone hamburguer com animação de zoom
            img.classList.add('zoom-out');
            setTimeout(() => {
                img.src = "assets/icons/interface/menu.svg";
                img.classList.remove('zoom-out');
            }, 200);

            // Troca as classes pro menu sumir
            menu.classList.remove("show");
            menu.addEventListener('transitionend', function() {
                menu.classList.add("hidden");
            }, { once: true });
        }
    }
    else {
        if (!img.src.endsWith("assets/icons/interface/menu.svg"))  {
            // Troca icone hamburguer com animação de zoom
            img.classList.add('zoom-out');
            setTimeout(() => {
                img.src = "assets/icons/interface/menu.svg";
                img.classList.remove('zoom-out');
            }, 200);

            // Troca as classes pro menu sumir
            menu.classList.remove("show");
            menu.addEventListener('transitionend', function() {
                menu.classList.add("hidden");
            }, { once: true });
        }
    }
}

function smoothScroll(event, targetId, isLogo) {
    if (window.matchMedia("(max-width: 800px)").matches) { 
        toggleMenu(isLogo);
    }
    
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

// Sumir com boxshadow no topo da página
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


// Animação das skills
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


const banner = document.querySelector('.card-about');

banner.addEventListener('mousemove', (e) => {
    const rect = banner.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição X do mouse dentro da div
    const y = e.clientY - rect.top;  // posição Y do mouse dentro da div

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 40; // ajusta a intensidade da rotação
    const rotateY = (x - centerX) / 40;

    banner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

banner.addEventListener('mouseleave', () => {
    banner.style.transition = 'transform 0.5s ease'; // Transição suave ao sair
    banner.style.transform = 'rotateX(0) rotateY(0)';
});

banner.addEventListener('mouseenter', () => {
    banner.style.transition = 'transform 0.2s ease'; // Remove a transição para movimentos do mouse
});