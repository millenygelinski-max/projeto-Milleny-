document.addEventListener('DOMContentLoaded', () => {

    // 1. Filtro dinâmico por tipo de raça
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

    // 2. Curiosidades sobre cavalos
    const curiosidades = [
        "O Mangalarga Marchador não troca de apoio no ar durante o andamento, o que elimina o impacto para quem está montado.",
        "O cavalo Árabe possui uma costela e uma vértebra a menos que as outras raças de cavalos.",
        "Cavalos usam as orelhas, narinas e olhos para comunicar emoções com outros membros do rebanho.",
        "Os olhos do cavalo ficam nas laterais da cabeça, garantindo um campo de visão de quase 350 graus.",
        "Cavalos conseguem travar as articulações das pernas para conseguir dormir de pé com segurança.",
        "O Quarto de Milha possui arranque mais rápido que muitos carros esportivos em distâncias curtas."
    ];

    const btnFact = document.getElementById('btn-fact');
    const factText = document.getElementById('fact-text');

    btnFact.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * curiosidades.length);
        factText.textContent = curiosidades[randomIndex];
    });

});
