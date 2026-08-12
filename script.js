/* --- Lógica do Jogo da Velha --- */
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

function makeMove(index) {
    if (board[index] === '' && isGameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        
        checkWinner();
        if (isGameActive) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('ttt-msg').innerText = `Vez do ${currentPlayer}`;
        }
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]            // Diagonais
    ];

    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        document.getElementById('ttt-msg').innerText = `Jogador ${currentPlayer} Venceu! 🎉`;
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        document.getElementById('ttt-msg').innerText = `Empate! 🤝`;
        isGameActive = false;
    }
}

function resetTicTacToe() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    document.getElementById('ttt-msg').innerText = 'Vez do X';
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

/* --- Lógica do Jogo de Adivinhação --- */
let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const msg = document.getElementById('guess-msg');

    if (!userGuess || userGuess < 1 || userGuess > 10) {
        msg.innerText = 'Digite um número entre 1 e 10!';
        msg.style.color = 'red';
        return;
    }

    if (userGuess === secretNumber) {
        msg.innerText = 'Parabéns! Você acertou! 🎯';
        msg.style.color = 'green';
        setTimeout(() => {
            secretNumber = Math.floor(Math.random() * 10) + 1;
            msg.innerText = 'Novo número gerado! Tente novamente.';
            msg.style.color = '#333';
            document.getElementById('guessInput').value = '';
        }, 3000);
    } else if (userGuess < secretNumber) {
        msg.innerText = 'Muito baixo! Tente um número maior ⬆️';
        msg.style.color = '#d97706';
    } else {
        msg.innerText = 'Muito alto! Tente um número menor ⬇️';
        msg.style.color = '#d97706';
    }
}
