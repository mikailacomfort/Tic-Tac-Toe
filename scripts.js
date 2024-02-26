let board = [
  ["","",""],
  ["","",""],
  ["","",""]
]

let currentMarker = 'X'

const handleClick = (element) => {
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

const addMarker = (id) => {
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))
  
  board[row][column] = currentMarker
  document.getElementById(id).innerHTML = currentMarker;
  checkForWin()
}

const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

const resetBoard = () => {
  
  const squares = document.getElementsByTagName("td");
  console.log(squares)

  for (i=0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  } 
  board = [
  ["","",""],
  ["","",""],
  ["","",""]
] 
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!!!!!!!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  if((board[0][0]==="X" && board[0][1]==="X" && board[0][2]==="X")
  || (board[0][0]==="O" && board[0][1]==="O" && board[0][2]==="O")){
    return true
  } else if((board[1][0]==="X" && board[1][1]==="X" && board[1][2]==="X")
    || (board[1][0]==="O" && board[1][1]==="O" && board[1][2]==="O")){
      return true  
  } else if((board[2][0]==="X" && board[2][1]==="X" && board[2][2]==="X")
  || (board[2][0]==="O" && board[2][1]==="O" && board[2][2]==="O")){
    return true  
} else {
  return false
}
}

const verticalWin = () => {
  if((board[0][0]==="X" && board[1][0]==="X" && board[2][0]==="X")
  || (board[0][0]==="O" && board[1][0]==="O" && board[2][0]==="O")){
    return true
  } else if((board[0][1]==="X" && board[1][1]==="X" && board[2][1]==="X")
    || (board[0][1]==="O" && board[1][1]==="O" && board[2][1]==="O")){
      return true  
  } else if((board[0][2]==="X" && board[1][2]==="X" && board[2][2]==="X")
  || (board[0][2]==="O" && board[1][2]==="O" && board[2][2]==="O")){
    return true  
} else {
  return false
}}

const diagonalWin = () => {
  if((board[0][0]==="X" && board[1][1]==="X" && board[2][2]==="X")
  || (board[0][0]==="O" && board[1][1]==="O" && board[2][2]==="O")){
    return true 
  } else if((board[0][2]==="X" && board[1][1]==="X" && board[2][0]==="X")
  || (board[0][2]==="O" && board[1][1]==="O" && board[2][0]==="O")){
    return true  
} else {
  return false
}}
