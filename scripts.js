function gameBoard (currentGameBoard) {
    if (currentGameBoard == null) 
    {currentGameBoard = [[0,0,0],[0,0,0],[0,0,0]]}
    return {currentGameBoard}
}
let currentBoard = gameBoard();

function player (playerName, playerSymbol) {
    return {playerName, playerSymbol}
}
let x = player(null, "X")
let o = player(null, "O")



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
        if (gameSituation.currentPlayer == x) {
            gameSituation.currentPlayer = o
        }
        else {
            gameSituation.currentPlayer = x
        }
    }
}

function gameLogic (player) {
    currentPlayer = player
    return {currentPlayer}
}
let gameSituation = gameLogic(x)

console.log(gameSituation.currentPlayer.playerSymbol)

