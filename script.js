:root {
    --bg-dark: #0a0c10;
    --card-bg: rgba(22, 27, 34, 0.8);
    --gold: #e5b869;
    --gold-hover: #f3ce85;
    --text-main: #f0f3f6;
    --text-sub: #9198a1;
    --border-color: rgba(229, 184, 105, 0.2);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    line-height: 1.6;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0; width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    background: rgba(10, 12, 16, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
}

.logo {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: #fff;
}

.logo span { color: var(--gold); }

.nav-links {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav-links a {
    color: var(--text-sub);
    text-decoration: none;
    transition: 0.3s;
    font-size: 0.95rem;
}

.nav-links a:hover { color: var(--gold); }

/* Hero Section */
.hero {
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=80') center/cover fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    position: relative;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(10,12,16,0.4) 0%, rgba(10,12,16,0.95) 100%);
}

.hero-card {
    position: relative;
    z-index: 2;
    max-width: 700px;
    text-align: center;
    background: rgba(15, 18, 24, 0.65);
    backdrop-filter: blur(16px);
    border: 1px solid var(--border-color);
    padding: 50px 40px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.tag {
    color: var(--gold);
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 3px;
    font-weight: 700;
}

.hero-card h1 {
    font-family: 'Cinzel', serif;
    font-size: 3rem;
    margin: 15px 0;
    color: #fff;
}

.hero-card p {
    color: var(--text-sub);
    margin-bottom: 30px;
}

.btn-primary {
    display: inline-block;
    padding: 14px 32px;
    background: linear-gradient(135deg, var(--gold), #b88d3d);
    color: #000;
    font-weight: 700;
    text-decoration: none;
    border-radius: 30px;
    transition: 0.3s;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(229, 184, 105, 0.3);
}

/* Layout Geral */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-header h2 {
    font-family: 'Cinzel', serif;
    font-size: 2.2rem;
    color: var(--gold);
}

.section-header p {
    color: var(--text-sub);
}

/* Controles de Busca e Filtro */
.controls-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;
    margin-bottom: 40px;
}

#searchInput {
    flex: 1;
    min-width: 280px;
    padding: 12px 20px;
    border-radius: 25px;
    border: 1px solid var(--border-color);
    background: var(--card-bg);
    color: #fff;
    outline: none;
}

.filter-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    background: var(--card-bg);
    color: var(--text-sub);
    cursor: pointer;
    transition: 0.3s;
}

.filter-btn.active, .filter-btn:hover {
    background: var(--gold);
    color: #000;
    font-weight: 600;
}

/* Grid de Cards */
.grid-racas {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
}

.raca-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    transition: 0.4s;
    cursor: pointer;
    position: relative;
}

.raca-card:hover {
    transform: translateY(-8px);
    border-color: var(--gold);
    box-shadow: 0 12px 30px rgba(0,0,0,0.5);
}

.raca-img-wrapper {
    position: relative;
    height: 220px;
}

.raca-card img {
    width: 100%; height: 100%;
    object-fit: cover;
}

.badge {
    position: absolute;
    top: 15px; right: 15px;
    background: rgba(10, 12, 16, 0.8);
    border: 1px solid var(--gold);
    color: var(--gold);
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
}

.raca-info {
    padding: 22px;
}

.raca-info h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 8px;
}

.raca-info p {
    color: var(--text-sub);
    font-size: 0.9rem;
}

/* Tabela Comparativa */
.highlight-section {
    background: rgba(22, 27, 34, 0.4);
    border-radius: 20px;
    border: 1px solid var(--border-color);
}

.table-responsive { overflow-x: auto; }

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.comparison-table th, .comparison-table td {
    padding: 16px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.comparison-table th {
    color: var(--gold);
    font-family: 'Cinzel', serif;
}

/* Accordion */
.accordion-wrapper {
    max-width: 800px;
    margin: 0 auto;
}

.accordion-item {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    margin-bottom: 15px;
    overflow: hidden;
}

.accordion-header {
    width: 100%;
    padding: 18px 24px;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.05rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    padding: 0 24px;
    transition: max-height 0.3s ease, padding 0.3s ease;
    color: var(--text-sub);
}
// Base de dados simulada para o site
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

.accordion-item.open .accordion-content {
    max-height: 150px;
    padding-bottom: 20px;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(8px);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-card {
    background: #12161f;
    border: 1px solid var(--gold);
    border-radius: 20px;
    max-width: 650px;
    width: 100%;
    padding: 30px;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-close {
    position: absolute;
    top: 20px; right: 20px;
    background: none;
    border: none;
    color: var(--gold);
    font-size: 2rem;
    cursor: pointer;
}

footer {
    text-align: center;
    padding: 40px;
    border-top: 1px solid var(--border-color);
    color: var(--text-sub);
    font-size: 0.85rem;
}

@media (max-width: 768px) {
    .hero-card h1 { font-size: 2.2rem; }
    .nav-links { display: none; }
}
