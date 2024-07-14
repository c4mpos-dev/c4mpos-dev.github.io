function toggleMenu() {
    var menu = document.getElementById("menu");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

/* rolagem suave */
function smoothScroll(event, targetId) {
    event.preventDefault();
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}