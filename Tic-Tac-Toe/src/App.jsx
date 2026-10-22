import { useState } from "react";

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  //winning combination 
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ]

  const getWinner = (squares) => {
    //square is the current value, such as "X", "O", or null.
    for (let combination of winningCombination) {
      const [a, b, c] = combination;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleSquareClick = (index) => {
    if (board[index] || getWinner(board)) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(updatedBoard);
    setIsXTurn(!isXTurn);
  }

  const getGameStatus = () => {
    const winner = getWinner(board);
    if (winner) return `Winner : ${winner}`;

    if (board.every((square) => square !== null)) {
      return "Its a DRAW"
    }
    // If no one has won and the board isn't full ,
    return `Next Player : ${isXTurn ? 'X' : 'O'}`;// this returns the next player's turn.
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">

        <h1 className=" text-4xl font-bold text-white mb-8">
          Tic Tac Toe
        </h1>
        <div className={`text-center mb-6
         ${getWinner(board) ? "text-2xl font-bold text-green-400 animate-bounce"
            : "text-xl text-white"
          }`}>

          {getGameStatus()}
        </div>
        <div className="grid grid-cols-3 gap-1 rounded-xl
        overflow-hidden mb-6">
          {board.map((square,index) => (
            <button key={index} 
            onClick={() => handleSquareClick(index)}
            className={`h-32 w-full bg-gray-800 rounded-md text-6xl
              font-light transition-colors duration-200 hover:bg-gray-700
              ${square === 'X' ? 'text-white': 'text-slate-400'}`}
            >
              {square}
            </button>
          ))}
        </div>
        <button className="w-full py-3 text-lg text-white border
        rounded-xl hover:bg-gray-50 hover:text-gray-800
        transition-color duration-200"
        onClick={resetGame}>
          NEW GAME
        </button>

      </div>
    </div >
  );
}

export default App;