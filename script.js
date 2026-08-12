// Exemplo simples de interatividade em JavaScript
document.addEventListener("DOMContentLoaded", function() {
    console.log("Site carregado com sucesso!");
    
    // Alerta opcional de boas-vindas ao rolar ou interagir
    const links = document.querySelectorAll("header nav a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            console.log(`Navegando para: ${this.getAttribute("href")}`);
        });
    });
});
