let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(row, col) {
    if (!gameActive || gameBoard[row * 3 + col] !== '') return;

    gameBoard[row * 3 + col] = currentPlayer;
    document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;
    document.getElementsByClassName('cell')[row * 3 + col].classList.add(currentPlayer);

    if (checkWin()) {
        document.getElementById('winner').innerText = `${currentPlayer} wins!`;
        gameActive = false;
    } else if (checkDraw()) {
        document.getElementById('winner').innerText = 'It\'s a draw!';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !gameBoard.includes('');
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('winner').innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.innerText = '';
        cell.classList.remove('X', 'O');
    }
}
