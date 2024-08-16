function toggleMenu(isLogo) {
    var menu = document.getElementById("menu");
    var img = document.getElementById("hamburguer");
    img.classList.add('transition');

    if (!isLogo) {
        if (img.src.endsWith("assets/icons/interface/menu.svg")) {
            img.classList.add('zoom-out');
            setTimeout(() => {
                img.src = "assets/icons/interface/close.svg";
                img.classList.remove('zoom-out');
            }, 200);

            menu.classList.add("show");
            menu.classList.remove("hidden");

        } else {
            img.classList.add('zoom-out');
            setTimeout(() => {
                img.src = "assets/icons/interface/menu.svg";
                img.classList.remove('zoom-out');
            }, 200);

            menu.classList.remove("show");
            menu.addEventListener('transitionend', function() {
                menu.classList.add("hidden");
            }, { once: true });
        }
    }
    else {
        if (img.src.endsWith("assets/icons/interface/close.svg"))  {
            
            img.classList.add('zoom-out');
            setTimeout(() => {
                img.src = "assets/icons/interface/menu.svg";
                img.classList.remove('zoom-out');
            }, 200);

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
        targetPosition = 0;
    } else {
        var target = document.querySelector(targetId);
        targetPosition = target.offsetTop - 80;
    }

    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 800;
    var start = null;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var percent = Math.min(progress / duration, 1);
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


window.addEventListener('scroll', toggleBoxShadow);
document.addEventListener('DOMContentLoaded', toggleBoxShadow);