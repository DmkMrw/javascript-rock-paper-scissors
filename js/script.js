{
  const spanWin = document.getElementById("win");
  const spanLose = document.getElementById("lose");

  let win = 0;
  let lose = 0;

  const playGame = function (argPlayerInput) {
    clearMessages();

    const printMessage = function (msg) {
      const div = document.createElement("div");
      div.innerHTML = msg;
      document.getElementById("messages").appendChild(div);
    }
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to: " + computerMove);

    const playerMove = getMoveName(argPlayerInput);

    printMessage("Twój ruch to: " + playerMove);

    const displayResult = function (argComputerMove, argPlayerMove) {
      if (computerMove == "kamień" && playerMove == "papier") {
        win++;
        printMessage("Ty wygrywasz!");
      } else if (computerMove == "papier" && playerMove == "nożyce") {
        win++;
        printMessage("Ty wygrywasz!");
      } else if (computerMove == "nożyce" && playerMove == "kamień") {
        win++;
        printMessage("Ty wygrywasz!");
      } else if (computerMove == playerMove) {
        printMessage("REMIS");
      } else {
        lose++;
        printMessage("Przegrałeś!");
      }
        

      spanWin.textContent = " " + win;
      spanLose.textContent = " " + lose;
    }

    displayResult(computerMove, playerMove);
  }

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document.getElementById("play-scissors").addEventListener("click", function () {
    playGame(3);
  });
}
