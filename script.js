document.addEventListener("DOMContentLoaded", () => {
    // Lista de dicas de saúde e bem-estar
    const dicasSaude = [
        "💧 Água limpa: Um cavalo bebe de 30 a 50 litros de água por dia. Garanta sempre acesso livre!",
        "🥕 Dentes em dia: A odontologia equestre deve ser revisada a cada 6 ou 12 meses para evitar dores de mastigação.",
        "🪱 Vermifugação: Mantenha os exames de fezes (OPG) em dia para usar o vermífugo correto no tempo certo.",
        "🧼 Limpeza de Cascos: Limpe os cascos diariamente antes e depois de andar para evitar acúmulo de sujeira e fungos.",
        "🌾 Mastigação lenta: Ofereça feno em redes para simular o tempo natural que o cavalo passaria pastando.",
        "🏃 Exercício regular: Mesmo nos dias sem treino, o cavalo deve caminhar ao menos 1 hora no piquete."
    ];

    const tipDisplay = document.getElementById("tip-display");
    const tipBtn = document.getElementById("tip-btn");

    function gerarDica() {
        const dicaAleatoria = dicasSaude[Math.floor(Math.random() * dicasSaude.length)];
        tipDisplay.textContent = dicaAleatoria;
    }

    // Evento no botão
    tipBtn.addEventListener("click", gerarDica);
});
