// // functions // //
var move = 'O'
function clicked(){
if (move ==='X'){
  move = 'O'
}else{
  move = 'X'
}
this.innerHTML = move;
getWinner()
}
var boxes = document.getElementById('board').children
document.getElementById('reset-button').onclick= reset
for (var i = 0; i<boxes.length; i++){
boxes[i].onclick  = clicked;
}
function getWinner(){

  for (var i = 0; i<9; i++){
    counterX = 0;
    counterO = 0;
    for(var j=0; j<3; j++){
      if (boxes[winseq[i][j]].innerHTML === 'O' ){
         counterO++;
      }else if (boxes[winseq[i][j]].innerHTML === 'X')
      counterX++;
    }
    if(counterO > 2){
      alert("O WINS!")
    }
    if(counterX> 2){
      alert("X WINS!")
    }


    }
}

winseq= [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,1,2],
  [3,4,5],
  [0,4,8],
  [0,3,6],
  [0,4,7],
  [2,5,8]
]
function reset (){
  for (var i = 0; i<9; i++){
    boxes[i].innerHTML = ''
  }
}

