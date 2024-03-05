gameBoxes = document.querySelectorAll(".card")
let playerOneCurrentScore = 0
let playerTwoCurrentScore = 0
let gameResults = document.querySelector(".gameResults")
function gameBoard (currentGameBoard) {
    if (currentGameBoard == null) 
    {currentGameBoard = [[0,0,0],[0,0,0],[0,0,0]]}
    board = currentGameBoard
    function checkWin (board) {
    
        for (line in board) {
            console.log(line)
            if (board[line][0] == board[line][1] && board[line][1] == board[line][2]) {
                if (board[line][0] == "X" || board[line][0] == "O") {
                return true
            }
            }
            else if (board[0][line] == board[1][line] && board[1][line] == board[2][line]) {
                if (board[0][line] == "X" || board[0][line] == "O") {
                return true
                
                }
            }
            else if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
                if (board[0][0] == "X" || board[0][0] == "O") {
                    return true
                }
            }
            else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
                if (board[0][2] == "X" || board[0][2] == "O") {
                        return true
                }
            }
        }
        return false   
    }
    return {currentGameBoard, checkWin}
}
let currentBoard = gameBoard();

function player (playerName, playerSymbol) {
    return {playerName, playerSymbol}
}
let x = player("X", "X")
let o = player("O", "O")

function gameLogic (player) {
    currentPlayer = player
    return {currentPlayer}
    
}
let gameSituation = gameLogic(x)

console.log(gameSituation.currentPlayer.playerSymbol)

gameDisplay = document.querySelector(".gameDisplay")

gameDisplay.addEventListener("click", function(event) {
    
    console.log(event.target.getAttribute("data-row"))
    let clickedBox = document.getElementsByClassName(event.target.getAttribute("class"))[0]
    console.log(clickedBox)
    clickedBox.textContent = gameSituation.currentPlayer.playerSymbol
    console.log(clickedBox.textContent)
    let currentMoveRow = event.target.getAttribute("data-row")
    let currentMoveColumn = event.target.getAttribute("data-column")
    
    console.log(currentMoveRow, currentMoveColumn)
    if (currentBoard.currentGameBoard[currentMoveRow][currentMoveColumn] == 0) {
        currentBoard.currentGameBoard[currentMoveRow][currentMoveColumn] = gameSituation.currentPlayer.playerSymbol
        console.log(currentBoard.currentGameBoard)
        if (currentBoard.checkWin(currentBoard.currentGameBoard)) {
            gameResults.textContent += gameSituation.currentPlayer.playerName + " won " 
            if (gameSituation.currentPlayer == x) {
                playerOneCurrentScore += 1
                playerOneScoreDisplay.textContent = playerOneCurrentScore
            }
            else {
                playerTwoCurrentScore += 1
                playerTwoScoreDisplay.textContent = playerTwoCurrentScore
            }
            currentBoard.currentGameBoard = [[0,0,0],[0,0,0],[0,0,0]]
            for (box in gameBoxes) {
                gameBoxes[box].textContent = ""
            }
        }
        if (gameSituation.currentPlayer == x) {
            gameSituation.currentPlayer = o
        }
        else {
            gameSituation.currentPlayer = x
        }
    }
})

userInput = document.querySelector(".userInput")
console.log(userInput)
userInput.onsubmit = function(event) {
    event.preventDefault()
    let playerOneName = document.getElementById("playerOneName").value
    let playerTwoName = document.getElementById("playerTwoName").value
    x.playerName = playerOneName
    o.playerName = playerTwoName
}

restart = document.querySelector(".restart")
restart.addEventListener("click", function() {
    currentBoard.currentGameBoard = [[0,0,0],[0,0,0],[0,0,0]]
    for (box in gameBoxes) {
        gameBoxes[box].textContent = ""
    }
})

newGame = document.querySelector(".newGame")
newGame.addEventListener("click", function() {
    currentBoard.currentGameBoard = [[0,0,0],[0,0,0],[0,0,0]]
    for (box in gameBoxes) {
        gameBoxes[box].textContent = ""
    }
    playerOneCurrentScore = 0
    playerTwoCurrentScore = 0
    playerOneScoreDisplay.textContent = playerOneCurrentScore
    playerTwoScoreDisplay.textContent = playerTwoCurrentScore
})
playerOneScoreDisplay = document.querySelector(".playerOneScoreDisplay")
playerTwoScoreDisplay = document.querySelector(".playerTwoScoreDisplay")

playerOneScoreDisplay.textContent = playerOneCurrentScore
playerTwoScoreDisplay.textContent = playerTwoCurrentScore
