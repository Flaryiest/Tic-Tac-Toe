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
            else if (board[0][line] == board[1][line] && board[1][line] == board[1][line]) {
                if (board[0][line] == "X" || board[0][line] == "O") {
                return true
                
                }
            }
            else if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
                if (board[0][0] == "X" || board[0][0] == "O") {
                    return true
                }
            }
            else if (board[0][2] == board[1][1] && board[1][1] == board[0][2]) {
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
let x = player(null, "X")
let o = player(null, "O")

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
            gameResults.textContent = gameSituation.currentPlayer.playerSymbol + " won"
            currentBoard.currentGameBoard = [[0,0,0],[0,0,0],[0,0,0]]
        }
        if (gameSituation.currentPlayer == x) {
            gameSituation.currentPlayer = o
        }
        else {
            gameSituation.currentPlayer = x
        }
    }
})


