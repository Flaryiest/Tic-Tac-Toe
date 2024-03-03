function gameBoard (currentGameBoard) {
    if (currentGameBoard == null) 
    {currentGameBoard = [[0,0,0],[0,0,0],[0,0,0]]}
    board = currentGameBoard
    function checkWin (board) {
    
        for (line in board) {
            console.log(line)
            if (board[line][0] == board[line][1] && board[line][1] == board[line][2]) {
                if (board[line][0] == "X" || board[line][0] == "O") {
                console.log(board[line][0], board[line][1],board[line][2], line)
                return true
            }
            }
            else if (board[0][line] == board[1][line] && board[1][line] == board[1][line]) {
                if (board[0][line] == "X" || board[0][line] == "O") {
                console.log(board[line][0], board[line][1],board[line][2], line)
                return true
                
                }
            }
            else if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
                if (board[0][0] == "X" || board[0][0] == "O") {
                    console.log("pog")
                    return true
                }
            }
            else if (board[0][2] == board[1][1] && board[1][1] == board[0][2]) {
                if (board[0][2] == "X" || board[0][2] == "O") {
                        console.log("pog")
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



const moveInputForm = document.getElementById("moveInputForm")
moveInputForm.onsubmit = function(event) {
    event.preventDefault()
    let currentMoveRow = document.getElementById('moveInputRow').value
    let currentMoveColumn = document.getElementById("moveInputColumn").value
    document.getElementById("moveInputRow").value = ""
    document.getElementById("moveInputColumn").value = ""
    console.log(currentMoveRow, currentMoveColumn)
    if (currentBoard.currentGameBoard[currentMoveColumn - 1][currentMoveRow - 1] == 0) {
        currentBoard.currentGameBoard[currentMoveColumn - 1][currentMoveRow - 1] = gameSituation.currentPlayer.playerSymbol
        console.log(currentBoard.currentGameBoard)
        if (currentBoard.checkWin(currentBoard.currentGameBoard)) {
            console.log(gameSituation.currentPlayer.playerSymbol + " won")
        }
        if (gameSituation.currentPlayer == x) {
            gameSituation.currentPlayer = o
        }
        else {
            gameSituation.currentPlayer = x
        }
    }
}


let gameSituation = gameLogic(x)

console.log(gameSituation.currentPlayer.playerSymbol)

