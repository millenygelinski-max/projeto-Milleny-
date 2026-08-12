document.addEventListener("DOMContentLoaded", function () {
    // Animação suave ao rolar até as raças
    const cards = document.querySelectorAll(".card-raca");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Adiciona um pequeno atraso em cascata para cada card aparecer suavemente
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
