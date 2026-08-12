document.addEventListener('DOMContentLoaded', () => {
  const ideaInput = document.getElementById('ideaInput');
  const addBtn = document.getElementById('addBtn');
  const universe = document.getElementById('universe');

  // Cores espaciais para os planetas
  const planetColors = [
    '#38bdf8', '#f43f5e', '#a855f7', '#34d399', 
    '#fbbf24', '#fb7185', '#818cf8', '#2dd4bf'
  ];

  let orbitDistance = 140; // Distância inicial do Sol

  function createPlanet() {
    const text = ideaInput.value.trim();

    if (text === '') {
      alert('Por favor, digite uma ideia antes de adicionar!');
      return;
    }

    // 1. Criar o elemento da Órbita
    const orbit = document.createElement('div');
    orbit.className = 'orbit';
    
    // Define o tamanho do anel de órbita
    const orbitSize = orbitDistance * 2;
    orbit.style.width = `${orbitSize}px`;
    orbit.style.height = `${orbitSize}px`;

    // Velocidade aleatória de rotação (entre 10s e 30s)
    const duration = Math.floor(Math.random() * 20) + 10;
    orbit.style.animationDuration = `${duration}s`;

    // 2. Criar o Planeta
    const planet = document.createElement('div');
    planet.className = 'planet';

    // Tamanho e cor aleatórios para o planeta
    const planetSize = Math.floor(Math.random() * 15) + 20; // Entre 20px e 35px
    const randomColor = planetColors[Math.floor(Math.random() * planetColors.length)];

    planet.style.width = `${planetSize}px`;
    planet.style.height = `${planetSize}px`;
    planet.style.backgroundColor = randomColor;
    planet.style.boxShadow = `0 0 15px ${randomColor}`;

    // 3. Criar a Tooltip com o texto da ideia
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = text;

    // Montar a estrutura
    planet.appendChild(tooltip);
    orbit.appendChild(planet);
    universe.appendChild(orbit);

    // Aumenta a distância para a próxima órbita não sobrepor totalmente a anterior
    orbitDistance += 50;

    // Limpar o campo de texto
    ideaInput.value = '';
  }

  // Eventos de clique e tecla Enter
  addBtn.addEventListener('click', createPlanet);

  ideaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      createPlanet();
    }
  });
});
