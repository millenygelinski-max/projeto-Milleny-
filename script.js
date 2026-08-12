```javascript
/* =====================================================
   CAVALOS & RAÇAS
   JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       MENU MOBILE
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    document.querySelectorAll(
        ".nav-menu a"
    ).forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });


    /* =================================================
       DADOS DAS RAÇAS
    ================================================= */

    const races = [

        {
            id: "quarto",

            name: "Quarto de Milha",

            country: "🇺🇸 Estados Unidos",

            image:
                "https://commons.wikimedia.org/wiki/Special:Redirect/file/American_Quarter_Horse.jpg",

            short:
                "Uma raça conhecida pela velocidade, força, inteligência e grande versatilidade.",

            categories: [
                "velocidade"
            ],

            tags: [
                "⚡ Velocidade",
                "💪 Musculoso",
                "🧠 Inteligente",
                "🤠 Trabalho"
            ],

            height:
                "≈ 1,50 m",

            coat:
                "Diversas pelagens",

            temperament:
                "Dócil e inteligente",

            use:
                "Corridas, esporte e trabalho",

            origin:
                "Estados Unidos",

            history:
                "A raça se desenvolveu nos Estados Unidos a partir de cruzamentos envolvendo cavalos de origem britânica e espanhola. Ganhou fama nas corridas de um quarto de milha e depois se destacou no trabalho com gado.",

            characteristics:
                "É um cavalo compacto, musculoso e atlético. Possui grande capacidade de aceleração, mudanças rápidas de direção e boa adaptação a diferentes atividades.",

            curiosity:
                "O nome Quarto de Milha está relacionado às antigas corridas de um quarto de milha, cerca de 402 metros.",

            useDetails:
                "Hoje pode ser encontrado em corridas, provas de tambor, rédeas, apartação, trabalho com gado, lazer e outras modalidades."
        },


        {
            id: "marchador",

            name: "Mangalarga Marchador",

            country: "🇧🇷 Brasil",

            image:
                "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mangalarga_Marchador.jpg",

            short:
                "Uma raça brasileira famosa principalmente por sua marcha confortável e resistência.",

            categories: [
                "brasil",
                "resistencia"
            ],

            tags: [
                "🇧🇷 Brasileira",
                "🐎 Marcha",
                "🏔️ Resistente",
                "🌿 Campo"
            ],

            height:
                "Porte médio",

            coat:
                "Diversas pelagens",

            temperament:
                "Ativo e geralmente dócil",

            use:
                "Cavalgadas, esporte e trabalho",

            origin:
                "Brasil",

            history:
                "O Mangalarga Marchador foi desenvolvido no Brasil, especialmente na região de Minas Gerais, a partir de animais de origem ibérica e de cavalos utilizados no país.",

            characteristics:
                "Sua característica mais marcante é a marcha, um andamento próprio que proporciona conforto ao cavaleiro. A raça também é valorizada por resistência, rusticidade e funcionalidade.",

            curiosity:
                "A marcha é tão importante para a raça que aparece diretamente em seu nome: Mangalarga Marchador.",

            useDetails:
                "É utilizado em cavalgadas, provas de marcha, atividades rurais, lazer e diferentes modalidades equestres."
        },


        {
            id: "arabe",

            name: "Cavalo Árabe",

            country: "🌎 Oriente Médio",

            image:
                "https://commons.wikimedia.org/wiki/Special:Redirect/file/Arabian_horse.jpg",

            short:
                "Uma das raças mais reconhecidas do mundo, famosa pela resistência, elegância e capacidade atlética.",

            categories: [
                "resistencia"
            ],

            tags: [
                "🏔️ Resistência",
                "✨ Elegante",
                "🧠 Inteligente",
                "🏇 Enduro"
            ],

            height:
                "≈ 1,42–1,52 m",

            coat:
                "Tordilha, alazã, castanha e preta",

            temperament:
                "Atento e inteligente",

            use:
                "Enduro e esporte",

            origin:
                "Oriente Médio",

            history:
                "O Cavalo Árabe tem origem no Oriente Médio e possui uma história muito antiga. Foi selecionado durante séculos por povos do deserto, especialmente para resistência, agilidade e adaptação.",

            characteristics:
                "É reconhecido pela cabeça característica, olhos grandes, pescoço arqueado e cauda de inserção alta. Seu corpo leve e atlético favorece atividades de resistência.",

            curiosity:
                "A influência do Cavalo Árabe aparece na formação de diversas outras raças modernas.",

            useDetails:
                "É muito valorizado no enduro e também participa de provas de salto, adestramento, cavalgadas, exposições e outras atividades."
        },


        {
            id: "psi",

            name: "Puro-Sangue Inglês",

            country: "🇬🇧 Inglaterra",

            image:
                "https://commons.wikimedia.org/wiki/Special:Redirect/file/Thoroughbred.jpg",

            short:
                "Uma raça atlética desenvolvida especialmente para o desempenho em corridas.",

            categories: [
                "velocidade"
            ],

            tags: [
                "⚡ Velocidade",
                "🏇 Corrida",
                "💨 Atlético",
                "🏆 Competição"
            ],

            height:
                "Porte médio",

            coat:
                "Castanha, alazã, preta e tordilha",

            temperament:
                "Energético e sensível",

            use:
                "Corridas e esportes",

            origin:
                "Inglaterra",

            history:
                "O Puro-Sangue Inglês foi desenvolvido na Inglaterra. A formação da raça está ligada a três garanhões fundadores muito conhecidos: Darley Arabian, Godolphin Arabian e Byerley Turk.",

            characteristics:
                "É um cavalo leve, atlético e com grande capacidade de velocidade. Seu corpo foi selecionado durante gerações para desempenho em corridas.",

            curiosity:
                "Grande parte dos cavalos de corrida modernos pode ter sua genealogia relacionada aos três principais garanhões fundadores da raça.",

            useDetails:
                "Sua principal utilização é a corrida, mas também pode participar de outras modalidades equestres."
        },


        {
            id: "crioulo",

            name: "Cavalo Crioulo",

            country: "🇧🇷 América do Sul",

            image:
                "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cavalo_crioulo_240606_REFON.jpg",

            short:
                "Uma raça sul-americana conhecida pela rusticidade, resistência e adaptação ao trabalho no campo.",

            categories: [
                "brasil",
                "resistencia"
            ],

            tags: [
                "🌾 Trabalho rural",
                "🏔️ Resistente",
                "💪 Rústico",
                "🇧🇷 Brasil"
            ],

            height:
                "Porte médio",

            coat:
                "Diversas pelagens",

            temperament:
                "Ativo e resistente",

            use:
                "Campo, provas e cavalgadas",

            origin:
                "América do Sul",

            history:
                "O Crioulo descende de cavalos trazidos da Península Ibérica no século XVI. Na América do Sul, muitos animais viveram em condições naturais difíceis, contribuindo para a seleção de rusticidade e resistência.",

            characteristics:
                "É um cavalo funcional, resistente e adaptado às condições do campo. Essas características fizeram dele um importante parceiro nas atividades rurais.",

            curiosity:
                "A resistência do Crioulo é valorizada em provas como o Freio de Ouro e também em modalidades de enduro.",

            useDetails:
                "É muito utilizado em trabalho com gado, cavalgadas, provas funcionais e atividades tradicionais do campo."
        }

    ];


    /* =================================================
       CRIAR CARDS
    ================================================= */

    const raceGrid =
        document.getElementById("raceGrid");


    function renderRaces(filter = "all") {

        raceGrid.innerHTML = "";


        const filtered =
            races.filter(race => {

                if (filter === "all") {
                    return true;
                }

                return race.categories.includes(filter);

            });


        filtered.forEach(race => {

            const card =
                document.createElement("article");


            card.className =
                "race-card";


            card.innerHTML = `

                <div class="race-card-image">

                    <img
                        src="${race.image}"
                        alt="${race.name}"
                        loading="lazy"
                    >

                    <span class="race-country">
                        ${race.country}
                    </span>

                </div>


                <div class="race-card-body">

                    <span class="eyebrow">
                        ${race.origin}
                    </span>

                    <h3>
                        ${race.name}
                    </h3>

                    <p class="race-short">
                        ${race.short}
                    </p>


                    <div class="race-tags">

                        ${race.tags.map(tag => `
                            <span class="race-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>


                    <div class="race-data">

                        <div class="data-box">

                            <small>
                                Altura
                            </small>

                            <strong>
                                ${race.height}
                            </strong>

                        </div>


                        <div class="data-box">

                            <small>
                                Pelagem
                            </small>

                            <strong>
                                ${race.coat}
                            </strong>

                        </div>


                        <div class="data-box">

                            <small>
                                Temperamento
                            </small>

                            <strong>
                                ${race.temperament}
                            </strong>

                        </div>


                        <div class="data-box">

                            <small>
                                Principal uso
                            </small>

                            <strong>
                                ${race.use}
                            </strong>

                        </div>

                    </div>


                    <button
                        class="learn-more"
                        data-race="${race.id}"
                    >
                        Ver história e curiosidades →
                    </button>

                </div>
            `;


            raceGrid.appendChild(card);

        });


        document.querySelectorAll(
            ".learn-more"
        ).forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openRaceModal(
                        button.dataset.race
                    );

                }
            );

        });

    }


    renderRaces();


    /* =================================================
       FILTROS
    ================================================= */

    document.querySelectorAll(
        ".filter-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document.querySelectorAll(
                    ".filter-btn"
                ).forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                renderRaces(
                    button.dataset.filter
                );

            }
        );

    });


    /* =================================================
       MODAL DAS RAÇAS
    ================================================= */

    const modal =
        document.getElementById("raceModal");

    const modalBody =
        document.getElementById("modalBody");

    const closeModal =
        document.getElementById("closeModal");


    function openRaceModal(id) {

        const race =
            races.find(item =>
                item.id === id
            );


        if (!race) {
            return;
        }


        modalBody.innerHTML = `

            <div class="modal-image">

                <img
                    src="${race.image}"
                    alt="${race.name}"
                >

            </div>


            <span class="eyebrow">
                ${race.country}
            </span>


            <h2>
                ${race.name}
            </h2>


            <h4>
                🌎 Origem
            </h4>

            <p>
                ${race.origin}
            </p>


            <h4>
                📖 História
            </h4>

            <p>
                ${race.history}
            </p>


            <h4>
                🐎 Características
            </h4>

            <p>
                ${race.characteristics}
            </p>


            <h4>
                🏇 Principais usos
            </h4>

            <p>
                ${race.useDetails}
            </p>


            <h4>
                💡 Curiosidade
            </h4>

            <p>
                ${race.curiosity}
            </p>

        `;


        modal.classList.add("show");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeRaceModal() {

        modal.classList.remove("show");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    closeModal.addEventListener(
        "click",
        closeRaceModal
    );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeRaceModal();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeRaceModal();

            }

        }
    );


    /* =================================================
       QUIZ
    ================================================= */

    const questions = [

        {
            question:
                "Qual raça é famosa pela velocidade em curtas distâncias?",

            answers: [
                "Cavalo Árabe",
                "Quarto de Milha",
                "Crioulo",
                "Mangalarga Marchador"
            ],

            correct: 1
        },


        {
            question:
                "Qual raça brasileira é famosa por sua marcha?",

            answers: [
                "Puro-Sangue Inglês",
                "Árabe",
                "Mangalarga Marchador",
                "Quarto de Milha"
            ],

            correct: 2
        },


        {
            question:
                "Qual raça tem origem no Oriente Médio?",

            answers: [
                "Cavalo Árabe",
                "Crioulo",
                "Puro-Sangue Inglês",
                "Quarto de Milha"
            ],

            correct: 0
        },


        {
            question:
                "Qual raça é especialmente associada às corridas de cavalos?",

            answers: [
                "Crioulo",
                "Mangalarga Marchador",
                "Puro-Sangue Inglês",
                "Árabe"
            ],

            correct: 2
        },


        {
            question:
                "Qual raça é muito conhecida pelo trabalho com gado?",

            answers: [
                "Quarto de Milha",
                "Árabe",
                "Puro-Sangue Inglês",
                "Mangalarga Marchador"
            ],

            correct: 0
        },


        {
            question:
                "Qual raça é conhecida pela rusticidade e resistência no campo?",

            answers: [
                "Puro-Sangue Inglês",
                "Crioulo",
                "Árabe",
                "Quarto de Milha"
            ],

            correct: 1
        },


        {
            question:
                "Qual é uma característica muito marcante do Cavalo Árabe?",

            answers: [
                "Resistência",
                "Trabalho pesado",
                "Velocidade somente em 100 metros",
                "Marcha típica brasileira"
            ],

            correct: 0
        },


        {
            question:
                "Qual raça foi desenvolvida na Inglaterra para desempenho em corridas?",

            answers: [
                "Crioulo",
                "Árabe",
                "Puro-Sangue Inglês",
                "Mangalarga Marchador"
            ],

            correct: 2
        },


        {
            question:
                "Qual destas raças é originária do Brasil?",

            answers: [
                "Mangalarga Marchador",
                "Árabe",
                "Puro-Sangue Inglês",
                "Nenhuma delas"
            ],

            correct: 0
        },


        {
            question:
                "O que diferencia especialmente o Mangalarga Marchador?",

            answers: [
                "Sua velocidade em corridas curtas",
                "Sua marcha",
                "Seu uso exclusivo em corridas",
                "Sua origem inglesa"
            ],

            correct: 1
        }

    ];


    let currentQuestion = 0;

    let score = 0;

    let answered = false;


    const questionText =
        document.getElementById(
            "questionText"
        );

    const answersContainer =
        document.getElementById(
            "answers"
        );

    const questionCounter =
        document.getElementById(
            "questionCounter"
        );

    const quizScore =
        document.getElementById(
            "quizScore"
        );

    const quizProgress =
        document.getElementById(
            "quizProgress"
        );

    const quizFeedback =
        document.getElementById(
            "quizFeedback"
        );

    const nextQuestion =
        document.getElementById(
            "nextQuestion"
        );

    const quizBox =
        document.getElementById(
            "quizBox"
        );

    const quizResult =
        document.getElementById(
            "quizResult"
        );

    const finalScore =
        document.getElementById(
            "finalScore"
        );

    const resultMessage =
        document.getElementById(
            "resultMessage"
        );

    const restartQuiz =
        document.getElementById(
            "restartQuiz"
        );


    function startQuiz() {

        currentQuestion = 0;

        score = 0;

        answered = false;

        quizBox.classList.remove(
            "hidden"
        );

        quizResult.classList.add(
            "hidden"
        );

        quizScore.textContent =
            "0 pontos";

        showQuestion();

    }


    function showQuestion() {

        answered = false;

        const question =
            questions[currentQuestion];


        questionText.textContent =
            question.question;


        questionCounter.textContent =
            `Pergunta ${currentQuestion + 1} de ${questions.length}`;


        quizProgress.style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;


        quizFeedback.textContent =
            "";

        quizFeedback.className =
            "quiz-feedback";


        nextQuestion.disabled =
            true;


        nextQuestion.textContent =
            currentQuestion ===
            questions.length - 1

                ? "Ver resultado 🏆"

                : "Próxima pergunta →";


        answersContainer.innerHTML =
            "";


        question.answers.forEach(
            (answer, index) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "answer-btn";


                button.type =
                    "button";


                button.textContent =
                    answer;


                button.addEventListener(
                    "click",
                    () => {

                        selectAnswer(
                            index
                        );

                    }
                );


                answersContainer.appendChild(
                    button
                );

            }
        );

    }


    function selectAnswer(
        selectedIndex
    ) {

        if (answered) {
            return;
        }

        answered = true;


        const question =
            questions[currentQuestion];


        const buttons =
            document.querySelectorAll(
                ".answer-btn"
            );


        buttons[
            question.correct
        ].classList.add(
            "correct"
        );


        if (
            selectedIndex ===
            question.correct
        ) {

            score++;

            quizScore.textContent =
                `${score} ponto${score !== 1 ? "s" : ""}`;


            quizFeedback.textContent =
                "🎉 Muito bem! Você acertou!";


            quizFeedback.classList.add(
                "feedback-correct"
            );

        } else {

            buttons[
                selectedIndex
            ].classList.add(
                "wrong"
            );


            quizFeedback.textContent =
                `❌ A resposta correta é: ${question.answers[question.correct]}.`;


            quizFeedback.classList.add(
                "feedback-wrong"
            );

        }


        buttons.forEach(
            button => {

                button.disabled =
                    true;

            }
        );


        nextQuestion.disabled =
            false;

    }


    nextQuestion.addEventListener(
        "click",
        () => {

            if (!answered) {
                return;
            }


            currentQuestion++;


            if (
                currentQuestion <
                questions.length
            ) {

                showQuestion();

            } else {

                showQuizResult();

            }

        }
    );


    function showQuizResult() {

        quizBox.classList.add(
            "hidden"
        );

        quizResult.classList.remove(
            "hidden"
        );


        finalScore.textContent =
            score;


        const percentage =
            (score / questions.length) * 100;


        if (percentage === 100) {

            resultMessage.textContent =
                "🏆 Perfeito! Você é um verdadeiro especialista em cavalos!";

        }

        else if (percentage >= 80) {

            resultMessage.textContent =
                "🐎 Excelente! Você aprendeu muito sobre as raças!";

        }

        else if (percentage >= 60) {

            resultMessage.textContent =
                "👏 Muito bom! Você já conhece bastante sobre cavalos.";

        }

        else if (percentage >= 40) {

            resultMessage.textContent =
                "🐴 Bom começo! Continue estudando e tente novamente.";

        }

        else {

            resultMessage.textContent =
                "🌱 Você pode aprender mais e tentar novamente!";

        }

    }


    restartQuiz.addEventListener(
        "click",
        startQuiz
    );


    startQuiz();


});
```
