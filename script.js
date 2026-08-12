const prefixes = ["Trovão", "Sombra", "Estrela", "Relâmpago", "Barão", "Vento", "Fogo", "Valente", "Lorde", "Apolo"];
const suffixes = ["Dourado", "da Noite", "Selvagem", "Feroz", "do Vale", "Imperial", "Místico", "Ligeiro", "Real", "do Sol"];

function generateName() {
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const nameElement = document.getElementById("generated-name");
    
    nameElement.innerText = `${randomPrefix} ${randomSuffix}`;
}

// Adiciona o evento de clique ao botão assim que o script carrega
document.getElementById("btn-generate").addEventListener("click", generateName);
