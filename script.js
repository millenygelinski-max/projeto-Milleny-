// Base de dados simulada para o site
const racas = [
    {
        id: 1,
        nome: "Puro Sangue Árabe",
        categoria: "velocidade",
        origem: "Península Arábica",
        imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
        resumo: "Uma das raças mais antigas do mundo, famosa por sua resistência e inteligência.",
        descricao: "O cavalo Árabe é reconhecido por seu formato de cabeça distintivo e cauda alta. Desenvolvido no clima desértico, possui grande capacidade pulmonar e resistência invejável."
    },
    {
        id: 2,
        nome: "Frísio (Friesian)",
        categoria: "porte",
        origem: "Holanda",
        imagem: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=600&q=80",
        resumo: "Conhecido por sua pelagem preta reluzente e crina abundante e ondulada.",
        descricao: "Originário da Frísia, é um cavalo ágil e gracioso para o seu tamanho. Historicamente usado como cavalo de guerra, hoje se destaca no adestramento e em exibições."
    },
    {
        id: 3,
        nome: "Quarto de Milha",
        categoria: "velocidade",
        origem: "Estados Unidos",
        imagem: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=600&q=80",
        resumo: "Famoso por sua velocidade incrível em distâncias curtas e musculatura forte.",
        descricao: "Excelente em corridas de tiro curto (um quarto de milha) e na lida com gado. É extremamente versátil, inteligente e dócil."
    },
    {
        id: 4,
        nome: "Percheron",
        categoria: "forca",
        origem: "França",
        imagem: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
        resumo: "Um cavalo de tração robusto, elegante e com temperamento sereno.",
        descricao: "Originalmente criado para uso como cavalo de guerra, tornou-se essencial para a agricultura e transporte pesado devido à sua força impressionante."
    }
];

const grid = document.getElementById("racasGrid");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("modalRaca");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");

// Função para renderizar os cards na tela
function renderizarCards(lista) {
    grid.innerHTML = "";
    if (lista.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Nenhuma raça encontrada.</p>";
        return;
    }

    lista.forEach(raca => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${raca.imagem}" alt="${raca.nome}">
            <div class="card-info">
                <h3>${raca.nome}</h3>
                <p>${raca.resumo}</p>
            </div>
        `;
        card.addEventListener("click", () => abrirModal(raca));
        grid.appendChild(card);
    });
}

// Filtro por Texto (Busca)
searchInput.addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase();
    const filtrados = racas.filter(raca => 
        raca.nome.toLowerCase().includes(termo) || 
        raca.resumo.toLowerCase().includes(termo)
    );
    renderizarCards(filtrados);
});

// Filtro por Categoria (Botões)
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const categoria = btn.dataset.category;
        if (categoria === "todos") {
            renderizarCards(racas);
        } else {
            const filtrados = racas.filter(raca => raca.categoria === categoria);
            renderizarCards(filtrados);
        }
    });
});

// Função para abrir o Modal com detalhes
function abrirModal(raca) {
    modalBody.innerHTML = `
        <h2 style="color: var(--accent-color); margin-bottom: 10px;">${raca.nome}</h2>
        <p><strong>Origem:</strong> ${raca.origem}</p>
        <img src="${raca.imagem}" alt="${raca.nome}" style="width:100%; height:250px; object-fit:cover; border-radius:8px; margin: 15px 0;">
        <p>${raca.descricao}</p>
    `;
    modal.style.display = "flex";
}

// Fechar Modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

// Inicialização
renderizarCards(racas);
