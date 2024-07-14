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
    var target = document.querySelector(targetId);
    var targetPosition = target.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 800; // duração da rolagem em milissegundos
    var start = null;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var percent = Math.min(progress / duration, 1); // percentagem concluída
        window.scrollTo(0, startPosition + distance * percent);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    });
}
