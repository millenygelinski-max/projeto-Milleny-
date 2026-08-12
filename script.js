document.addEventListener("DOMContentLoaded", () => {
    // Listas de nomes
    const nomesIniciais = ["Mister", "Lorde", "Rainha", "Sombra", "Duque", "Guardião", "Vento", "Fogo", "Estrela", "Relâmpago"];
    const nomesFinais = ["Selvagem", "Dourado", "do Vale", "Supremo", "Místico", "Ligeiro", "Real", "Solitário", "Nobre", "Veloz"];

    const nameDisplay = document.getElementById("name-display");
    const generateBtn = document.getElementById("generate-btn");

    function geradorDeNomes() {
        const parte1 = nomesIniciais[Math.floor(Math.random() * nomesIniciais.length)];
        const parte2 = nomesFinais[Math.floor(Math.random() * nomesFinais.length)];
        
        nameDisplay.textContent = `${parte1} ${parte2}`;
    }

    // Evento de clique
    generateBtn.addEventListener("click", geradorDeNomes);
});
