function gameBoard (currentGameBoard) {
    console.log(currentGameBoard)
    if (currentGameBoard == null) 
    {currentGameBoard = [[0,0,0],[0,0,0],[0,0,0]]}
    
    return {currentGameBoard}
}
let currentBoard = gameBoard()
console.log(currentBoard)

console.log(currentBoard.currentGameBoard)

function player (playerName, playerSymbol) {
    return {playerName, playerSymbol}
}
let x = player(null, "X")
let o = player(null, "O")
