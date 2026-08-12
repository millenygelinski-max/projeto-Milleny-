/* =========================================
   DADOS DAS RAÇAS
========================================= */

const breeds = {

    quarter: {

        name: "Quarto de Milha",

        country: "🇺🇸 Estados Unidos",

        image:
            "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&w=1200&q=90",

        description:
            "O Quarto de Milha é uma das raças mais conhecidas do mundo. Desenvolvido nos Estados Unidos, tornou-se famoso por sua velocidade em distâncias curtas, força e grande versatilidade. Atualmente é utilizado em esportes, trabalho com gado, rodeios e lazer.",

        origin:
            "Estados Unidos",

        size:
            "Aproximadamente 1,45 m a 1,63 m",

        coat:
            "Possui diversas pelagens, incluindo alazã, castanha, baia e preta.",

        temperament:
            "Geralmente equilibrado, inteligente, disposto e treinável.",

        uses:
            "Trabalho com gado, rodeio, provas de velocidade, rédeas, apartação e lazer.",

        highlight:
            "Velocidade, força e versatilidade."

    },


    mangalarga: {

        name: "Mangalarga Marchador",

        country: "🇧🇷 Brasil",

        image:
            "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=90",

        description:
            "O Mangalarga Marchador é uma raça brasileira desenvolvida principalmente no Sul de Minas Gerais. Seu grande destaque é a marcha, um andamento característico que proporciona conforto ao cavaleiro.",

        origin:
            "Sul de Minas Gerais, Brasil",

        size:
            "Altura ideal aproximada de 1,50 m para machos e 1,44 m para fêmeas.",

        coat:
            "Apresenta diversas pelagens e tonalidades.",

        temperament:
            "Dócil, ativo, resistente e disposto ao trabalho.",

        uses:
            "Cavalgadas, trabalho no campo, enduro, lazer e esportes equestres.",

        highlight:
            "Marcha confortável e resistência."

    },


    arabian: {

        name: "Árabe",

        country: "🏜️ Oriente Médio",

        image:
            "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=1200&q=90",

        description:
            "O Cavalo Árabe é uma das raças mais antigas e influentes. Desenvolvido em regiões da Península Arábica, tornou-se famoso por sua resistência, inteligência e aparência elegante.",

        origin:
            "Península Arábica e regiões do Oriente Médio",

        size:
            "Geralmente entre aproximadamente 1,42 m e 1,55 m.",

        coat:
            "Tordilha, alazã, castanha e preta são algumas das pelagens encontradas.",

        temperament:
            "Inteligente, alerta, sociável e disposto.",

        uses:
            "Enduro, esportes equestres, reprodução e lazer.",

        highlight:
            "Resistência e elegância."

    },


    thoroughbred: {

        name: "Puro-Sangue Inglês",

        country: "🇬🇧 Inglaterra",

        image:
            "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?auto=format&fit=crop&w=1200&q=90",

        description:
            "O Puro-Sangue Inglês foi desenvolvido na Inglaterra principalmente para corridas. É um cavalo atlético, veloz e de grande capacidade física.",

        origin:
            "Inglaterra",

        size:
            "Geralmente entre aproximadamente 1,57 m e 1,70 m.",

        coat:
            "Pode apresentar pelagens como castanha, alazã, baia, preta e tordilha.",

        temperament:
            "Energético, sensível, atlético e inteligente.",

        uses:
            "Corridas, hipismo, salto, concurso completo e reprodução.",

        highlight:
            "Velocidade e capacidade atlética."

    },


    crioulo: {

        name: "Crioulo",

        country: "🌎 América do Sul",

        image:
            "https://images.unsplash.com/photo-1551884831-ddc8c12e3f0a?auto=format&fit=crop&w=1200&q=90",

        description:
            "O Cavalo Crioulo possui uma história muito ligada à América do Sul. Descendente de cavalos ibéricos trazidos pelos colonizadores, desenvolveu características de rusticidade, resistência e adaptação ao ambiente.",

        origin:
            "América do Sul",

        size:
            "É uma raça relativamente compacta e de porte médio.",

        coat:
            "Apresenta diversas pelagens, como baia, zaina, tordilha e rosilha.",

        temperament:
            "Geralmente dócil, corajoso, resistente e disposto.",

        uses:
            "Trabalho com gado, provas funcionais, cavalgadas, enduro e outras atividades equestres.",

        highlight:
            "Rusticidade, resistência e adaptação."

    }

};


/* =========================================
   MENU MOBILE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.textContent =
        nav.classList.contains("active")
            ? "✕"
            : "☰";

});


document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================================
   MODO ESCURO
========================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("horse-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    themeBtn.textContent =
        dark ? "☀️" : "🌙";

    localStorage.setItem(
        "horse-theme",
        dark ? "dark" : "light"
    );

});


/* =========================================
   MODAL DAS RAÇAS
========================================= */

const modal =
    document.getElementById("breedModal");

const modalBody =
    document.getElementById("modalBody");

const closeModal =
    document.getElementById("closeModal");

const modalOverlay =
    document.getElementById("modalOverlay");


function openBreed(breedId) {

    const breed = breeds[breedId];

    if (!breed) return;

    modalBody.innerHTML = `

        <img
            class="modal-image"
            src="${breed.image}"
            alt="${breed.name}"
        >

        <div class="modal-text">

            <span class="country">
                ${breed.country}
            </span>

            <h2>
                ${breed.name}
            </h2>

            <p>
                ${breed.description}
            </p>

            <div class="modal-details">

                <div class="detail-item">
                    <strong>🌎 Origem</strong>
                    <span>${breed.origin}</span>
                </div>

                <div class="detail-item">
                    <strong>📏 Tamanho</strong>
                    <span>${breed.size}</span>
                </div>

                <div class="detail-item">
                    <strong>🎨 Pelagem</strong>
                    <span>${breed.coat}</span>
                </div>

                <div class="detail-item">
                    <strong>❤️ Temperamento</strong>
                    <span>${breed.temperament}</span>
                </div>

                <div class="detail-item">
                    <strong>🏇 Principais usos</strong>
                    <span>${breed.uses}</span>
                </div>

                <div class="detail-item">
                    <strong>⭐ Destaque</strong>
                    <span>${breed.highlight}</span>
                </div>

            </div>

        </div>
    `;

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


function closeBreedModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


document
    .querySelectorAll(".details-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            openBreed(button.dataset.breed);

        });

    });


closeModal.addEventListener(
    "click",
    closeBreedModal
);

modalOverlay.addEventListener(
    "click",
    closeBreedModal
);


document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {

        closeBreedModal();

    }

});


/* =========================================
   PESQUISA
========================================= */

const searchInput =
    document.getElementById("searchInput");

const breedCards =
    document.querySelectorAll(".breed-card");

const noResults =
    document.getElementById("noResults");


searchInput.addEventListener("input", () => {

    const search =
        searchInput.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    let visible = 0;

    breedCards.forEach(card => {

        const name =
            card.dataset.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

        const origin =
            card.dataset.origin
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

        const matches =
            name.includes(search) ||
            origin.includes(search);

        card.style.display =
            matches ? "" : "none";

        if (matches) {
            visible++;
        }

    });

    noResults.style.display =
        visible === 0 ? "block" : "none";

});


/* =========================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".breed-card, .info-box, .fact-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   QUIZ
========================================= */

const questions = [

    {
        question:
            "Qual raça brasileira é famosa por sua marcha?",

        answers: [
            "Árabe",
            "Mangalarga Marchador",
            "Puro-Sangue Inglês",
            "Quarto de Milha"
        ],

        correct: 1
    },

    {
        question:
            "Qual raça é especialmente conhecida pela velocidade em distâncias curtas?",

        answers: [
            "Crioulo",
            "Árabe",
            "Quarto de Milha",
            "Mangalarga Marchador"
        ],

        correct: 2
    },

    {
        question:
            "Qual raça possui uma longa história na Península Arábica?",

        answers: [
            "Árabe",
            "Crioulo",
            "Quarto de Milha",
            "Puro-Sangue Inglês"
        ],

        correct: 0
    },

    {
        question:
            "Qual raça foi desenvolvida principalmente para corridas na Inglaterra?",

        answers: [
            "Crioulo",
            "Puro-Sangue Inglês",
            "Mangalarga Marchador",
            "Árabe"
        ],

        correct: 1
    },

    {
        question:
            "Qual raça é muito associada à rusticidade e ao trabalho com gado na América do Sul?",

        answers: [
            "Crioulo",
            "Árabe",
            "Puro-Sangue Inglês",
            "Quarto de Milha"
        ],

        correct: 0
    }

];


let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let answerLocked = false;


const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextBtn =
    document.getElementById("nextBtn");

const progress =
    document.getElementById("progress");

const questionNumber =
    document.getElementById("questionNumber");

const scoreText =
    document.getElementById("scoreText");

const quizContent =
    document.getElementById("quizContent");

const quizResult =
    document.getElementById("quizResult");

const resultText =
    document.getElementById("resultText");

const restartQuiz =
    document.getElementById("restartQuiz");


function loadQuestion() {

    const question =
        questions[currentQuestion];

    selectedAnswer = null;

    answerLocked = false;

    questionElement.textContent =
        question.question;

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    scoreText.textContent =
        `Pontuação: ${score}`;

    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersElement.innerHTML = "";

    nextBtn.disabled = true;

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Ver resultado 🏆"
            : "Próxima pergunta →";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.textContent =
                answer;

            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );

            answersElement.appendChild(button);

        }
    );

}


function selectAnswer(index) {

    if (answerLocked) return;

    selectedAnswer = index;

    document
        .querySelectorAll(".answer")
        .forEach((button, buttonIndex) => {

            button.classList.toggle(
                "selected",
                buttonIndex === index
            );

        });

    nextBtn.disabled = false;

}


nextBtn.addEventListener("click", () => {

    if (selectedAnswer === null) return;

    if (answerLocked) {

        currentQuestion++;

        if (
            currentQuestion >=
            questions.length
        ) {

            finishQuiz();

        } else {

            loadQuestion();

        }

        return;
    }


    answerLocked = true;

    const correct =
        questions[currentQuestion].correct;

    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach((button, index) => {

        if (index === correct) {

            button.classList.add("correct");

        }

        if (
            index === selectedAnswer &&
            selectedAnswer !== correct
        ) {

            button.classList.add("wrong");

        }

    });


    if (selectedAnswer === correct) {

        score++;

        scoreText.textContent =
            `Pontuação: ${score}`;

    }


    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Ver resultado 🏆"
            : "Continuar →";

});


function finishQuiz() {

    quizContent.style.display = "none";

    quizResult.hidden = false;

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    let message = "";

    if (percentage === 100) {

        message =
            "🏆 Excelente! Você é um verdadeiro especialista em cavalos!";

    } else if (percentage >= 60) {

        message =
            "👏 Muito bem! Você conhece bastante sobre cavalos.";

    } else {

        message =
            "🐴 Bom começo! Continue explorando o site para aprender mais.";

    }


    resultText.textContent =
        `Você acertou ${score} de ${questions.length} perguntas (${percentage}%). ${message}`;

}


restartQuiz.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    quizContent.style.display = "";

    quizResult.hidden = true;

    loadQuestion();

});


/* =========================================
   INICIAR QUIZ
========================================= */

loadQuestion();
