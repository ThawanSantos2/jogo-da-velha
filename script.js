let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const gameStatus = document.getElementById('gameStatus');
const board = document.getElementById('board');

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(index) {
  if (gameBoard[index] !== '' || !gameActive) return;

  gameBoard[index] = currentPlayer;
  document.getElementsByClassName('cell')[index].innerText = currentPlayer;

  if (checkWinner()) {
    gameStatus.innerText = `Jogador ${currentPlayer === 'X' ? '1' : '2'} ( ${currentPlayer} ) venceu!`;
    gameActive = false;
  } else if (gameBoard.every(cell => cell !== '')) {
    gameStatus.innerText = 'Empate!';
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.innerText = `Vez do Jogador ${currentPlayer === 'X' ? '1' : '2'} (${currentPlayer})`;
  }
}

function checkWinner() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  gameStatus.innerText = `Vez do Jogador 1 (X)`;
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
