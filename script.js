
/* --- Lógica do Jogo da Velha (Símbolos: 🐎 e 🤠) --- */
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = '🐎';
let isGameActive = true;

function makeMove(index) {
    if (board[index] === '' && isGameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        
        checkWinner();
        if (isGameActive) {
            currentPlayer = currentPlayer === '🐎' ? '🤠' : '🐎';
            let nomeVez = currentPlayer === '🐎' ? '🐎 (Cavalo)' : '🤠 (Sela)';
            document.getElementById('ttt-msg').innerText = `Vez de: ${nomeVez}`;
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
        let vencedorNome = currentPlayer === '🐎' ? 'Cavalo (🐎)' : 'Sela (🤠)';
        document.getElementById('ttt-msg').innerText = `Vitória do ${vencedorNome}! 🎉`;
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        document.getElementById('ttt-msg').innerText = `Deu Empate na Pista! 🤝`;
        isGameActive = false;
    }
}

function resetTicTacToe() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = '🐎';
    isGameActive = true;
    document.getElementById('ttt-msg').innerText = 'Vez de: 🐎 (Cavalo)';
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

/* --- Lógica do Jogo de Adivinhação de Raças/Números --- */
let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const msg = document.getElementById('guess-msg');

    if (!userGuess || userGuess < 1 || userGuess > 10) {
        msg.innerText = 'Digite um número de 1 a 10!';
        msg.style.color = '#c0392b';
        return;
    }

    if (userGuess === secretNumber) {
        msg.innerText = 'Impressionante! Acertou em cheio! 🏆';
        msg.style.color = '#27ae60';
        setTimeout(() => {
            secretNumber = Math.floor(Math.random() * 10) + 1;
            msg.innerText = 'Novo desafio gerado! Tente adivinhar.';
            msg.style.color = '#2c221e';
            document.getElementById('guessInput').value = '';
        }, 3000);
    } else if (userGuess < secretNumber) {
        msg.innerText = 'Muito baixo! Suba o trote ⬆️';
        msg.style.color = '#d35400';
    } else {
        msg.innerText = 'Muito alto! Reduza a marcha ⬇️';
        msg.style.color = '#d35400';
    }
}
