document.addEventListener('DOMContentLoaded', () => {

    // 1. Filtro dinâmico por categoria de raça
    const filterButtons = document.querySelectorAll('.filter-btn');
    const racaCards = document.querySelectorAll('.raca-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            racaCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. Curiosidades aleatórias
    const curiosidades = [
        "O Mangalarga Marchador é famoso por não dar o trote (movimento saltado), mantendo sempre apoios intercalados para dar conforto ao montador.",
        "Cavalos não conseguem respirar pela boca, apenas pelas narinas.",
        "O olho do cavalo é um dos maiores entre os mamíferos terrestres.",
        "Cavalos conseguem dormir tanto em pé quanto deitados.",
        "O Clydesdale pode pesar mais de 1.000 kg e ter mais de 1,80m de altura de cernelha.",
        "O Quarto de Milha consegue atingir até 88 km/h em distâncias curtas."
    ];

    const btnFact = document.getElementById('btn-fact');
    const factText = document.getElementById('fact-text');

    btnFact.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * curiosidades.length);
        factText.textContent = curiosidades[randomIndex];
    });

});
