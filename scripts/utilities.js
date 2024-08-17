document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelector(".skills-animate");

    function checkVisibility() {
        const rect = skills.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            skills.classList.add("visible");
        } else if (rect.top >= window.innerHeight) {
            skills.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
});


const card = document.querySelector('.card-about');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 40;
    const rotateY = (x - centerX) / 40;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateX(0) rotateY(0)';
});

card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.2s ease';
});


function changeTitle(section) {
    console.log(section)
    switch (section) {
        case "about":
            document.title = "Cauã Campos | Sobre";
            break;
        case "skills":
            document.title = "Cauã Campos | Habilidades";
            break;
        case "contact":
            document.title = "Cauã Campos | Contato";
            break;
        default:
            document.title = "Cauã Campos";
    }
}