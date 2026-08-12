document.addEventListener('DOMContentLoaded', () => {

    // 1. Filtro por Categoria de Raça de Cavalo
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

    // 2. Fatos Curiosos sobre Cavalos
    const curiosidades = [
        "O Mangalarga Marchador possui um andamento suave onde o cavaleiro quase não sente impacto na sela.",
        "A raça Puro Sangue Árabe possui uma costela e uma vértebra a menos em relação às outras raças.",
        "Cavalos conseguem dormir em pé graças a um mecanismo de trava nos ligamentos e articulações das pernas.",
        "O olho do cavalo é um dos maiores entre os mamíferos terrestres e oferece uma visão de quase 360 graus.",
        "O cavalo Quarto de Milha atinge acelerações altíssimas em distâncias curtas de até 400 metros."
    ];

    const btnFact = document.getElementById('btn-fact');
    const factText = document.getElementById('fact-text');

    btnFact.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * curiosidades.length);
        factText.textContent = curiosidades[randomIndex];
    });

});
