```javascript
/* =========================================
   QUIZ DOS CAVALOS
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const questions = [

        {
            question: "Qual raça é conhecida por sua famosa marcha?",
            answers: [
                "Árabe",
                "Mangalarga Marchador",
                "Crioulo",
                "Puro-Sangue Inglês"
            ],
            correct: 1
        },

        {
            question: "Qual raça é famosa por sua velocidade em distâncias curtas?",
            answers: [
                "Quarto de Milha",
                "Árabe",
                "Crioulo",
                "Mangalarga Marchador"
            ],
            correct: 0
        },

        {
            question: "Qual dessas raças é originária do Brasil?",
            answers: [
                "Árabe",
                "Puro-Sangue Inglês",
                "Mangalarga Marchador",
                "Quarto de Milha"
            ],
            correct: 2
        },

        {
            question: "Qual raça é famosa por sua resistência e tem origem no Oriente Médio?",
            answers: [
                "Crioulo",
                "Árabe",
                "Quarto de Milha",
                "Puro-Sangue Inglês"
            ],
            correct: 1
        },

        {
            question: "Qual raça foi desenvolvida principalmente para corridas?",
            answers: [
                "Crioulo",
                "Mangalarga Marchador",
                "Puro-Sangue Inglês",
                "Árabe"
            ],
            correct: 2
        },

        {
            question: "Qual raça é muito associada ao trabalho com gado?",
            answers: [
                "Árabe",
                "Quarto de Milha",
                "Puro-Sangue Inglês",
                "Mangalarga Marchador"
            ],
            correct: 1
        },

        {
            question: "Qual raça é conhecida por sua rusticidade e importância no trabalho do campo?",
            answers: [
                "Crioulo",
                "Árabe",
                "Puro-Sangue Inglês",
                "Mangalarga Marchador"
            ],
            correct: 0
        },

        {
            question: "Qual raça é considerada uma das mais antigas e influentes do mundo?",
            answers: [
                "Quarto de Milha",
                "Crioulo",
                "Árabe",
                "Mangalarga Marchador"
            ],
            correct: 2
        },

        {
            question: "O Puro-Sangue Inglês é especialmente conhecido por qual característica?",
            answers: [
                "Marcha confortável",
                "Velocidade e capacidade atlética",
                "Trabalho agrícola pesado",
                "Rusticidade"
            ],
            correct: 1
        },

        {
            question: "Qual raça é conhecida por sua resistência e por ser adequada para longas cavalgadas?",
            answers: [
                "Mangalarga Marchador",
                "Puro-Sangue Inglês",
                "Quarto de Milha",
                "Crioulo"
            ],
            correct: 0
        }

    ];


    /* ELEMENTOS */

    const quizContainer =
        document.getElementById("quiz-container");

    const quizResult =
        document.getElementById("quiz-result");

    const questionElement =
        document.getElementById("question");

    const answersElement =
        document.getElementById("answers");

    const nextButton =
        document.getElementById("next-button");

    const restartButton =
        document.getElementById("restart-button");

    const feedback =
        document.getElementById("feedback");

    const questionNumber =
        document.getElementById("question-number");

    const scoreElement =
        document.getElementById("score");

    const progress =
        document.getElementById("progress");

    const finalScore =
        document.getElementById("final-score");

    const totalQuestions =
        document.getElementById("total-questions");

    const resultMessage =
        document.getElementById("result-message");


    /* VARIÁVEIS */

    let currentQuestion = 0;
    let score = 0;
    let answered = false;


    /* INICIAR */

    function startQuiz() {

        currentQuestion = 0;
        score = 0;
        answered = false;

        quizContainer.classList.remove("hidden");
        quizResult.classList.add("hidden");

        scoreElement.textContent = "Pontuação: 0";

        showQuestion();
    }


    /* MOSTRAR PERGUNTA */

    function showQuestion() {

        answered = false;

        const question = questions[currentQuestion];

        questionElement.textContent =
            question.question;

        questionNumber.textContent =
            `Pergunta ${currentQuestion + 1} de ${questions.length}`;

        progress.style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;

        feedback.textContent = "";

        feedback.className = "feedback";

        nextButton.disabled = true;

        nextButton.textContent =
            currentQuestion === questions.length - 1
                ? "Ver resultado 🏆"
                : "Próxima pergunta →";


        /* LIMPA ALTERNATIVAS */

        answersElement.innerHTML = "";


        /* CRIA ALTERNATIVAS */

        question.answers.forEach(function (answer, index) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer-button";

            button.textContent =
                answer;

            button.addEventListener(
                "click",
                function () {
                    selectAnswer(index);
                }
            );

            answersElement.appendChild(button);

        });

    }


    /* ESCOLHER RESPOSTA */

    function selectAnswer(selectedIndex) {

        if (answered) {
            return;
        }

        answered = true;

        const question =
            questions[currentQuestion];

        const buttons =
            document.querySelectorAll(
                ".answer-button"
            );


        /* MOSTRA A RESPOSTA CORRETA */

        buttons[question.correct]
            .classList.add("correct");


        /* ACERTOU */

        if (selectedIndex === question.correct) {

            score++;

            scoreElement.textContent =
                `Pontuação: ${score}`;

            feedback.textContent =
                "🎉 Parabéns! Você acertou!";

            feedback.classList.add(
                "correct-message"
            );

        }

        /* ERROU */

        else {

            buttons[selectedIndex]
                .classList.add("wrong");

            feedback.textContent =
                `❌ Você errou. A resposta correta é: ${question.answers[question.correct]}.`;

            feedback.classList.add(
                "wrong-message"
            );

        }


        /* DESABILITA BOTÕES */

        buttons.forEach(function (button) {
            button.disabled = true;
        });


        nextButton.disabled = false;

    }


    /* PRÓXIMA PERGUNTA */

    nextButton.addEventListener(
        "click",
        function () {

            if (!answered) {
                return;
            }

            currentQuestion++;

            if (
                currentQuestion <
                questions.length
            ) {

                showQuestion();

            }

            else {

                showResult();

            }

        }
    );


    /* RESULTADO */

    function showResult() {

        quizContainer.classList.add("hidden");

        quizResult.classList.remove("hidden");

        finalScore.textContent =
            score;

        totalQuestions.textContent =
            questions.length;


        const percentage =
            (score / questions.length) * 100;


        if (percentage === 100) {

            resultMessage.textContent =
                "🏆 Perfeito! Você é um verdadeiro especialista em cavalos!";

        }

        else if (percentage >= 80) {

            resultMessage.textContent =
                "🐎 Excelente! Você conhece muito bem as raças de cavalos!";

        }

        else if (percentage >= 60) {

            resultMessage.textContent =
                "👏 Muito bom! Você já conhece bastante sobre cavalos.";

        }

        else if (percentage >= 40) {

            resultMessage.textContent =
                "🐴 Bom começo! Continue explorando o mundo dos cavalos.";

        }

        else {

            resultMessage.textContent =
                "🌱 Continue aprendendo! Você pode tentar novamente.";

        }

    }


    /* JOGAR NOVAMENTE */

    restartButton.addEventListener(
        "click",
        function () {

            startQuiz();

        }
    );


    /* COMEÇA O QUIZ */

    startQuiz();

});
```
