const boxes = document.querySelectorAll(".box");
console.log(boxes);
const gameInfo = document.querySelector(".player-info");
const newGameBtn = document.querySelector(".new-game-btn");

let currentPlayer;
let gameGrid;
const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// let's create a function to inititate the game

function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];

  // ui pr empty krna padega
  boxes.forEach((box, index) => {
    box.innerText = "";
    boxes[index].style.pointerEvents = "all";
    box.classList = `box box${index + 1}`;
  });
  newGameBtn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
  // ye humare game ko check krega ki game over to nhi huaa

  let answer = "";

  winningPositions.forEach((position) => {
    if (
      (gameGrid[position[0]] !== "" ||
        gameGrid[position[1]] !== "" ||
        gameGrid[position[2]] !== "") &&
      gameGrid[position[0]] === gameGrid[position[1]] &&
      gameGrid[position[1]] === gameGrid[position[2]]
    ) {
      boxes[position[0]].classList.add("win");
      boxes[position[1]].classList.add("win");
      boxes[position[2]].classList.add("win");

      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });

      if (gameGrid[position[0]] === "X") {
        answer = "X";
      } else {
        answer = "O";
      }
    }
  });

  if (answer !== "") {
    gameInfo.innerText = `Winner Player - ${answer}`;
    newGameBtn.classList.add("active");
  }
}

let fillCount = 0;
gameGrid.forEach((box) => {
  if (fillCount !== "") {
    fillCount++;
  }
});

if (fillCount === 9) {
  gameInfo.innerText = "Game Tied";
  newGameBtn.classList.add("active");
}

function handleClick(index) {
  if (gameGrid[index] === "") {
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents = "none";

    // swap kro turn ko / x aur o ki bari
    swapTurn();

    // check koi jeet to nhi gya
    checkGameOver();
  }
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});

newGameBtn.addEventListener("click", initGame);
