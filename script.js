
document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidade de Filtro para Raças
    const filterButtons = document.querySelectorAll('.filter-btn');
    const racaCards = document.querySelectorAll('.raca-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            racaCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. Gerador de Curiosidades Aleatórias
    const curiosidades = [
        "Cavalos não conseguem respirar pela boca, apenas pelas narinas.",
        "O olho do cavalo é um dos maiores entre os mamíferos terrestres.",
        "Cavalos conseguem dormir tanto em pé quanto deitados.",
        "Os dentes dos cavalos continuam crescendo ao longo de boa parte da vida.",
        "Cavalos usam expressões faciais para demonstrar emoções e se comunicar.",
        "O cavalo mais rápido já registrado atingiu cerca de 88 km/h!"
    ];

    const btnFact = document.getElementById('btn-fact');
    const factText = document.getElementById('fact-text');

    btnFact.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * curiosidades.length);
        factText.textContent = curiosidades[randomIndex];
    });

});
